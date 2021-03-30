import React, { Component } from "react";
import { GiPositionMarker, GiChickenOven } from "react-icons/gi";
import { MdStar, MdStarBorder, MdClose } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { AiOutlineFlag } from "react-icons/ai";
import {
  FaRegMoneyBillAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTumblr,
  FaSnapchatGhost,
  FaGooglePlusG,
  FaPinterest,
  FaVk,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  RiBookmarkLine,
  RiExternalLinkLine,
  RiSendPlane2Line,
} from "react-icons/ri";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import $ from "jquery";


class ListingDetailsBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Tasty Hand-Pulled Noodles",
      stitle: "101 East Parkview Road, New York",
      shareLinks: [
        {
          icon: <FaFacebookF />,
          title: "facebook",
          url: "https://facebook.com",
        },
        {
          icon: <FaTwitter />,
          title: "twitter",
          url: "https://twitter.com",
        },
        {
          icon: <FaInstagram />,
          title: "twitter",
          url: "https://instagram.com",
        },
        {
          icon: <FaTumblr />,
          title: "tumblr",
          url: "https://tumblr.com",
        },
        {
          icon: <FaSnapchatGhost />,
          title: "snapchat",
          url: "https://snapchat.com",
        },
        {
          icon: <FaGooglePlusG />,
          title: "google plus",
          url: "https://plus.google.com",
        },
        {
          icon: <FaPinterest />,
          title: "pinterest",
          url: "https://pinterest.com",
        },
        {
          icon: <FaVk />,
          title: "vkontakte",
          url: "https://vkontakte.com",
        },
        {
          icon: <FaLinkedinIn />,
          title: "linkedin",
          url: "https://linkedin.com",
        },
        {
          icon: <FaYoutube />,
          title: "youtube",
          url: "https://youtube.com",
        },
      ],
    };
  }

  componentDidMount() {
    const details = JSON.parse(localStorage.getItem('"_ud_"'));
    if (details !== undefined) {
      this.setState({
        desc: details.description,
        title: details.fullname,
        descTitle: details.category,
        city: details.city,
        seller_img: details.seller_img,
        locations: details.locations,
      });
    }
  }

  render() {
    return (
      <>
        <section className="breadcrumb-area listing-detail-breadcrumb">
          <div className="breadcrumb-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 position-relative">
                  <div className="breadcrumb-content">
                    <h2 className="single_listing__title">
                      {this.state.title}
                    </h2>
                    <p className="breadcrumb__desc">
                      <span className="la d-inline-block">
                        <GiPositionMarker />
                      </span>{" "}
                      {this.state.city}
                      <span>,</span> {this.state.descTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bread-svg">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M-4.22,89.30 C280.19,26.14 324.21,125.81 511.00,41.94 L500.00,150.00 L0.00,150.00 Z" />
            </svg>
          </div>
        </section>

        <div className="modal-form">
          <div
            className="modal fade report-modal-box bs-example-modal-lg"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
          >
            <div className="modal-bg"></div>
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-top">
                  <button
                    type="button"
                    className="close close-arrow"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" className="mb-0">
                      <MdClose />
                    </span>
                  </button>
                  <h4 className="modal-title">
                    <span className="mb-0">
                      <AiOutlineFlag />
                    </span>{" "}
                    Report this Listing
                  </h4>
                </div>
                <div className="contact-form-action">
                  <form method="post">
                    <div className="msg-box">
                      <label className="label-text">Write Message</label>
                      <div className="form-group">
                        <i className="form-icon">
                          <BsPencil />
                        </i>
                        <textarea
                          className="message-control form-control"
                          name="message"
                          placeholder="What's wrong with this listing?"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="btn-box text-right">
                      <button
                        type="submit"
                        className="theme-btn button-success border-0"
                      >
                        <i>
                          <RiSendPlane2Line />
                        </i>{" "}
                        Send message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item: state.listing_details,
  };
};

export default connect(mapStateToProps, null)(ListingDetailsBreadcrumb);
