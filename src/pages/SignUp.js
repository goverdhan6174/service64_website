import React, { Component } from "react";
import SignUpBox from "../components/other/account/SignUpBox";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import { Link } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Seller_reg_form from "./listings/AddListing.js";

import MetaDecorator from "../utils/metaDecorator";
import metaData from "../meta/signUp";
class SignUp extends Component {
  state = {
    breadcrumbimg: require("../assets/images/s4.jpg"),
  };
  render() {
    return (
      <main className="signup-page">
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
        <Breadcrumb CurrentPgTitle="Sign Up" img={this.state.breadcrumbimg} />

        {/*

                <section className="form-shared padding-top-40px padding-bottom-100px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <Tabs>
                                    <div className="col-lg-12">
                                        <div className="dashboard-nav d-flex justify-content-between align-items-center mb-4 col-lg-12 mx-auto">
                                            <TabList className="nav nav-tabs border-0 mx-auto" id="nav-tab">
                                                <Tab>
                                                    <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                        <span className="la"></span> Register to get calls
                                                </Link>
                                                </Tab>
                                                <Tab>
                                                    <Link className="nav-item nav-link theme-btn pt-0 pb-0 mr-1" to="#">
                                                        <span className="la"></span> Register to review
                                                </Link>
                                                </Tab>
                                            </TabList>

                                        </div>
                                        <TabPanel>
                                            <Seller_reg_form history={this.props.history} />
                                        </TabPanel>
                                        
                                        <TabPanel>
                                            <div className='col-lg-6 mx-auto'>
                                                <SignUpBox title="Create an account!" history={this.props.history} subtitle="with your social network" />
                                            </div>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>

                */}

        <section className="form-shared padding-top-40px">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto signupHeading">
                <h2>Signup to get jobs</h2>
                <p>
                  Join and get connected with the people who are looking for
                  your services in your area.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <Seller_reg_form history={this.props.history} />

        {/* Newsletter 
                <NewsLetter />

                {/* Footer */}
        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default SignUp;
