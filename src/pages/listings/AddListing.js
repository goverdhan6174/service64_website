import Select from "react-select";
import React, { Component } from "react";
import {
  BsPencil,
  BsPerson,
  BsLock,
  BsCalendar,
  BsShieldLock,
  BsHouse,
} from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import PhotoUploader from "../../components/addlisting/PhotoUploader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add_listing, get_cat } from "../../store/action";
import { Spinner } from "react-bootstrap";
import { val, get_loc } from "../../store/action";

class AddListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbimg: require("../../assets/images/bread-bg.jpg"),
      title: "General Information",
      saller_name: "",
      description: "",
      category: "",
      city: "",
      location: [],
      phone_number: "",
      saller_img: "",
      photo_name: "",
      is_logedin: false,
      categories: [],
      password: "",
      confirmpwd: "",
      date_of_birth: "",
      national_id: "",
      current_address: "",
      permanent_address: "",
      title: "Personal Information",

      selected_city: null,
      selected_location: null,

      cities: [],
      locations: [],

      city: "",
      agreed: false,
    };
  }

  handleChangeCit = (ev) => {
    console.log(ev);
    this.setState({ selected_city: ev, city: ev.label });
    if (ev.locations !== null) {
      let array = ev.locations;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          locations: new_arr,
          selected_location: null,
          location: [],
        });
      }
    } else {
      this.setState({ locations: [] });
    }
  };

  handleChangeLoc = (ev) => {
    let arr = [];
    if (ev !== null) {
      ev.map((i) => {
        arr.push(i.label);
      });
      this.setState({ location: arr, selected_location: ev });
    } else {
      this.setState({
        selected_location: [],
      });
    }
  };

  get_loc() {
    this.props.actions.get_loc().then((res) => {
      let array = res.data;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          cities: new_arr,
        });
      }
    });
  }

  componentDidMount() {
    this.get_loc();
    this.get_cat();
  }

  get_cat() {
    this.props.actions.get_cat().then((res) => {
      let array = res.data;
      let new_arr = [];
      if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          element.value = i;
          new_arr.push(element);
        }
        this.setState({
          categories: new_arr,
        });
      }
    });
  }

  componentWillReceiveProps(prop) {
    const event = prop.event;
    if (prop.saller_img) {
      this.setState({
        saller_img: prop.saller_img.photo,
        photo_name: prop.saller_img.photo_name,
      });
    }
  }
  submit_listing() {
    const {
      saller_name,
      description,
      category,
      city,
      location,
      phone_number,
      saller_img,
      photo_name,
      password,
      confirmpwd,
      date_of_birth,
      national_id,
      current_address,
      permanent_address,
      agreed,
    } = this.state;

    let yymmdd = date_of_birth.split("-");
    let dob = new Date(...yymmdd);
    let dateHasError = "";
    if (dob instanceof Date) {
      let currentDate = new Date();
      let diff = currentDate.getTime() - dob.getTime();
      if (diff < 220898664000 || diff > 3155695200000) {
        dateHasError = "Minimum age is 7 years";
      }
    } else {
      dateHasError = "Invalid Date";
    }

    if (saller_img === "") {
      this.setState({
        message_err: "Please upload your photo",
      });
    } else if (saller_name.length < 1) {
      this.setState({
        message_err: "Please enter your name",
      });
    } else if (phone_number.length < 1) {
      this.setState({
        message_err: "Please enter your phone number",
      });
    } else if (phone_number.length < 11) {
      this.setState({
        message_err: "Your number should not be less than 11 digits!",
      });
    } else if (phone_number.length > 11) {
      this.setState({
        message_err: "Your number should not be more than 11 digits!",
      });
    } else if (password.length < 1) {
      this.setState({
        message_err: "You must enter a password",
      });
    } else if (password.length < 8) {
      this.setState({
        message_err: "Password should be at least 8 characters long !",
      });
    } else if (confirmpwd !== password) {
      this.setState({
        message_err: "Confirm password does not match",
      });
    } else if (description.length < 1) {
      this.setState({
        message_err: "Please write about yourself.",
      });
    } else if (description.length < 40 || description.length > 400) {
      this.setState({
        message_err:
          "An effective overview needs to be at least 40 to 400 characters",
      });
    } else if (!!dateHasError) {
      this.setState({
        message_err: dateHasError,
      });
    } else if (national_id.length < 10) {
      this.setState({
        message_err: "Your National Id must be at least 10 characters long !",
      });
    } else if (current_address.length < 20) {
      this.setState({
        message_err:
          "Your current address must be at least 20 characters long !",
      });
    } else if (permanent_address.length < 20) {
      this.setState({
        message_err:
          "Your permanent address must be at least 20 characters long !",
      });
    } else if (category === "") {
      this.setState({
        message_err: "Please select a category !",
      });
    } else if (city === "") {
      this.setState({
        message_err: "Please select your city !",
      });
    } else if (location.length < 1) {
      this.setState({
        message_err: "Please enter your working areas !",
      });
    } else if (!agreed) {
      this.setState({
        message_err: "Can't Sign Up without accepting the terms and conditions",
      });
    } else {
      const saller = {
        saller_name: saller_name,
        description: description,
        user_type: "Seller",
        category: category,
        city: city,
        location: location,
        phone_number: phone_number,
        saller_img,
        // saller_img: `https://source.unsplash.com/random/300x200?sig=${Math.ceil(
        //   Math.random() * 10000
        // )}`,
        photo_name: photo_name,
        password: confirmpwd,
        date_of_birth: new Date(...date_of_birth.split("-")),
        national_id,
        current_address,
        permanent_address,
        agreed,
      };
      this.setState({
        is_logedin: true,
      });
      this.props.actions
        .add_listing(saller)
        .then((res) => {
          if (res.data.message) {
            this.setState({
              is_logedin: false,
              message_err: res.data.message,
            });
          } else {
            this.setState({
              is_logedin: false,
            });
            this.props.history.push("/list");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  value(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChangeCat = (val) => {
    this.setState({ category: val.label });
  };

  render() {
    const {
      is_logedin,
      categories,
      cities,
      locations,
      selected_location,
      selected_city,
    } = this.state;

    return (
      <main className="add-listing">
        {is_logedin && (
          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              height: "400px",
            }}
          >
            <span>
              <Spinner animation="grow" id="loder" />
            </span>
          </div>
        )}
        {!is_logedin && (
          <section className="add-listing-area padding-top-40px padding-bottom-100px">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <PhotoUploader />
                </div>

                <div className="col-lg-8">
                  <div className="billing-form-item">
                    <div className="billing-title-wrap">
                      <h3 className="widget-title pb-0">{this.state.title}</h3>
                      <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                      <div className="contact-form-action">
                        <form method="post">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">Your Name</label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsPerson />
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="saller_name"
                                    value={this.state.saller_name}
                                    onChange={this.value.bind(this)}
                                    placeholder="Enter your Name"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">
                                  Phone Number
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <FiPhone />
                                  </span>
                                  <input
                                    className="form-control"
                                    type="text"
                                    name="phone_number"
                                    value={this.state.phone_number}
                                    onChange={this.value.bind(this)}
                                    placeholder="Phone Number"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">Password</label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsLock />
                                  </span>
                                  <input
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.value.bind(this)}
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">
                                  Confirm Password
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsLock />
                                  </span>
                                  <input
                                    className="form-control"
                                    value={this.state.confirmpwd}
                                    name="confirmpwd"
                                    onChange={this.value.bind(this)}
                                    className="form-control"
                                    type="password"
                                    placeholder="Confirm password"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">
                                  Description
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsPencil />
                                  </span>
                                  <textarea
                                    className="message-control form-control"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.value.bind(this)}
                                    placeholder="Write your listing description"
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">
                                  Date Of Birth
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsCalendar />
                                  </span>
                                  <input
                                    value={this.state.date_of_birth}
                                    name="date_of_birth"
                                    onChange={this.value.bind(this)}
                                    className="form-control"
                                    type="date"
                                    placeholder="Choose your birthdate"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">
                                  National ID
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsShieldLock />
                                  </span>
                                  <input
                                    className="form-control"
                                    value={this.state.national_id}
                                    name="national_id"
                                    onChange={this.value.bind(this)}
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter your National Id"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">
                                  Current Address
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsHouse />
                                  </span>
                                  <textarea
                                    className="message-control form-control"
                                    name="current_address"
                                    value={this.state.current_address}
                                    onChange={this.value.bind(this)}
                                    placeholder="Write your current address"
                                    style={{ height: "auto" }}
                                  ></textarea>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">
                                  Permanent Address
                                </label>
                                <div className="form-group">
                                  <span className="la form-icon">
                                    <BsHouse />
                                  </span>
                                  <textarea
                                    className="message-control form-control"
                                    name="permanent_address"
                                    value={this.state.permanent_address}
                                    onChange={this.value.bind(this)}
                                    placeholder="Write your permanent address"
                                    style={{ height: "auto" }}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="billing-form-item">
                    <div className="billing-title-wrap">
                      <h3 className="widget-title pb-0">Working Areas</h3>
                      <div className="title-shape margin-top-10px"></div>
                    </div>
                    <div className="billing-content">
                      <div className="contact-form-action">
                        <form method="post">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">Category</label>
                                <div className="form-group mb-0">
                                  <span className="la form-icon">
                                    <BsPencil />
                                  </span>
                                  <Select
                                    value={this.category}
                                    onChange={this.handleChangeCat.bind(this)}
                                    placeholder="Select a Category"
                                    options={categories}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6">
                              <div className="input-box">
                                <label className="label-text">City</label>
                                <div className="form-group">
                                  <Select
                                    value={selected_city}
                                    onChange={this.handleChangeCit.bind(this)}
                                    placeholder="Select a City"
                                    options={cities}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="input-box">
                                <label className="label-text">
                                  Select Area
                                </label>
                                <div className="form-group">
                                  <Select
                                    value={selected_location}
                                    isMulti
                                    onChange={this.handleChangeLoc.bind(this)}
                                    placeholder="Select your area"
                                    options={locations}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div
                    class="billing-content"
                    style={{ paddingTop: 0, paddingBottom: "5px" }}
                  >
                    <form method="post">
                      <div className="">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="agreed"
                          id="agreed"
                          value={this.state.agreed}
                          onChange={(e) =>
                            this.setState({
                              agreed: !this.state.agreed,
                            })
                          }
                        />
                        <label class="form-check-label" for="agreed">
                          Agree with the{" "}
                        </label>
                        <a
                          target="_blank"
                          href="https://service64.com/terms-conditions"
                          style={{
                            color: "#15b7c9",
                          }}
                        >
                          {" "}
                          terms and conditions
                        </a>
                      </div>
                    </form>
                  </div>

                  {this.state.message_err && (
                    <div className="alert alert-danger">
                      {this.state.message_err}
                    </div>
                  )}

                  <div className="billing-form-item p-0 border-0 mb-0 shadow-none">
                    <div className="billing-content p-0">
                      <div className="btn-box mt-4">
                        <button
                          type="submit"
                          className="theme-btn border-0"
                          onClick={this.submit_listing.bind(this)}
                        >
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Newsletter */}
        {/* <NewsLetter /> */}

        {/* Footer */}
        {/* <Footer /> */}

        {/* <ScrollTopBtn /> */}
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    item: state,
    event: state.val,
    ope_hrs: state.ope_hrs,
    saller_img: state.upload_img,
    amenities: state.get_amenities,
  };
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        add_listing,
        get_cat,
        val,
        get_loc,
      },
      dispatchEvent
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
