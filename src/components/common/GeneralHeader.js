import React, { Component } from "react";
import Navbar from "./Navbar";
import HeaderAuthorAccess from "../other/account/HeaderAuthorAccess";
import Logo from "./Logo";
import $ from "jquery";

export default class GeneralHeader extends Component {
  componentDidMount() {
    let that = this;
    $(window).on("scroll", function () {
      //header fixed animation and control
      if ($(window).scrollTop() > 10) {
        $(".header-menu-wrapper").addClass("header-fixed");
        that.setScrollTop(true);
      } else {
        $(".header-menu-wrapper").removeClass("header-fixed");
        that.setScrollTop(false);
      }
    });
  }

  state = {
    logo: require("../../assets/images/Service64-Logo-white.png"),
    scrollTop: false,
  };

  setScrollTop = (value) => {
    this.setState({ scrollTop: value });
  };

  render() {
    return (
      <>
        <header className="header-area">
          <div className="header-menu-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-full-width">
                    {/* Logo */}
                    <div className="logo">
                      <Logo url={this.state.logo} />
                    </div>

                    {/* Navbar */}
                    <Navbar
                      history={this.props.history}
                      scrollTop={this.state.scrollTop}
                    />

                    {/* Author Access */}
                    <HeaderAuthorAccess scrollTop={this.state.scrollTop} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
