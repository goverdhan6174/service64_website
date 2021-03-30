import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import ListingDetailsBreadcrumb from "./ListingDetailsBreadcrumb";
// import ListingDetailsSidebar from "../../components/sidebars/ListingDetailsSidebar";
import ListingDetailsGallery from "../../components/sliders/ListingDetailsGallery";
// import { BsCheckCircle } from "react-icons/bs";
// import { AiOutlinePlayCircle } from "react-icons/ai";
// import ModalVideo from "react-modal-video";
// import { Link } from "react-router-dom";
// import GeneralMap from "../../components/contact/GeneralMap";
import ContactInfo from "../../components/contact/ContactInfo";
// import CustomerFeedback from "../../components/sidebars/widgets/CustomerFeedback";
// import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
// import ReviewFields from "../../components/contact/ReviewFields";
// import PlaceOne from "../../components/places/PlaceOne";
// import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
// import { connect } from "react-redux";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import pic from "../../components/sliders/image.png";
import MetaDecorator from "./../../utils/metaDecorator";
import metaData from "./../../meta/myProfile";

class MyProfile extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      descTitle: "Category",
      desc:
        "Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      featureTitle: "Features",
      videoTitle: "Video",
      title: "Saller Name",
      videoImg: require("../../assets/images/img22.jpg"),
      buttonText: "Watch Video",
      mapTitle: "Location",
      peopleViewtitle: "People Also Viewed",
      // seller_img: pic,
      number: "+8803062028",
      hid: "XXXXXXX",
      numberStyle: {
        color: "black",
        fontFamily: "Arial",
      },
      slide: {
        color: "white",
        fontFamily: "Arial",
      },
      styles: {
        color: "black",
      },
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  componentDidMount() {
    const details = JSON.parse(localStorage.getItem("__current_user__"));
    if (details !== null) {
      this.setState({
        desc: details.description,
        title: details.fullname,
        descTitle: details.category,
        city: details.city,
        seller_img: details.seller_img,
        user_type: details.user_type,
        number: details.user_number,
        useremail: details.useremail,
        locations: details.locations,
      });
    }
  }

  numberShow() {
    const { number } = this.state;
    let num = number;
    const details = this.props.item;
    if (details !== undefined) {
      num = details.user_number;
      let changeStyle = {
        transition: "2s",
        color: "black",
      };
      this.setState({
        styles: changeStyle,
        hid: details.user_number.slice(4),
      });
    } else {
      let changeStyle = {
        transition: "2s",
        color: "black",
      };
      this.setState({
        styles: changeStyle,
        hid: num.slice(4),
      });
    }
  }

  render() {
    const { styles } = this.state;
    const { user_type, title, user_number, useremail } = this.state;
    return (
      <main className="listing-details">
        {/* SEO-Meta-Data */}
        {metaData.show && (
          <MetaDecorator
            title={metaData.pageTitle}
            description={metaData.pageDescription}
          />
        )}

        {/* Header */}
        <GeneralHeader />
        {/* Breadcrumb */}
        <ListingDetailsBreadcrumb />
        <section className="single-listing-area margin-bottom-40px">
          <div className="container">
            {user_type === "Seller" ? (
              <div className="justify-content-center row col-lg-12">
                <div className="col-lg-11">
                  <div className="single-listing-wrap">
                    <div className="col-lg-12">
                      <div className="listing-description">
                        <div className="section-heading mt-4 row singleProfileCard">
                          <div className="col-lg-8 row padding-0">
                            <div
                              className="col-lg-5 sellerImage"
                              style={{
                                backgroundImage: `url(${this.state.seller_img})`,
                                backgroundPosition: "center",
                                height: "220px",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                marginLeft: "35px",
                              }}
                            ></div>
                            <div
                              className="col-lg-6"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                marginRight: "4px",
                                paddingLeft: "40px",
                                paddingTop: "20px",
                              }}
                            >
                              <h2 className="single-profile-name">
                                {this.state.title}
                              </h2>
                              <h3
                                className="single-profile-category user-select-none"
                                style={{ userSelect: "none" }}
                              >
                                {this.state.descTitle}
                              </h3>

                              <p className="signleProfileLocation">
                                {<b>City: </b>}
                                {this.state.city}
                              </p>

                              <p className="signleProfileLocation">
                                {<b>Areas: </b>}
                                {this.state.locations.map((i, k) => {
                                  return (
                                    <span key={k}>
                                      {" "}
                                      {i}
                                      {this.state.locations.length != k + 1 ? (
                                        <span>,</span>
                                      ) : (
                                        ""
                                      )}{" "}
                                    </span>
                                  );
                                })}
                              </p>
                              {/* <ReviewFields /> */}
                            </div>
                          </div>

                          <div
                            className="listing-description col-lg-4"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              padding: "50px 0px 35px 20px",
                            }}
                          >
                            <div className="">
                              <div className="contact-listing">
                                {/* <h2 className="widget-title">
                            {this.state.title}
                        </h2> */}
                                <div className="info-list margin-top-5px padding-bottom-5px">
                                  <ul>
                                    {/* {this.state.address ? (
                                    <li> Location:  {this.state.address}</li>

                                ) : ''} */}

                                    {this.state.number ? (
                                      <li
                                        onClick={this.numberShow.bind(this)}
                                        style={{ cursor: "pointer" }}
                                        className="animate__backInLeft animate__delay-2s"
                                      >
                                        Click: {this.state.number.slice(0, 4)}
                                        <span style={styles}>
                                          {this.state.hid}
                                        </span>
                                      </li>
                                    ) : (
                                      ""
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="single-listing-wrap">
                    <div className="col-lg-12 padding-0">
                      <div className="listing-description ">
                        <div className="section-heading profile-description mt-0 shadow-sm mb-2 bg-light rounded">
                          <div
                            style={{
                              boxShadow: "0px 1px 5px -3px",
                            }}
                          >
                            <h2>Description</h2>
                          </div>
                          <p className="sec__desc font-size-14 text-justify">
                            {this.state.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 
                    <div className="col-lg-12 padding-0">
                      <div className="listing-description ">
                        <div className="section-heading profile-description mt-4 shadow-sm mb-2 bg-light rounded">
                          <div
                            style={{
                              boxShadow: "0px 1px 5px -3px",
                            }}
                          >
                            <h2>Work Exprience</h2>
                          </div>
                          <p className="sec__desc font-size-14 text-justify">
                            {this.state.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                            */}
                  </div>
                </div>

                <div className="col-lg-4  padding-0">
                  <div className="">
                    <div className="section-heading profile-description mt-0 shadow-sm mb-2 bg-light rounded">
                      <div
                        style={{
                          boxShadow: "0px 1px 5px -3px",
                        }}
                      >
                        <h2>Work Hours</h2>
                      </div>
                      <p className="sec__desc font-size-16 text-justify">
                        <h6> Sunday - Thus: 9AM - 7AM </h6>
                      </p>
                    </div>
                  </div>

                  {/*

                  <div className="">
                    <div className="section-heading profile-description mt-0 shadow-sm mb-2 bg-light rounded">



                      <div
                        style={{
                          boxShadow: "0px 1px 5px -3px",
                        }}
                      >
                        <h2>Gallery</h2>
                      </div>


                      <div
                        className="row justify-content-center"
                        style={{ padding: "25px" }}
                      >
                        <div className="col-lg-6 padding-0">
                          <img
                            src={pic}
                            width="100%"
                            alt="pic"
                            style={{ padding: "5px" }}
                          />
                        </div>
                        <div className="col-lg-6 padding-0">
                          <img
                            src={pic}
                            width="100%"
                            alt="pic"
                            style={{ padding: "5px" }}
                          />
                        </div>
                        <div className="col-lg-6 padding-0">
                          <img
                            src={pic}
                            width="100%"
                            alt="pic"
                            style={{ padding: "5px" }}
                          />
                        </div>
                        <div className="col-lg-6 padding-0">
                          <img
                            src={pic}
                            width="100%"
                            alt="pic"
                            style={{ padding: "5px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  */}
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div className="col-lg-4">
                  <div className="mt-4 ">
                    <h3 className="font-size-24"> Name : {title} </h3>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-size-24"> Phone : {user_number} </h3>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-size-24"> Email : {useremail} </h3>
                  </div>

                  <div className="mt-4">
                    <h3 className="font-size-24"> Name : {title} </h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default MyProfile;
