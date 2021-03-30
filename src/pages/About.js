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
import metaData from "../meta/about";

class About extends Component {
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

        <section className="about-area padding-bottom-100px">
          <div className="container">
            <About2 />
          </div>
        </section>

        <section className="hiw-area padding-bottom-90px after-none text-center">
          <div className="container">
            <div className="">
              <h2 className="h_title">Why Choose Us</h2>
              <p className="h_raw_text">
                Here we have a directory of hand vetted{" "}
                <a href="https://service64.com/list">service providers</a> with
                the most responsive and professional service reputation.
              </p>
            </div>

            <div className="row mt-5">
              <HowItWork4 />
            </div>
          </div>
        </section>

        {/* Team Area 
                <section className="team-area padding-top-100px padding-bottom-70px">
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="Meet Our Team" desc="We are group of small team members trying to reach our goal" />
                        </div>

                        <div className="row mt-5">
                            
                            <TeamOne />
                            
                        </div>
                    </div>
                </section>

            */}

        {/* NewsLetter */}
        <NewsLetter />

        {/* Footer */}
        <Footer />

        <ScrollTopBtn />
      </main>
    );
  }
}

export default About;
