import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import Locations from "../../components/other/categories/Locations";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";

import MetaDecorator from "./../../utils/metaDecorator";
import metaData from "./../../meta/allLocations";

class AllLocations extends Component {
  state = {
    breadcrumbImg: require("../../assets/images/bread-bg.jpg"),
  };
  render() {
    return (
      <main className="all-locations">
        {/* SEO-Meta-Data */}
        { metaData.show && <MetaDecorator
          title={metaData.pageTitle}
          description={metaData.pageDescription}
        />}

        {/* Header */}
        <GeneralHeader />

        {/* Breadcrumb */}
        <Breadcrumb
          CurrentPgTitle="All Locations"
          MenuPgTitle="Categories"
          img={this.state.breadcrumbImg}
        />

        {/* Locations */}
        <section className="location-area padding-top-50px padding-bottom-50px">
          <div className="container">
            <Locations />
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

export default AllLocations;
