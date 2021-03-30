import React, { Component } from "react";
import GeneralHeader from "../components/common/GeneralHeader";
import Banner6 from "../components/banner/banner6/Banner6";
import FaqCategories from "../components/other/categories/FaqCategories";
import AccordionList from "../components/other/AccordionList";
import SectionsHeading from "../components/common/SectionsHeading";
import AskQuestionField from "../components/contact/AskQuestionField";
import IconBoxThree from "../components/other/iconboxes/IconBoxThree";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

import MetaDecorator from "../utils/metaDecorator";
import metaData from "../meta/faq";
class Faq extends Component {
  render() {
    return (
      <main className="faq-page">
        {/* SEO-Meta-Data */}
        {metaData.show && (
          <MetaDecorator
            title={metaData.pageTitle}
            description={metaData.pageDescription}
          />
        )}
        {/* Header */}
        <GeneralHeader />

        {/* Banner */}
        <Banner6 title="Hello, How Can We Help You?" />

        <section className="faq-area padding-top-100px padding-bottom-100px">
          <div className="container">
            <div className="row section-title-width section-title-ml-mr-0">
              <div className="col-lg-12">
                <SectionsHeading
                  title="Listing faqs"
                  desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors."
                />
              </div>
            </div>
            <div className="row margin-top-35px">
              <div className="col-lg-8">
                <AccordionList />
              </div>
              <div className="col-lg-4">
                <AskQuestionField title="Still have question?" />
              </div>
            </div>

            <div className="section-block-2 margin-top-120px"></div>

            <div className="row padding-top-100px">
              <IconBoxThree />
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

export default Faq;
