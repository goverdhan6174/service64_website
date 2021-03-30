import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import { Spinner } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import { BsListCheck, BsPencil, BsLock } from "react-icons/bs";
import {
  FaRegEdit,
  FaRegTrashAlt,
  FaGlobeAmericas,
  FaRegEnvelope,
} from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { FiPhone, FiEdit } from "react-icons/fi";
import {
  AiOutlineUser,
  AiOutlinePoweroff,
  AiOutlineYoutube,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import Button from "../../components/common/Button";
import $ from "jquery";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import Select from "react-select";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ImgUploader from "./ProfilePhotoEdit";
import {
  get_listing_usr,
  del_listing,
  listing_details,
  get_loc,
  edit_listing,
  get_cat,
  edit_buyer_profile,
  pwd_reset,
} from "../../store/action";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbimg: require("../../assets/images/morning-bird-dashboard.jpg"),
      cards: [
        {
          img: require("../../assets/images/img25.jpg"),
          title: "Favorite Place Food Bank",
          subtitle: "Bishop Avenue, New York",
          editTxt: "Edit",
          editIcon: <FaRegEdit />,
          deleteTxt: "Delete my profile",
          deleteIcon: <FaRegTrashAlt />,
          cardLink: "/listing-details",
        },
        {
          img: require("../../assets/images/img26.jpg"),
          title: "Beach Blue Boardwalk",
          subtitle: "Bishop Avenue, New York",
          editTxt: "Edit",
          editIcon: <FaRegEdit />,
          deleteTxt: "Delete",
          deleteIcon: <FaRegTrashAlt />,
          cardLink: "/listing-details",
        },
        {
          img: require("../../assets/images/img27.jpg"),
          title: "Hotel Govendor",
          subtitle: "Bishop Avenue, New York",
          editTxt: "Edit",
          editIcon: <FaRegEdit />,
          deleteTxt: "Delete",
          deleteIcon: <FaRegTrashAlt />,
          cardLink: "/listing-details",
        },
        {
          img: require("../../assets/images/img28.jpg"),
          title: "Favorite Place Food Bank",
          subtitle: "Bishop Avenue, New York",
          editTxt: "Edit",
          editIcon: <FaRegEdit />,
          deleteTxt: "Delete",
          deleteIcon: <FaRegTrashAlt />,
          cardLink: "/listing-details",
        },
        {
          img: require("../../assets/images/img29.jpg"),
          title: "Beach Blue Boardwalk",
          subtitle: "Bishop Avenue, New York",
          editTxt: "Edit",
          editIcon: <FaRegEdit />,
          deleteTxt: "Delete",
          deleteIcon: <FaRegTrashAlt />,
          cardLink: "/listing-details",
        },
        {
          img: require("../../assets/images/img30.jpg"),
          title: "Hotel Govendor",
          subtitle: "Bishop Avenue, New York",
          editTxt: "Edit",
          editIcon: <FaRegEdit />,
          deleteTxt: "Delete",
          deleteIcon: <FaRegTrashAlt />,
          cardLink: "/listing-details",
        },
      ],
      userImg: require("../../assets/images/team2.jpg"),
      userbio:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumlocations[0]",
      website: "www.techydevs.com",
      user_id: "",
      loading: true,
      items: [],
      item_del_id: "",
      is_logedin: "",
      user_type: false,
      email: "",
      title: "General Information",
      fullname: "",
      description: "",
      category: null,
      city: null,
      phone_number: null,
      saller_img: null,
      photo_name: null,
      is_logedin: false,
      categories: [],
      location: [],
      cities: [],
      password: "11223344",
      confirmpwd: "11223344",

      selected_city: null,
      selected_category: null,
      selected_location: null,
      validatedEmail: false,
      locations: [],
      city: "",

      imgUpload: false,
      profileEdit: false,

      currentPass: "",
      newPass: "",
      confirmPass: "",
      changePassErrMsg: false,
      changePassSuccMsg: false,
    };
  }

  componentDidMount() {
    const current_user = JSON.parse(localStorage.getItem("__current_user__"));
    if (current_user !== null) {
      this.setState({ is_logedin: true });
      if (current_user.user_type === "Seller") {
        this.get_loc();
        this.get_cat();
        this.setState({
          user_type: true,
        });
        this.props.actions
          .get_listing_usr({ _id: current_user._id })
          .then((res) => {
            /////////////////////////////////////////////////
            let new_arr = [];
            const data = res.data[0];
            let arr = data.locations;
            for (let i = 0; i < arr.length; i++) {
              const element = arr[i];
              console.log(element);
              const obj = {
                label: element,
                value: i,
              };
              new_arr.push(obj);
            }
            localStorage.setItem("__current_user__", JSON.stringify(data));
            this.setState({
              selected_location: new_arr,
              user_type: true,
              user_id: data._id,
              fullname: data.fullname,
              phone_number: data.user_number,
              city: data.city,
              selected_city: data.city,
              description: data.description,
              category: data.category,
              location: data.locations,
              items: res.data,
              loading: false,
            });
            /////////////////////////////////////////////////////
          });
      } else {
        this.props.actions
          .get_listing_usr({ _id: current_user._id })
          .then((res) => {
            const data = res.data[0];
            localStorage.setItem("__current_user__", JSON.stringify(data));

            this.setState({
              fullname: data.fullname,
              user_type: false,
              user_id: data._id,
              email: data.useremail,
              validatedEmail: true,
              //currentPass: data.password,
              loading: false,
            });
          });
      }
    } else {
      this.setState({
        loading: false,
        is_logedin: false,
      });
    }

    $(document).on(
      "click",
      ".delete-account-info .delete-account, .card-item .card-content-wrap .delete-btn",
      function (e) {
        $("body").addClass("modal-open").css({ paddingRight: "17px" });
        $(".account-delete-modal").addClass("show");
        e.preventDefault();
      }
    );
    $(document).on(
      "click",
      ".account-delete-modal .modal-bg, .account-delete-modal .modal-dialog .btn-box .theme-btn",
      function (e) {
        $("body").removeClass("modal-open").css({ paddingRight: "0" });
        $(".account-delete-modal").removeClass("show");
        e.preventDefault();
      }
    );
    $(document).on(
      "click",
      ".user-edit-form .edit-form-btn, .user-edit-form .btn-box .theme-btn",
      function (e) {
        $(
          ".user-edit-form .dropdown-menu, .user-edit-form .dropdown"
        ).toggleClass("show");
        $(".user-edit-form .dropdown-menu").css({
          position: "absolute",
          transform: "translate3d(0px, -733px, 0px)",
          top: "0",
          left: "0",
          willChange: "transform",
        });
        e.preventDefault();
      }
    );
  }

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

  handleChangeCat = (val) => {
    this.setState({ category: val.label });
  };

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

  validateEmail(val) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
      this.setState({ validatedEmail: true });
      this.setState({ email: val });
    }
  }

  value(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
      const txt = e.target.value;
      var num = txt.match(/\d+/);
      if (num !== null) {
        if (num[0].length > 10) {
          this.setState({
            number: num[0],
            validatedEmail: false,
          });
        }
      }
    }
  }

  updateSellerListing() {
    const {
      user_id,
      fullname,
      description,
      category,
      city,
      location,
      phone_number,
      saller_img,
      photo_name,
      password,
      confirmpwd,
    } = this.state;
    if (fullname.length < 1) {
      this.setState({
        changeDetailsErrMsg: "Saller Name required",
      });
    } else if (description.length < 40 || description.length > 400) {
      this.setState({
        changeDetailsErrMsg:
          "An effective overview needs to be at least 40 to 400 characters",
      });
    } else if (category === "") {
      this.setState({
        changeDetailsErrMsg: "Please select category !",
      });
    } else if (saller_img === "") {
      this.setState({
        changeDetailsErrMsg: "Please upload a picture !",
      });
    } else if (city === "") {
      this.setState({
        changeDetailsErrMsg: "Please your City !",
      });
    } else if (location.length < 1) {
      this.setState({
        changeDetailsErrMsg: "Please select an area !",
      });
    } else if (phone_number.length < 11) {
      this.setState({
        changeDetailsErrMsg: "Phone nuber should not be less than 11!",
      });
    } else {
      const saller = {
        _id: user_id,
        fullname: fullname,
        description: description,
        user_type: "Seller",
        category: category,
        city: city,
        location: location,
        phone_number: phone_number,
        saller_img: saller_img,
        photo_name: photo_name,
        password: confirmpwd,
      };
      this.props.actions
        .edit_listing(saller)
        .then((res) => {
          if (res.data !== undefined) {
            window.location.reload();
            this.setState({
              profileEdit: false,
            });
          } else {
            this.setState({
              changeDetailsSuccMsg: res.data.message,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  updateBuyerListing() {
    if (this.state.fullname.length < 2) {
      this.setState({
        changeDetailsErrMsg: "Buyer Name required",
      });
    } else if (!this.state.validatedEmail) {
      this.setState({
        changeDetailsErrMsg: "Please Inter Valide Email !",
      });
    } else {
      const buyer = {
        _id: this.state.user_id,
        fullname: this.state.fullname,
        useremail: this.state.email,
      };
      this.props.actions
        .edit_buyer_profile(buyer)
        .then((res) => {
          if (res.data !== undefined) {
            this.setState({
              profileEdit: false,
              changeDetailsSuccMsg: res.data.message,
              changeDetailsErrMsg: false,
            });
            window.location.reload();
          } else {
            this.setState({
              changeDetailsErrMsg: res.data.message,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }

  updatePass() {
    if (this.state.currentPass.length < 8) {
      this.setState({
        changePassErrMsg: "Eter Your Current password !",
      });
    } else if (this.state.newPass.length < 8) {
      this.setState({
        changePassErrMsg: "Your password must be at least 8 characters long !",
      });
    } else if (this.state.newPass !== this.state.confirmPass) {
      this.setState({
        changePassErrMsg: "Password does not match",
      });
    } else {
      const body = {
        _id: this.state.user_id,
        password: this.state.confirmPass,
        currentPass: this.state.currentPass,
      };

      this.props.actions
        .pwd_reset(body)
        .then((res) => {
          console.log(res);
          if (res.data.resulte) {
            this.setState({
              changePassSuccMsg: res.data.message,
              changePassErrMsg: false,
            });
          } else {
            this.setState({
              changePassSuccMsg: false,
              changePassErrMsg: res.data.message,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  get_del_id(id) {
    console.log(id);
    this.setState({
      item_del_id: id,
    });
  }

  item_del() {
    const history = this.props.history;
    const { user_id } = this.state;
    this.props.actions
      .del_listing({ _id: user_id })
      .then((response) => {
        console.log("response", response);
        localStorage.removeItem("__current_user__");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  get_listing_detailes(details) {
    this.props.actions.listing_details(details);
    // localStorage.setItem('"__current_user__"', JSON.stringify(details))
    const history = this.props.history;
    console.log(details);
    history.push("/myprofile");
  }

  render() {
    const {
      imgUpload,
      loading,
      cards,
      items,
      is_logedin,
      user_type,
      cities,
      selected_city,
      locations,
      description,
      selected_location,
      location,
      categories,
      category,
      profileEdit,
      city,
    } = this.state;
    return (
      <main className="dashboard-page">
        <GeneralHeader />
        <Breadcrumb
          CurrentPgTitle="Dashboard"
          MenuPgTitle="pages"
          img={this.state.breadcrumbimg}
        />
        <section className="dashboard-area padding-top-40px padding-bottom-90px">
          <div className="container">
            <Tabs>
              <div className="row">
                <div className="col-lg-12">
                  <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4">
                    <TabList className="nav nav-tabs border-0" id="nav-tab">
                      <Tab>
                        <Link
                          className="nav-item nav-link theme-btn pt-0 pb-0 mr-1"
                          to="#"
                        >
                          <span className="la">
                            <AiOutlineUser />
                          </span>{" "}
                          Edit Profile
                        </Link>
                      </Tab>
                      <Tab>
                        <Link
                          className="nav-item nav-link theme-btn pt-0 pb-0 mr-1"
                          to="#"
                        >
                          <span className="la">
                            <BsListCheck />
                          </span>{" "}
                          My Profile
                        </Link>
                      </Tab>
                    </TabList>
                    <div className="btn-box">
                      <Link to="/" className="theme-btn ml-1">
                        <span className="la">
                          <AiOutlinePoweroff />
                        </span>{" "}
                        sign out
                      </Link>
                    </div>
                  </div>
                </div>
                {!is_logedin && (
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {" "}
                    <div
                      style={{ width: "30%" }}
                      className="alert alert-dark"
                      role="alert"
                    >
                      {" "}
                      <Link to={"/login"}> Click here to sign in </Link>
                    </div>
                  </div>
                )}
                {is_logedin && (
                  <div className="col-lg-12">
                    <div className="tab-content" id="nav-tabContent">
                      <TabPanel>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="user-profile-action">
                              {user_type && (
                                <div className="billing-form-item">
                                  <div className="billing-title-wrap">
                                    <h3 className="widget-title pb-0">
                                      Change Details
                                    </h3>
                                    <div className="title-shape margin-top-10px"></div>
                                  </div>
                                  <div className="billing-content">
                                    <ImgUploader />
                                  </div>
                                </div>
                              )}

                              <div className="billing-form-item">
                                <div className="billing-title-wrap">
                                  <h3 className="widget-title pb-0">
                                    Change Password
                                  </h3>
                                  <div className="title-shape margin-top-10px"></div>
                                </div>
                                <div className="billing-content">
                                  <div className="contact-form-action">
                                    <div className="input-box">
                                      <label className="label-text">
                                        Current Password
                                      </label>
                                      <div className="form-group">
                                        <span className="la form-icon">
                                          <BsLock />
                                        </span>
                                        <input
                                          className="form-control"
                                          type="password"
                                          name="currentPass"
                                          value={this.state.currentPass}
                                          onChange={this.value.bind(this)}
                                          placeholder="Current Password"
                                        />
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <label className="label-text">
                                        New Password
                                      </label>
                                      <div className="form-group">
                                        <span className="la form-icon">
                                          <BsLock />
                                        </span>
                                        <input
                                          className="form-control"
                                          type="password"
                                          name="newPass"
                                          value={this.state.newPass}
                                          onChange={this.value.bind(this)}
                                          placeholder="New Password"
                                        />
                                      </div>
                                    </div>
                                    <div className="input-box">
                                      <label className="label-text">
                                        Confirm New Password
                                      </label>
                                      <div className="form-group">
                                        <span className="la form-icon">
                                          <BsLock />
                                        </span>
                                        <input
                                          className="form-control"
                                          type="password"
                                          name="confirmPass"
                                          value={this.state.confirmPass}
                                          onChange={this.value.bind(this)}
                                          placeholder="Confirm New Password"
                                        />
                                      </div>
                                    </div>
                                    {this.state.changePassSuccMsg && (
                                      <div className="alert alert-success">
                                        {this.state.changePassSuccMsg}
                                      </div>
                                    )}
                                    {this.state.changePassErrMsg && (
                                      <div className="alert alert-danger">
                                        {this.state.changePassErrMsg}
                                      </div>
                                    )}
                                    <div className="btn-box">
                                      <button
                                        className="theme-btn button-success border-0"
                                        onClick={this.updatePass.bind(this)}
                                      >
                                        updated password
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-8">
                            <div className="user-profile-action">
                              {user_type ? (
                                <>
                                  <div className="billing-form-item">
                                    <div className="billing-title-wrap">
                                      <h3 className="widget-title pb-0">
                                        Change Details
                                      </h3>
                                      <div className="title-shape margin-top-10px"></div>
                                    </div>
                                    <div className="billing-content">
                                      <div className="user-details">
                                        {!profileEdit && (
                                          <>
                                            <h2 className="user__name widget-title pb-2">
                                              {this.state.fullname}
                                            </h2>
                                            <div className="section-heading">
                                              <p className="sec__desc font-size-15 line-height-24">
                                                {description}
                                              </p>
                                            </div>

                                            <ul className="list-items mt-3">
                                              <li>
                                                <span className="la d-inline-block">
                                                  <GiPositionMarker />
                                                </span>{" "}
                                                Working Areas:
                                                {this.state.location.length >
                                                  1 &&
                                                  this.state.city +
                                                    ", " +
                                                    this.state.location[0] +
                                                    ", (" +
                                                    (this.state.location
                                                      .length -
                                                      1) +
                                                    " more) "}
                                                {this.state.location.length <
                                                  2 &&
                                                  this.state.city +
                                                    " " +
                                                    this.state.location[0]}
                                              </li>
                                              <li className="">
                                                <span className="la d-inline-block">
                                                  <FiPhone />
                                                </span>{" "}
                                                Phone Number:{" "}
                                                {this.state.phone_number}
                                              </li>
                                            </ul>
                                            <div className="edit-form mt-4">
                                              <button
                                                onClick={() => {
                                                  this.setState({
                                                    profileEdit: true,
                                                  });
                                                }}
                                                className="theme-btn edit-btn border-0 after-none"
                                                type="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                              >
                                                <i className="la">
                                                  <FiEdit />
                                                </i>{" "}
                                                Edit Details
                                              </button>
                                            </div>
                                          </>
                                        )}

                                        {profileEdit && (
                                          <div>
                                            <div className="">
                                              <div className="contact-form-action">
                                                <div className="input-box">
                                                  <div className="form-group">
                                                    <span className="la form-icon">
                                                      <AiOutlineUser />
                                                    </span>
                                                    <input
                                                      className="form-control"
                                                      type="text"
                                                      name="fullname"
                                                      placeholder="Enter your name"
                                                      value={
                                                        this.state.fullname
                                                      }
                                                      onChange={this.value.bind(
                                                        this
                                                      )}
                                                    />
                                                  </div>
                                                </div>
                                                <div className="input-box">
                                                  <label className="label-text">
                                                    Discription
                                                  </label>
                                                  <div className="form-group">
                                                    <span className="la form-icon">
                                                      <BsPencil />
                                                    </span>
                                                    <textarea
                                                      className="message-control form-control"
                                                      name="description"
                                                      placeholder="Add Discription"
                                                      value={
                                                        this.state.description
                                                      }
                                                      onChange={this.value.bind(
                                                        this
                                                      )}
                                                    ></textarea>
                                                  </div>
                                                </div>

                                                <div className="input-box">
                                                  <div className="input-box">
                                                    <div className="form-group">
                                                      <Select
                                                        value={category}
                                                        onChange={this.handleChangeCat.bind(
                                                          this
                                                        )}
                                                        placeholder={category}
                                                        options={categories}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="input-box">
                                                  <div className="input-box">
                                                    <div className="form-group">
                                                      <Select
                                                        value={selected_city}
                                                        onChange={this.handleChangeCit.bind(
                                                          this
                                                        )}
                                                        placeholder={
                                                          selected_city
                                                        }
                                                        options={cities}
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="input-box">
                                                  <div className="input-box">
                                                    <div className="form-group">
                                                      <Select
                                                        value={
                                                          selected_location
                                                        }
                                                        isMulti
                                                        onChange={this.handleChangeLoc.bind(
                                                          this
                                                        )}
                                                        placeholder="Location"
                                                        options={locations}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                      />
                                                    </div>
                                                  </div>
                                                </div>

                                                <div className="input-box">
                                                  <div className="form-group">
                                                    <span className="la form-icon">
                                                      <FiPhone />
                                                    </span>
                                                    <input
                                                      className="form-control"
                                                      type="text"
                                                      name="phone_number"
                                                      placeholder="Number"
                                                      value={
                                                        this.state.phone_number
                                                      }
                                                      onChange={this.value.bind(
                                                        this
                                                      )}
                                                    />
                                                  </div>
                                                </div>

                                                {this.state
                                                  .changeDetailsErrMsg && (
                                                  <div className="alert alert-danger">
                                                    {
                                                      this.state
                                                        .changeDetailsErrMsg
                                                    }
                                                  </div>
                                                )}

                                                <div className="btn-box">
                                                  <button
                                                    type="submit"
                                                    className="theme-btn border-0 button-success mr-1"
                                                    onClick={this.updateSellerListing.bind(
                                                      this
                                                    )}
                                                  >
                                                    save changes
                                                  </button>

                                                  <button
                                                    type="button"
                                                    onClick={() => {
                                                      this.setState({
                                                        profileEdit: false,
                                                      });
                                                    }}
                                                    className="theme-btn border-0"
                                                  >
                                                    Cancel
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="user-details">
                                    <div className="billing-form-item">
                                      <div className="billing-title-wrap">
                                        <h3 className="widget-title pb-0">
                                          Change Details
                                        </h3>
                                        <div className="title-shape margin-top-10px"></div>
                                      </div>
                                      <div className="billing-content">
                                        <div className="contact-form-action">
                                          <div className="input-box">
                                            <label className="label-text">
                                              Name
                                            </label>
                                            <div className="form-group">
                                              <span className="la form-icon">
                                                <AiOutlineUser />
                                              </span>
                                              <input
                                                className="form-control"
                                                type="text"
                                                name="fullname"
                                                placeholder="Enter your name"
                                                value={this.state.fullname}
                                                onChange={this.value.bind(this)}
                                              />
                                            </div>
                                          </div>
                                          <div className="input-box">
                                            <label className="label-text">
                                              Email
                                            </label>

                                            <div className="form-group">
                                              <span className="la form-icon">
                                                <FaRegEnvelope />
                                              </span>
                                              <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                value={this.state.email}
                                                onChange={this.value.bind(this)}
                                              />
                                            </div>
                                          </div>
                                          {this.state.changeDetailsSuccMsg && (
                                            <div className="alert alert-success">
                                              {this.state.changeDetailsSuccMsg}
                                            </div>
                                          )}
                                          {this.state.changeDetailsErrMsg && (
                                            <div className="alert alert-danger">
                                              {this.state.changeDetailsErrMsg}
                                            </div>
                                          )}
                                          <div className="btn-box">
                                            <button
                                              type="button"
                                              className="theme-btn border-0 button-success mr-1"
                                              onClick={this.updateBuyerListing.bind(
                                                this
                                              )}
                                            >
                                              save changes
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>

                            <div className="delete-account-info">
                              <div className="billing-form-item">
                                <div className="billing-title-wrap">
                                  <h3 className="widget-title pb-0 color-text">
                                    Delete Account
                                  </h3>
                                  <div className="title-shape margin-top-10px"></div>
                                </div>
                                <div className="delete-info-content p-4">
                                  <p className="mb-3">
                                    <span className="text-warning">
                                      Warning:
                                    </span>{" "}
                                    Once you delete your account, there is no
                                    going back. Please be certain.
                                  </p>
                                  <Button
                                    text="delete my account"
                                    url="#"
                                    className="delete-account border-0"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="row">
                          {loading ? (
                            <div style={{ textAlign: "center", width: "100%" }}>
                              <span>
                                <Spinner animation="grow" id="loder" />
                              </span>
                            </div>
                          ) : (
                            <>
                              {items.map((item, i) => {
                                return (
                                  <div key={i} className="col-lg-4 column-td-6">
                                    <div className="card-item">
                                      <div
                                        onClick={this.get_listing_detailes.bind(
                                          this,
                                          item
                                        )}
                                        className="card-image-wrap"
                                        style={{ cursor: "pointer" }}
                                      >
                                        <div className="card-image">
                                          <img
                                            src={item.seller_img}
                                            className="card__img"
                                            alt="Card"
                                          />
                                        </div>
                                      </div>
                                      <div className="card-content-wrap">
                                        <div className="card-content">
                                          <div
                                            onClick={this.get_listing_detailes.bind(
                                              this,
                                              item
                                            )}
                                            style={{ cursor: "pointer" }}
                                          >
                                            <h4 className="card-title mt-0">
                                              {item.fullname}
                                            </h4>
                                            <p className="card-sub">
                                              {"Location: " +
                                                item.locations[0] +
                                                ", " +
                                                item.city}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="rating-row">
                                          <div className="edit-info-box">
                                            <button
                                              type="button"
                                              className="theme-btn delete-btn border-0"
                                              data-toggle="modal"
                                              onClick={this.get_del_id.bind(
                                                this,
                                                item._id
                                              )}
                                              data-target=".product-delete-modal"
                                            >
                                              <span className="la">
                                                {cards[0].deleteIcon}
                                              </span>{" "}
                                              {cards[0].deleteTxt}
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </>
                          )}
                        </div>
                      </TabPanel>
                    </div>
                  </div>
                )}
              </div>
            </Tabs>
          </div>
        </section>
        <NewsLetter />
        <Footer />
        <ScrollTopBtn />
        <div className="modal-form text-center">
          <div
            className="modal fade account-delete-modal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
          >
            <div className="modal-bg"></div>
            <div className="modal-dialog modal-sm" role="document">
              <div className="modal-content p-4">
                <div className="modal-top border-0 mb-4 p-0">
                  <div className="alert-content">
                    <span className="la warning-icon">
                      <AiOutlineExclamationCircle />
                    </span>
                    <h4 className="modal-title mt-2 mb-1">
                      Your account will be deleted permanently!
                    </h4>
                    <p className="modal-sub">Are you sure to proceed.</p>
                  </div>
                </div>
                <div className="btn-box">
                  <button
                    type="button"
                    className="theme-btn border-0 button-success mr-1"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={this.item_del.bind(this)}
                    className="theme-btn border-0 button-danger"
                  >
                    delete!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state,
  };
};

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        get_listing_usr,
        del_listing,
        listing_details,
        get_loc,
        edit_listing,
        get_cat,
        edit_buyer_profile,
        pwd_reset,
      },
      dispatchEvent
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
