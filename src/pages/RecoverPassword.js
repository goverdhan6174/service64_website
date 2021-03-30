import React, { Component } from "react";
import GeneralHeader from "../components/common/GeneralHeader";
import Breadcrumb from "../components/common/Breadcrumb";
import RecoverPassBox from "../components/other/account/RecoverPassBox";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

import MetaDecorator from "../utils/metaDecorator";
import metaData from "../meta/recoverPassword";
class RecoverPassword extends Component {
  state = {
    breadcrumbimg: require("../assets/images/s4.jpg"),
  };
  render() {
    return (
      <main className="recover-pass-page">
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
        <Breadcrumb
          CurrentPgTitle="Recover Password"
          MenuPgTitle="Pages"
          img={this.state.breadcrumbimg}
        />

        <RecoverPassBox />

        {/* Newsletter */}
        <NewsLetter />

        {/* Footer */}
        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default RecoverPassword;
