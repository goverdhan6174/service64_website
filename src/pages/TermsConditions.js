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
                desc="We are group of small team members trying to reach our goal"
              />
            </div>

            <div className="row mt-5">
              <p className="pTextForNormalPages">
                You (and also any third party for whom you operate an account or
                activity on the Service) agree to defend (at Service64'
                request), indemnify and hold the Service64 Parties harmless from
                and against any claims, liabilities, damages, losses, and
                expenses, including without limitation, reasonable attorney's
                fees and costs, arising out of or in any way connected with any
                of the following (including as a result of your direct
                activities on the Service or those conducted on your behalf):
                (i) your Content or your access to or use of the Service; (ii)
                your breach or alleged breach of these Terms of Use; (iii) your
                violation of any third-party right, including without
                limitation, any intellectual property right, publicity,
                confidentiality, property or privacy right; (iv) your violation
                of any laws, rules, regulations, codes, statutes, ordinances or
                orders of any governmental and quasi-governmental authorities,
                including, without limitation, all regulatory, administrative
                and legislative authorities; or (v) any misrepresentation made
                by you. You will cooperate as fully required by Service64 in the
                defense of any claim. Service64 reserves the right to assume the
                exclusive defense and control of any matter subject to
                indemnification by you, and you will not in any event settle any
                claim without the prior written consent of Service64.
              </p>

              <p className="pTextForNormalPages">
                This Agreement (including all documents incorporated by
                reference) is the entire agreement between the parties for its
                subject matter and supersedes all prior and contemporaneous
                communications between the parties. If you are using the Service
                on behalf of a legal entity, you represent that you are
                authorized to enter into an agreement on behalf of that legal
                entity. These Terms of Use constitute the entire agreement
                between you and Service64 and governs your use of the Service,
                superseding any prior agreements between you and Service64. You
                will not assign the Terms of Use or assign any rights or
                delegate any obligations hereunder, in whole or in part, whether
                voluntarily or by operation of law, without the prior written
                consent of Service64. Any purported assignment or delegation by
                you without the appropriate prior written consent of Service64
                will be null and void. Service64 may assign these Terms of Use
                or any rights hereunder without your consent. If any provision
                of these Terms of Use is found by a court of competent
                jurisdiction to be invalid or otherwise unenforceable, the
                parties nevertheless agree that such portion will be deemed
                severable from these Terms of Use and will not affect the
                validity and enforceability of the remaining provisions, he
                remaining provisions of the Terms of Use remain in full force
                and effect. Neither the course of conduct between the parties
                nor trade practice will act to modify the Terms of Use. These
                Terms of Use do not confer any third-party beneficiary rights.
              </p>
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
