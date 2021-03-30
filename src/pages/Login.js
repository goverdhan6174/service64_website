import React, { Component } from "react";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import LoginBox from "../components/other/account/LoginBox";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

import MetaDecorator from "../utils/metaDecorator";
import metaData from "../meta/login";
class Login extends Component {
  state = {
    breadcrumbimg: require("../assets/images/s4.jpg"),
  };
  render() {
    return (
      <main className="login-page">
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
        <Breadcrumb CurrentPgTitle="Login" img={this.state.breadcrumbimg} />

        <section className="form-shared padding-top-40px padding-bottom-100px">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <LoginBox
                  title="Login to your account"
                  history={this.props.history}
                  subtitle=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <NewsLetter />

        {/* Footer */}
        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default Login;
