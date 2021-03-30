import React, { useState, useEffect } from "react";

import { FiChevronDown } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";
import { search_res } from "../../store/action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function Navbar(props) {
  const [navOpen, setNavOpen] = useState(false);

  let { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") pathname = "/home";

    pathname = pathname.split("/")[1];
    pathname = pathname.split("-")[0].toLowerCase();

    let activeLink = [
      "home",
      "about",
      "categories",
      "list",
      "contact",
      "login",
      "sign",
    ].includes(pathname)
      ? pathname
      : "home";

    let activeClassName = activeLink + "link";
    let currentClass = props.scrollTop ? "bluue" : "blaack";

    if (props.scrollTop) {
      $("." + activeClassName).removeClass("blaack");
      $("." + activeClassName).addClass(currentClass);
      $("." + activeClassName).each(function () {
        $("." + activeClassName).removeClass("blaack");
        $("." + activeClassName).addClass(currentClass);
      });
    } else {
      $("." + activeClassName).removeClass("bluue");
      $("." + activeClassName).addClass(currentClass);
      $("." + activeClassName).each(function () {
        $("." + activeClassName).removeClass("bluue");
        $("." + activeClassName).addClass(currentClass);
      });
    }
  }, [props.scrollTop]);

  $(document).on("click", ".side-menu-ul li", function () {
    $(".side-menu-ul li").removeClass("active");
    $(this).toggleClass("active");
  });
  $(document).on("click", ".side-menu-ul li.active", function () {
    $(".side-menu-ul li.active").removeClass("active");
  });

  const current_user = JSON.parse(localStorage.getItem("__current_user__"));
  let is_logedin = false;
  if (current_user !== null) {
    is_logedin = true;
  } else {
    is_logedin = false;
  }

  return (
    <>
      <div className="main-menu-content">
        <nav>
          <ul>
            <li className="active">
              <Link to="/" className="homelink">
                home
              </Link>
            </li>

            <li>
              <Link to="/about-us" className="aboutlink">
                about us
              </Link>
            </li>

            <li>
              <Link to="/categories" className="categorieslink">
                categories{" "}
              </Link>
            </li>

            <li>
              <Link
                to="/list"
                onClick={() => {
                  props.actions.search_res(undefined);
                }}
                className="listlink"
              >
                Number List
              </Link>
            </li>

            {is_logedin && (
              <li>
                <Link to="/myprofile" className="loginlink">
                  {current_user.fullname}{" "}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="side-menu-open" onClick={() => setNavOpen(!navOpen)}>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
      </div>
      <div
        className={navOpen ? "side-nav-container active" : "side-nav-container"}
      >
        <div className="humburger-menu">
          <div
            className="humburger-menu-lines side-menu-close"
            onClick={() => setNavOpen(!navOpen)}
          ></div>
        </div>
        <div className="side-menu-wrap">
          <ul className="side-menu-ul">
            <li>
              <Link to="/" className="homelink">
                home{" "}
              </Link>
            </li>

            <li className="active">
              <Link to="/about-us" className="aboutlink">
                about us
              </Link>
            </li>

            <li>
              <Link to="/categories" className="categorieslink">
                categories{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/list"
                onClick={() => {
                  props.actions.search_res(undefined);
                }}
                className="listlink"
              >
                Number List
              </Link>
            </li>

            <li>
              <Link to="/contact" className="contactlink">
                contact us
              </Link>
            </li>

            {is_logedin && (
              <li>
                <Link to="/myprofile" className="loginlink">
                  {current_user.fullname}{" "}
                </Link>
              </li>
            )}

            {!is_logedin && (
              <li style={{ display: "flex" }}>
                <Link to="/login" className="loginlink">
                  login
                </Link>
                <Link style={{ padding: "14px 0px" }}>Or</Link>
                <Link to="/sign-up" className="signlink">
                  Sign up
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatchEvent) => {
  return {
    actions: bindActionCreators(
      {
        search_res,
      },
      dispatchEvent
    ),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
