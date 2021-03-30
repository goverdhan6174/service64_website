import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import Breadcrumb from "../../components/common/Breadcrumb";
import PopularCategories from "../../components/other/categories/PopularCategories";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import PopularCategoriesMore from "../../components/other/categories/PopularCategoriesMore";

import MetaDecorator from "./../../utils/metaDecorator";
import metaData from "./../../meta/allCategories";

class AllCategories extends Component {
  state = {
    breadcrumbImg: require("../../assets/images/s4.jpg"),
  };
  render() {
    return (
      <main className="all-categories">
        {/* SEO-Meta-Data */}
        { metaData.show && <MetaDecorator
          title={metaData.pageTitle}
          description={metaData.pageDescription}
        />}

        {/* Header */}
        <GeneralHeader />

        {/* Breadcrumb */}
        <Breadcrumb
          CurrentPgTitle="All Categories"
          MenuPgTitle="Categories"
          img={this.state.breadcrumbImg}
        />

        <section className="cat-area padding-top-40px padding-bottom-80px">
          <div className="container">
            <div className="padding-bottom-50px category-p-text">
              <h2 className="h_title">Most Popular Categories</h2>
              <p className="h_raw_text">
              You can work on these categories by registering on service64 with few simple steps to become discoverable to your customers easily.
              </p>
            </div>

            <div className="row">
              <PopularCategories />
              <PopularCategoriesMore />
            </div>
          </div>
        </section>

        {/* NewsLetter */}
        <NewsLetter />

        {/* Footer */}
        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default AllCategories;
