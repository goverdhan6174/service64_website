import React, { Component } from "react";
import GeneralHeader from "../../components/common/GeneralHeader";
import BannerOne from "../../components/banner/banner1/BannerOne";
import SectionsHeading from "../../components/common/SectionsHeading";
import PopularCategories from "../../components/other/categories/PopularCategories";
import HowItWorkOne from "../../components/hiw/hiw1/HowItWorkOne";
import PlaceOne from "../../components/places/PlaceOne";
import Button from "../../components/common/Button";
import SectionDivider from "../../components/common/SectionDivider";
import CtaOne from "../../components/other/cta/CtaOne";
import ClientLogo from "../../components/sliders/ClientLogo";
import NewsLetter from "../../components/other/cta/NewsLetter";
import Footer from "../../components/common/footer/Footer";
import ScrollTopBtn from "../../components/common/ScrollTopBtn";
import MetaDecorator from "./../../utils/metaDecorator";
import metaData from "./../../meta/home";

export default class Home extends Component {
  render() {
    return (
      <main className="home-1">
        {/* SEO-Meta-Data */}
        {metaData.show && (
          <MetaDecorator
            title={metaData.pageTitle}
            description={metaData.pageDescription}
          />
        )}
        <GeneralHeader history={this.props.history} />
        <BannerOne history={this.props.history} />
        <section className="cat-area padding-top-80 padding-bottom-80px">
          <div className="container">
            <div className="">
              <h2 className="h_title">Most Popular Categories</h2>
              <p className="h_raw_text">
                You can find the most trusted and hardworking people here to
                answer your calls in the{" "}
                <a href="https://service64.com/categories">category list.</a>
              </p>
            </div>

            <div className="row mt-5">
              <PopularCategories />
            </div>
          </div>


        </section>
        <section className="hiw-area text-center padding-top-80px padding-bottom-110px">
          <div className="container">
            <div className="">
              <h2 className="h_title">How to register, to get a job</h2>
              <p className="h_raw_text">
                Here we have a directory of hand vetted{" "}
                <a href="https://service64.com/list">service providers</a> with
                the most responsive and professional service reputation.
              </p>
            </div>

            <HowItWorkOne />
          </div>
        </section>
        <section className="cta-area column-sm-center padding-top-80px padding-bottom-80px">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9 text-left">
                <SectionsHeading
                  title="We can help you get a job that you love doing"
                  titleClass=" mb-3 font-size-28"
                  descClass=" font-size-17"
                  desc="Don't have any shop or contact address to get your customers? We are here to help you to get calls from the people who are looking for your service."
                />
              </div>

              <div className="col-lg-3">
                <div className="btn-box">
                  <Button text="Create Account" url="/sign-up" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial */}
        {/* <section className="testimonial-area padding-top-100px padding-bottom-100px text-center">
                    {this.tmimages.tmimage.map((tmimg, index) => {
                        return (
                            <img key={index} src={tmimg.tmimg} alt="testimonial" className="random-img" />
                        )
                    })}
                    <div className="container">
                        <div className="row section-title-width text-center">
                            <SectionsHeading title="What Our Users Said" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto mt-4">
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                </section> */}
        <SectionDivider />
        {/* Blog */}
        {/* <section className="blog-area padding-top-100px padding-bottom-80px">
                    <div className="container">
                        <div className="row section-title-width section-title-ml-mr-0">
                            <div className="col-lg-8">
                                <SectionsHeading title="Latest Tips & Articles" desc="Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortors." />
                            </div>
                            <div className="col-lg-4">
                                <div className="btn-box h-100 d-flex align-items-center justify-content-end">
                                    <Button text="view all post" url="/blog" className=" margin-top-100px" />
                                </div>
                            </div>
                        </div>

                        <LatestBlog />
                    </div>
                </section> */}
        {/* CTA 2 */}
        <section className="cta-area cta-area3 padding-top-100px padding-bottom-100px">
          <CtaOne />
        </section>
        {/* Client Logo */}
        <ClientLogo />
        {/* NewsLetter */}
        <NewsLetter />
        {/* Footer */}
        <Footer />
        <ScrollTopBtn />
      </main>
    );
  }
}
