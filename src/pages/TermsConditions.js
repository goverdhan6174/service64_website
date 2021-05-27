import React, { Component } from "react";
import GeneralHeader from "../components/common/GeneralHeader";
import Banner5 from "../components/banner/banner5/Banner5";
import ImageBox from "../components/about/ImageBox";
import About2 from "../components/about/About2";
import FunFactsThree from "../components/other/funfacts/FunFactsThree";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import SectionsHeading from "../components/common/SectionsHeading";
import Testimonial from "../components/sliders/Testimonial";
import HowItWork4 from "../components/hiw/HowItWork4";
import TeamOne from "../components/team/TeamOne";
import Button from "../components/common/Button";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";

import MetaDecorator from "../utils/metaDecorator";
import metaData from "../meta/termsConditions";
class TermsConditions extends Component {
  state = {
    tmimage: [
      {
        tmimg: require("../assets/images/testi-img1.jpg"),
      },
      {
        tmimg: require("../assets/images/testi-img2.jpg"),
      },
      {
        tmimg: require("../assets/images/testi-img3.jpg"),
      },
      {
        tmimg: require("../assets/images/testi-img4.jpg"),
      },
      {
        tmimg: require("../assets/images/testi-img5.jpg"),
      },
      {
        tmimg: require("../assets/images/testi-img6.jpg"),
      },
    ],
  };
  render() {
    return (
      <main className="about-page">
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
        <Banner5 />

        {/* Team Area */}
        <section className="team-area padding-top-100px padding-bottom-70px">
          <div className="container">
            <div className="row section-title-width text-center">
              <SectionsHeading
                title="Terms and conditions"                
              />
            </div>

            <div className="row mt-5 " >
              <h4>Terms & Conditions</h4>
              <p className="pTextForNormalPages">
              service64.com is a service provided by Saltside Technologies AB (subject to your compliance with the Terms and Conditions set forth below). Please read these Terms and Conditions before using this Web Site.
              </p>

              <h4>General</h4>
              <ol className="termsConditons">
                <li>Service64.com is an online-based marketplace, where the market has the authority to share your contact number with its users to contact you for their needs. </li>
                <li>All the users we share our contact number is not our registered users or buyer so you need to be careful about your job.</li>
                <li>By accepting the terms and conditions you agree with the conditions that you will be responsible for any kind of unwanted or criminal activities. </li>
                <li>By accepting the terms and conditions you agree with the conditions that you will be responsible for any kind of unwanted or criminal activities. </li>
                <li>Use of the Product is available only to individuals who are at least 18 years old and can form legally binding contracts under applicable law. You represent, acknowledge, and agree that you are at least 18 years of age.</li>
                <li>You will not copy or distribute any part of the Website, Apps, or its product in any medium without service64.com</li>
                <li>You will not alter or modify any part of the Website, Apps, or its product other than as may be reasonably necessary to use the Website, Apps, or its product for its intended purpose.</li>
                <li>You will provide true, accurate, current, and complete information when creating your Account and you shall maintain and update such information during the term of this Agreement so that it will remain accurate, true, current, and complete.</li>
                <li>You shall not use any automated system, including but not limited to, "robots," "spiders," "offline readers," "scrapers," etc., to access the Website for any purpose without service64.com prior written approval.</li>
                <li>You shall not in any manual or automated manner collect SERVICE PROVIDERs or SERVICE USERs information, including but not limited to, names, addresses, phone numbers, or email addresses, copying copyrighted text, or otherwise misuse or misappropriate Website information or content, including but not limited to, use on a "mirrored", competitive, or third-party site.</li>
                <li>You shall not take any action that (i) unreasonably encumbers or, in service64.com sole discretion, may unreasonably encumber the Product's infrastructure; (ii) interferes or attempts to interfere with the proper working of the Product or any third-party participation in the Product; or (iii) bypasses service64.com</li>
                <li>You agree not to collect or harvest any personally identifiable data, including without limitation, names or other Account information, from the Website, nor to use the communication systems provided by the Website for any commercial solicitation purposes.</li>

              </ol>
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

export default TermsConditions;
