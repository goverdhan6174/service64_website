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
import ListingDetailsComments from "../../components/contact/ListingDetailsComments";
import ReviewFields from "../../components/contact/ReviewFields";
// import PlaceOne from "../../components/places/PlaceOne";
// import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import { connect } from "react-redux";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import pic from "../../components/sliders/image.png";
import { FaCentercode } from "react-icons/fa";
import logo from "../../assets/images/favicon.png";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import MetaDecorator from "./../../utils/metaDecorator";
import metaData from "./../../meta/listingDetails";
import ReviewTable, {
  ReviewStarRow,
} from "../../components/addlisting/ReviewTable";
import ReactPlayer from "react-player";
import { bindActionCreators } from "redux";
import { get_listing_usr } from "../../store/action";
import { withRouter } from "react-router";

// ProductModal.find({}).skip(Number(skip)).limit(Number(limit)).exec()

class ListingDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      descTitle: "Category",
      locations: ["locations"],
      videoUrl: "",
      desc:
        "Nemo ucxqui officia voluptatem accu santium doloremque laudantium, totam rem ape dicta sunt dose explicabo. Nemo enim ipsam voluptatem quia voluptas. Excepteur sint occaecat cupidatat non proident, sunt in culpa kequi officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium dolorem que laudantium, totam rem aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      featureTitle: "Features",
      videoTitle: "Video",
      title: "Seller Name",
      seller_img: require("../../assets/images/img22.jpg"),
      buttonText: "Watch Video",
      mapTitle: "Location",
      peopleViewtitle: "People Also Viewed",
      stars: 0,
      totalStars: 5,
      star_reviews: {
        behaviour: 0,
        communication: 0,
        expertise: 0,
        recommendation: 0,
      },
      ratings: [
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStar />,
        <IoMdStarHalf />,
        <IoMdStar className="last-star" />,
      ],
      shareUrl: "https://service64.com/profile",
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.getSeller(id);
    // const details = JSON.parse(localStorage.getItem('"_ud_"'));
    // if (details !== undefined) {
    //   this.setState({
    //     desc: details.description,
    //     title: details.fullname,
    //     descTitle: details.category,
    //     city: details.city,
    //     seller_img: details.seller_img,
    //     locations: details.locations,
    //     videoUrl: details.videoUrl ? details.videoUrl : "",
    //   });
    // }
  }

  getSeller(id) {
    this.props.actions.get_listing_usr({ _id: id }).then((res) => {
      if (res.data) {
        let details = res.data[0];
        if (details !== undefined) {
          this.setState({
            desc: details.description,
            title: details.fullname,
            descTitle: details.category,
            city: details.city,
            seller_img: details.seller_img,
            locations: details.locations,
            videoUrl: details.videoUrl ? details.videoUrl : "",
            shareUrl: `https://service64.com/profile/${id}`,
          });
        }
      } else {
        console.log("REDIRECT TO 404 ");
      }
    });
  }

  getReview(stars, star_reviews) {
    this.setState({
      stars,
      star_reviews,
    });
  }

  render() {
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

        <section className="single-listing-area margin-bottom-40px user-select-none">
          <div className="container">
            <div className="justify-content-center row col-lg-12">
              <div className="col-lg-8">
                <div className="single-listing-wrap col-lg-12 bg-light mb-4 section-heading profile-description rounded">
                  <div className="listing-description">
                    <div className="section-heading mt-4 row">
                      <div className="col-lg-4 sellerImage p-4">
                        <img
                          src={
                            !!this.state.seller_img
                              ? this.state.seller_img
                              : logo
                          }
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div
                        className="col-lg-7 pt-3 center-col"
                        style={{ justifyContent: "space-between" }}
                      >
                        <div
                          className="col-lg-12 center-col p-0"
                          style={{ alignItems: "flex-start" }}
                        >
                          <h4 className="single-profile-name">
                            {this.state.title}
                          </h4>
                          <h3
                            className="single-profile-category user-select-none"
                            style={{ userSelect: "none" }}
                          >
                            {this.state.descTitle.toUpperCase()}
                          </h3>
                          <div className="mt-1">
                            <div className="py-2 pl-1">
                              <ReviewStarRow
                                stars={
                                  this.state.stars *
                                  0.01 *
                                  this.state.totalStars
                                }
                                color={"#ffd700"}
                              />
                            </div>
                            <ContactInfo />
                          </div>
                          {/*
                          <ReviewFields /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-listing-wrap col-lg-12 p-0 mb-4 ">
                  <div className="col-lg-12 padding-0">
                    <div className="listing-description ">
                      <div className="section-heading profile-description mt-0 mb-2 bg-light rounded">
                        {/* <div style={{boxShadow: "0px 1px 5px -3px"}}> */}
                        <h4 style={{ padding: "20px 0 0 20px" }}>About</h4>
                        {/* </div> */}
                        <p className="profile-dec font-size-14 text-justify">
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
                  <ReviewTable
                    sellerId={this.state.id}
                    getReview={this.getReview.bind(this)}
                  />
                </div>
              </div>

              <div className="col-lg-4 " style={{ paddingTop: "20px" }}>
                <div className="col-lg-12 section-heading profile-description bg-light rounded mb-4 py-3  ">
                  <p
                    className="signleProfileLocation p-0 center"
                    style={{ justifyContent: "space-between" }}
                  >
                    {<b>City: </b>}
                    {this.state.city}
                  </p>

                  <p
                    className="signleProfileLocation p-0 center"
                    style={{
                      justifyContent: "space-between",
                      textAlign: "end",
                    }}
                  >
                    <b className="mr-5">Areas: </b>
                    <span>
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
                    </span>
                  </p>

                  <hr />

                  <p
                    className="signleProfileLocation p-0 center"
                    style={{ justifyContent: "space-between" }}
                  >
                    {<b>Communication </b>}
                    {(
                      this.state.star_reviews.communication *
                      0.01 *
                      this.state.totalStars
                    ).toFixed(1)}
                  </p>
                  <p
                    className="signleProfileLocation p-0 center"
                    style={{ justifyContent: "space-between" }}
                  >
                    {<b>Recommend </b>}
                    {(
                      this.state.star_reviews.recommendation *
                      0.01 *
                      this.state.totalStars
                    ).toFixed(1)}
                  </p>
                  <p
                    className="signleProfileLocation p-0 center"
                    style={{ justifyContent: "space-between" }}
                  >
                    {<b>Service </b>}
                    {(
                      this.state.star_reviews.expertise *
                      0.01 *
                      this.state.totalStars
                    ).toFixed(1)}
                  </p>
                  <p
                    className="signleProfileLocation p-0 center"
                    style={{ justifyContent: "space-between" }}
                  >
                    {<b>Behaviour </b>}
                    {(
                      this.state.star_reviews.behaviour *
                      0.01 *
                      this.state.totalStars
                    ).toFixed(1)}
                  </p>
                </div>

                {this.state.videoUrl && (
                  <ReactPlayer
                    url={this.state.videoUrl}
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                )}

                <div className="section-heading profile-description mt-4 mb-4 bg-light rounded">
                  <h4 style={{ padding: "20px 0 0 20px" }}>Work Hours </h4>
                  <p className="profile-hours font-size-16 text-justify">
                    Sunday - Thus: 9AM - 7AM
                  </p>
                </div>

                <div className="section-heading profile-description mt-4 mb-4 bg-light rounded">
                <div className="justify-content-center row col-lg-12 my-2 " style={{ textAlign: 'center' }}>
                  <h4 style={{ textAlign: 'center' , padding:  "0 0 0 20px" }}>Share </h4>
                    <FacebookShareButton
                      className="mx-auto"
                      url={this.state.shareUrl}
                      quote={this.state.shareTitle}
                    >
                      <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton
                      className="mx-auto"
                      url={this.state.shareUrl}
                      title={this.state.shareTitle}
                    >
                      <TwitterIcon size={32} />
                    </TwitterShareButton>
                    <TelegramShareButton
                      className="mx-auto"
                      url={this.state.shareUrl}
                      title={this.state.shareTitle}
                    >
                      <TelegramIcon size={32} />
                    </TelegramShareButton>
                    <WhatsappShareButton
                      className="mx-auto"
                      url={this.state.shareUrl}
                      title={this.state.shareTitle}
                    >
                      <WhatsappIcon size={32} />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
              {/*
                <div className="col-lg-11">
                  <ReviewFields details={this.props.item} />
                  <ListingDetailsComments />
                </div>*/}
            </div>
          </div>
        </section>

        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        get_listing_usr,
      },
      dispatchEvent
    ),
  };
};

const mapStateToProps = (state) => {
  return {
    item: state.listing_details,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ListingDetails)
);
