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
import metaData from "../meta/privacyPolicy";
class PrivacyPolicy extends Component {
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
        <section className="team-area padding-bottom-70px">
          <div className="container">
            <div className="row section-title-width text-center">
              <SectionsHeading
                title="Privacy Policy"
                desc="We respect the privacy of all the users, who are working or using our service."
              />
            </div>

            <div className="row mt-5">
              <h4 className="normalTextHeading">Our commitment to privacy:</h4>
              <p className="pTextForNormalPages">
                Service64 knows that protecting your privacy and confidentiality
                is important to you. This Privacy Policy governs the collection,
                use and disclosure of your personal information in any form,
                whether written or electronic, by Service64 The collection, use
                and disclosure of your personal information is governed by the
                Personal Information Protection and Electronic Documents Act
                (the “Act”), and any applicable provincial legislation. This
                Privacy Policy explains what personal information may be
                collected from you and how it is used. It also explains how you
                can ask questions, make suggestions, and express concerns about
                our privacy practices.
              </p>

              <p className="pTextForNormalPages">
                Please be aware that our websites in all of their versions and
                formats may contain links to other websites that are maintained
                by third parties that are not required to comply with this
                Privacy Policy and for which Service64 has no responsibility.
                Please review the privacy policies on any third party websites
                to determine their information handling practices.
              </p>

              <h4 className="normalTextHeading">
                What is personal information?
              </h4>

              <p className="pTextForNormalPages">
                Personal information is any information about an identifiable
                individual. Service64 is responsible for personal information in
                its possession and under its control. Service64 has implemented
                policies and practices to give effect to this Privacy Policy,
                including training and communicating with our employees about
                the importance of privacy and implementing security procedures
                that reasonably protect the personal information you provide to
                us.
              </p>

              <h4 className="normalTextHeading">
                What is personal information?
              </h4>

              <p className="normalTextHeading">
                This Privacy Policy does not impose restrictions on business
                contact information (e.g. name, title, work contact information)
                collected, used or disclosed solely for the purpose of
                communicating with the individual in relation to their
                employment, business or profession; publicly available
                information, such as an individual’s name, telephone number and
                address when listed in a directory or made available through
                directory assistance; or information that is aggregated and not
                associated with a specific individual, including demographic
                information and statistics.
              </p>

              <p className="normalTextHeading">
                Service64 may collect personal contact information (such as your
                name, address, email address and telephone numbers) through
                forms or other means of communication.
              </p>
              <p className="normalTextHeading">
                For our member-based web properties, such as Agent8.ca or the
                Scott’s online portal, we will retain your subscriber ID and
                password to allow you to login to the dashboard and so that upon
                request by you we may remind you of them. We will also retain
                any user setting preference you set for the dashboard so that we
                can respect those settings.
              </p>
              <p className="normalTextHeading">
                We may retain transactional information (such as purchase
                history, a list of promotions offered to you, vouchers used,
                contests entered and coupons ordered) in order to fulfill your
                request for information, products or services, to respond to
                your inquiries, and to provide a more personalized experience on
                our Sites.
              </p>
              <p className="normalTextHeading">
                We may ask you to provide and update location preferences, which
                we use to gain a better understanding of your interests so that
                we may improve our products and services and develop new
                products and services and so that we can provide you with more
                targeted offers, advertising, information and content (including
                offers and other information that has been supplied by our
                affiliates and selected sponsors or advertisers), including on
                websites you visit (“Marketing Offers”). We may also collect,
                use and store your current location or a history or location
                preferences or settings to establish your location, improve your
                experience and, from time to time, to send you information, such
                as Marketing Offers, that is most relevant to your geographic
                location. You may manage how your mobile device and mobile
                browser share location information with us, as well as how your
                mobile browser handles cookies and related technologies, by
                adjusting your mobile device privacy and security settings.
                Please refer to instructions provided by your mobile services
                provider or the manufacturer of your device to learn how to
                adjust your settings.
              </p>
              <p className="normalTextHeading">
                We may collect demographic information, as well as express
                interests or category preferences, and may use this information
                along with your personal contact information and language
                preference in order to gain a better understanding of your
                interests so that we may improve our products and services and
                develop new products and services, and to determine your
                eligibility for other products and services.
              </p>
              <p className="normalTextHeading">
                We may also use demographic information, personal contact
                information, language preference, transactional information and
                express interests or category preferences to contact you about
                changes, enhancements or other notices related to products or
                services you requested from us or which we provide. In addition,
                we may use this information to send you Marketing Offers. If you
                do not wish to receive Marketing Offers, you may opt-out at any
                time by following the opt-out procedure below.
              </p>
              <p className="normalTextHeading">
                If you register for any Site using any social media login
                credentials, such as Facebook Login , we may collect, use and
                disclose your information from the social media account (such as
                email address and birthday in the case of Facebook Login) for
                the purpose of fulfilling your request for information, products
                or services, to respond to your inquiries, to gain a better
                understanding of your interests so that we may improve our
                products and services and develop new products and services, to
                determine your eligibility for other products and services , to
                contact you about changes, enhancements or other notices related
                to products or services you requested from us or which we
                provide, to provide you with Marketing Offers. Our access to
                your personal information will vary according to the particular
                social media credentials used. Please refer to the privacy
                settings of the social media website or application to determine
                how you may adjust our permissions and manage the interactivity
                between our properties and your social media account.
              </p>
              <p className="normalTextHeading">
                We keep notes and special instructions for members to help us
                fulfill your request and provide customer service. We may record
                or monitor your telephone calls with our customer service
                representatives for training and quality assurance purposes. We
                may also keep records of your interactions with our customer
                service team, and will use this information to fulfill your
                request for information, products or services, to respond to
                your inquiries, to improve our products and services and develop
                new products and services, to contact you about changes,
                enhancements or other notices related to products or services
                you requested from us, or to provide you with Marketing Offers.
              </p>
              <p className="normalTextHeading">
                We collect your credit card information or PayPal account
                information if you purchase services through one of our online
                shopping carts including the Agent8 dashboard and Scott’s online
                shopping cart for libraries. This credit card information is
                used only for the purpose of fulfilling your order, or
                processing refunds or applying credit, if applicable.
              </p>
              <p className="normalTextHeading">
                If you choose to opt-out of any use of your personal information
                in accordance with our opt-out policy, we will keep your contact
                information and details with respect to your opt-out on a list
                so that your request can be honoured and we may retain your
                information to fulfill legal or regulatory obligations or for
                other purposes permitted by law. If you provide a complaint to
                any of our departments, we will collect your contact information
                and the nature of your complaint, for the purpose of
                investigating your concerns and responding to you.
              </p>
              <p className="normalTextHeading">
                Occasionally, we ask our customers to complete market research
                surveys. If you choose to participate in these surveys and
                provide your personal information for that purpose, your
                information will be aggregated as part of the survey results and
                shared with our advertisers, sponsors and affiliates in a manner
                that does not identify you. However, your information will also
                be used by us to gain a better understanding of your interests
                so that we may develop new products and services, to determine
                your eligibility for other products and services, and to provide
                you with Marketing Offers.
              </p>
              <p className="normalTextHeading">
                Other than as permitted or required by law, if we wish to
                collect, use or disclose your personal information for purposes
                that are not contemplated in this Privacy Policy, we will
                identify those purposes at the time of collection. You will be
                given a reasonable opportunity to opt-out of any such additional
                purposes. Cookies and Online Behavioural Advertising
              </p>
              <p className="normalTextHeading">
                If you use any of our Sites, we may assign a cookie. A cookie is
                a small text file that is stored on your Internet browser and
                that can collect and store information. We use cookies to better
                understand how you use our Sites, to make sure our ads and
                dynamic content are served correctly, to improve the performance
                of our Sites and to improve your experience. For example, a
                cookie may recall a set of preferences you have set for our Site
                and record items that you have registered for. Storing cookies
                on your web browser allows us to present you with web pages and
                other content that are attuned with your preferences. For
                example, if you are a registered user, you may see a welcome
                page with your name on it. These activities are invisible to
                you, and are generally intended to improve your Internet surfing
                convenience. Unless you have set your preferences so that you
                will be alerted when a cookie is being stored on your computer,
                you won’t know about it.
              </p>
              <p className="normalTextHeading">
                If you are concerned about cookies, please review and adjust
                your web browser preferences. However, please be aware that by
                disabling cookies, you may not be able to use all portions of
                our Sites, particularly pages requiring registration.
              </p>
              <p className="normalTextHeading">
                We may place advertising or other links on our Sites that
                originate from outside advertisers and other third parties. If
                you view these ads, the advertisers may assign or recognize
                cookies. Agent8 does not control these cookies, nor is it
                responsible for any marketing or other use of your information
                by these advertisers or other third parties.
              </p>
              <p className="normalTextHeading">
                Our Sites may use Web beacon, gif, or other technologies to
                better tailor and manage advertising on those sites. These
                technologies may be in use on a number of pages across web
                sites. When you access these pages, a notice of that visit is
                generated which may be processed by us or by our suppliers.
                These Web beacons or gifs usually work in conjunction with
                cookies. If you don’t want your cookie information to be
                associated with your visits to these pages, you can set your
                browser to turn off cookies. If you turn off cookies, Web
                beacons, gifs and other technologies will still detect visits to
                these pages, but the notices they generate cannot be associated
                with other cookie information and are disregarded. Analytics
              </p>
              <p className="normalTextHeading">
                We use IP (Internet protocol) addresses to gather demographic
                and statistical information about our users, for systems
                administration and to diagnose problems with our servers, and to
                administer our Sites.
              </p>
              <p className="normalTextHeading">
                We may, from time to time, track and analyze anonymous usage and
                browsing patterns of visitors to our Sites to provide our
                advertisers with more targeted advertising opportunities and to
                help users see advertising that is most likely to interest them.
                We may use third party analytics service providers in order to
                gather such data on user behaviour.
              </p>
              <p className="normalTextHeading">
                We and our third party service providers may, from time to time,
                use cookies, web beacons and other technologies to track and
                analyze certain information about user behaviour and interaction
                with our Sites, websites operated by our affiliates or websites
                that are a part of our service provider’s networks (such as
                browser version and name, how you were directed to the relevant
                website, or to register with us, page views, date and time of
                registration or installation, details with respect to use of
                mobile applications and their functionality) and with e-mails we
                send to you (such as open and click activity), and about your
                device (such as device model and type, and OS version and name).
                We may use third party analytics service providers in order to
                gather such data on user behaviour, and to provide us with other
                data collection, reporting, ad response measurement and site
                analytics. This information is used to improve your experience,
                to help us develop new products and services, to gain a better
                understanding of your interests so that we may develop new
                products and services, to determine your eligibility for other
                products and services, and to provide you with customized
                advertising, customized content and Marketing Offers that we
                believe may be of particular interest to you. These third party
                service providers may also collect and use certain aggregated or
                anonymized information, which is subject to their own privacy
                policies.
              </p>
              <p className="normalTextHeading">
                We may combine personal information we have collected about you
                or received from you with publicly available records or with
                other third party information sources in order to better
                understand our customers and enhance our ability to provide you
                with products, services and Marketing Offers that may be of
                interest to you. User Generated Content
              </p>
              <p className="normalTextHeading">
                All information, data, text, graphics, images, messages,
                reviews, opinions, suggestions or other materials created by
                Users on any of our sites, including but not limited to comment
                forums, is public information and may be used and disclosed by
                Agent8 in accordance with Agent8’s User Agreement. Who does
                Service64 disclose personal information to, and why?
              </p>
              <p className="normalTextHeading">
                Service64 may disclose your personal information under the
                following circumstances:
              </p>
              <p className="normalTextHeading">
                We may disclose or share non-personally identifiable information
                with partners, advertisers, merchants and/or prospective
                merchants to help explain our business and the effectiveness of
                our business or for promotional purposes. For example, we may
                disclose aggregated demographic information which does not
                include any personally identifiable information.
              </p>
              <p className="normalTextHeading">
                Service64 may transfer your personal information to third party
                service providers, which may be located outside of Canada
                (including in the United States), in order to fulfill your order
                or perform processing and other specialized services (such as
                credit card or payment processing, prize fulfillment of our
                contests, collection of overdue accounts, management of customer
                service requests, data analysis for purposes of managing and
                administering our business, delivery of Marketing Offers and
                other communications, product delivery, circulation auditing and
                industry accreditation). Legal Purposes
              </p>
              <p className="normalTextHeading">
                Service64 may disclose your personal information to third
                parties if you have violated our terms of service or conditions
                of purchase, or if we need to comply with applicable laws and
                lawful governmental requests, other legal and regulatory
                authorities, for other legal reasons (which may include lawful
                access by Canadian, U.S. or other foreign courts, law
                enforcement or governmental authorities) and as otherwise
                permitted or required by law. Sale of Business
              </p>
              <p className="normalTextHeading">
                Service64 may disclose your personal information on a
                confidential basis to parties connected with the contemplated or
                actual financing, insuring, sale, assignment or other disposal
                of all or part of our business or assets, including for the
                purposes of determining whether to proceed or continue with such
                transaction or business relationship or fulfilling any records
                or other reporting requirements to such parties. Safeguards:
              </p>
              <p className="normalTextHeading">
                Service64 has technical, contractual, administrative and
                physical security measures to protect your personal information
                in a manner that is reasonable and appropriate to the nature of
                the personal information you provide to Service64. For example,
                when you provide credit card information to us, we work to help
                protect the security of your credit card information by using
                industry standard secure sockets layer (SSL) encryption
                technology.
              </p>
              <p className="normalTextHeading">
                Please be aware that email is not a secure medium, and any
                personal information you send to us by email could be
                intercepted. If your communication is very sensitive, you should
                not send it electronically unless the email is encrypted or your
                browser indicates that the access to our Site is secure. Credit
                card numbers should not be sent by email. Materials posted to
                online forums such as bulletin boards or comment sites are
                public, not secure and may be viewed by anyone. Any personal
                information you post may be collected and used by anyone and may
                result in unsolicited messages from other Internet users.
                Service64 is not responsible for personal information you choose
                to post or submit in any online forum on any of its Sites.
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

export default PrivacyPolicy;
