import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import Search from "../components/post/Search";

import React from "react";

const Policy = router => {
  const head = () => (
    <Head>
      <title>Policy hugot | {APP_NAME}</title>
      <meta
        name="description"
        content="Collection of best hugot lines. Bisaya, Tagalog at iba pa."
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Hugot lines sa lahat na naghahanap ng katuwaan at ligaya sa isla ng Pilipinas | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Collection of best hugot lines. Bisaya, Tagalog at iba pa."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/hugot.png`} />
      <meta
        property="og:image:secure_url"
        ccontent={`${DOMAIN}/static/images/hugot.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="container__singleQuote">
          <div className="wrapper__quote">
            <div className="blog-hero">
              <div className="blog-hero-banner">
                <h1 className="contact-hero-title">Policy</h1>
                <p className="blog-hero-text"></p>
                {/* {showReactShareIcons()} */}
              </div>
            </div>
            <div className="main_container">
              <div className="main">
                <div className="lg">
                  <div className="article left_wrapper">
                    <section className="left_card_blog">
                      <h1 className="about_info">
                        <span className="about_title"></span>
                      </h1>
                      <p className="term-info">
                        This Privacy Policy governs the manner in which hugot
                        collects, uses, maintains and discloses information
                        collected from users (each, a “User”) of the{" "}
                        <Link href="https://hugot.com">
                          https://www.hugot.com
                        </Link>
                        website (“Site”). This privacy policy applies to the
                        Site and all products and services offered by hugot.
                      </p>

                      <div className="term-body">
                        <h4>Personal Identification Information</h4>
                        <p>
                          We may collect personal identification information
                          from Users in a variety of ways, including, but not
                          limited to, when Users visit our site, register on the
                          site, subscribe to the newsletter, respond to a
                          survey, fill out a form, and in connection with other
                          activities, services, features or resources we make
                          available on our Site. Users may be asked for, as
                          appropriate, name, email address, mailing address,
                          phone number. Users may, however, visit our Site
                          anonymously. We will collect personal identification
                          information from Users only if they voluntarily submit
                          such information to us. Users can always refuse to
                          supply personally identification information, except
                          that it may prevent them from engaging in certain Site
                          related activities.
                        </p>
                        <h4>Non-Personal Identification Information</h4>
                        <p>
                          We may collect non-personal identification information
                          about Users whenever they interact with our Site.
                          Non-personal identification information may include
                          the browser name, the type of computer and technical
                          information about Users means of connection to our
                          Site, such as the operating system and the Internet
                          service providers utilized and other similar
                          information.
                        </p>
                        <h4>Web Browser Cookies</h4>
                        <p>
                          Our Site may "use" cookies to enhance User experience.
                          User’s web browser places cookies on their hard drive
                          for record-keeping purposes and sometimes to track
                          information about them. User may choose to set their
                          web browser to refuse cookies, or to alert you when
                          cookies are being sent. If they do so, note that some
                          parts of the Site may not function properly.
                        </p>
                        <h4>How We Use Collected Information</h4>
                        <p>
                          Hugot may collect and use Users personal information
                          for the following purposes:
                        </p>

                        <ul>
                          <li>To improve customer service</li>
                          <p>
                            Information you provide helps us respond to your
                            customer service requests and support needs more
                            efficiently.
                          </p>
                          <li>To presonalize user experience</li>
                          <p>
                            We may use information in the aggregate to
                            understand how our Users as a group use the services
                            and resources provided on our Site.
                          </p>
                          <li>To improve our Site</li>
                          <p>
                            We may use feedback you provide to improve our
                            products and services.
                          </p>
                          <li>
                            To run promotion, contest, survey or other Site
                            feature
                          </li>
                          <p>
                            To send Users information they agreed to receive
                            about topics we think will be of interest to them.
                          </p>
                          <li>To send periodic emails</li>
                          <p>
                            We may use the email address to respond to their
                            inquiries, questions, and/or other requests. If User
                            decides to opt-in to our mailing list, they will
                            receive emails that may include company news,
                            updates, related product or service information,
                            etc. If at any time the User would like to
                            unsubscribe from receiving future emails, we include
                            detailed unsubscribe instructions at the bottom of
                            each email.
                          </p>
                        </ul>
                        <h4>How We Protect Your Information</h4>
                        <p>
                          We adopt appropriate data collection, storage and
                          processing practices and security measures to protect
                          against unauthorized access, alteration, disclosure or
                          destruction of your personal information, username,
                          password, transaction information and data stored on
                          our Site.
                        </p>
                        <h4>Sharing Your Personal Information</h4>
                        <p>
                          We do not sell, trade, or rent Users personal
                          identification information to others. We may share
                          generic aggregated demographic information not linked
                          to any personal identification information regarding
                          visitors and users with our business partners, trusted
                          affiliates and advertisers for the purposes outlined
                          above.We may use third party service providers to help
                          us operate our business and the Site or administer
                          activities on our behalf, such as sending out
                          newsletters or surveys. We may share your information
                          with these third parties for those limited purposes
                          provided that you have given us your permission.
                        </p>
                        <h4>Third Party Websites</h4>
                        <p>
                          Users may find advertising or other content on our
                          Site that link to the sites and services of our
                          partners, suppliers, advertisers, sponsors, licensors
                          and other third parties. We do not control the content
                          or links that appear on these sites and are not
                          responsible for the practices employed by websites
                          linked to or from our Site. In addition, these sites
                          or services, including their content and links, may be
                          constantly changing. These sites and services may have
                          their own privacy policies and customer service
                          policies. Browsing and interaction on any other
                          website, including websites which have a link to our
                          Site, is subject to that website’s own terms and
                          policies.
                        </p>
                        <h4>Advertising</h4>
                        <p>
                          Ads appearing on our site may be delivered to Users by
                          advertising partners, who may set cookies. These
                          cookies allow the ad server to recognize your computer
                          each time they send you an online advertisement to
                          compile non personal identification information about
                          you or others who use your computer. This information
                          allows ad networks to, among other things, deliver
                          targeted advertisements that they believe will be of
                          most interest to you. This privacy policy does not
                          cover the use of cookies by any advertisers.
                        </p>
                        <h4>Google Adsense</h4>
                        <p>
                          Some of the ads may be served by Google. Google’s use
                          of the DART cookie enables it to serve ads to Users
                          based on their visit to our Site and other sites on
                          the Internet. DART uses “non personally identifiable
                          information” and does NOT track personal information
                          about you, such as your name, email address, physical
                          address, etc. You may opt out of the use of the DART
                          cookie by visiting the Google ad and content network
                          privacy policy at{" "}
                          <Link href="https://www.google.com/policies/technologies/ads">
                            <a>
                              https://www.google.com/policies/technologies/ads/
                            </a>
                          </Link>
                          .
                        </p>
                        <h4>Notice Regarding Online behavioural Advertising</h4>
                        <p>
                          We allow third party companies to serve ads and/or
                          collect certain anonymous information when you visit
                          our Web site. These companies may use non-personally
                          identifiable information (e.g. click stream
                          information, browser type, time and date, subject of
                          advertisements clicked or scrolled over) during your
                          visits to this and other Web sites in order to provide
                          advertisements about goods and services likely to be
                          of greater interest to you. These companies typically
                          use a cookie or third party web beacon to collect this
                          information. To learn more about this behavioural
                          advertising practice visit the NAI at{" "}
                          <Link href="https://www.networkadvertising.org">
                            <a>https://www.networkadvertising.org/</a>
                          </Link>
                          . To opt-out of this type of advertising, you can
                          visit{" "}
                          <Link href="http://optout.aboutads.info">
                            <a>http://optout.aboutads.info</a>
                          </Link>
                          .
                        </p>
                        <h4>
                          Compliance With Children’s Online Privacy Protection
                          Act
                        </h4>
                        <p>
                          Protecting the privacy of the very young is especially
                          important. For that reason, we never collect or
                          maintain information at our Site from those we
                          actually know are under 13, and no part of our website
                          is structured to attract anyone under 13.
                        </p>
                        <h4>Changes To This Privacy Policy</h4>
                        <p>
                          Hugot has the discretion to update this privacy policy
                          at any time. When we do, we will revise the updated
                          date at the bottom of this page. We encourage Users to
                          frequently check this page for any changes to stay
                          informed about how we are helping to protect the
                          personal information we collect. You acknowledge and
                          agree that it is your responsibility to review this
                          privacy policy periodically and become aware of
                          modifications.
                        </p>
                        <h4>Your Acceptance Of These Terms</h4>
                        <p>
                          By using this Site, you signify your acceptance of
                          this privacy policy and the
                          <Link href="/term">
                            <a> terms of service.</a>
                          </Link>{" "}
                          If you do not agree to this policy, please do not use
                          our Site. Your continued use of the Site following the
                          posting of changes to this policy will be deemed your
                          acceptance of those changes.
                        </p>
                        <h4>Contacting Us</h4>
                        <p>
                          If you have any questions about this Privacy Policy,
                          the practices of this site, or your dealings with this
                          site, please
                          <Link href="/contact">
                            <a> contact us.</a>
                          </Link>{" "}
                        </p>
                        <h4>Document</h4>
                        <p>
                          This document was last modified on March 15, 2020.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="sm">
                  <div className="right_wrapper">
                    <Search />
                    <aside>
                      <div className="topics_wrapper">
                        <h2>Follow Us</h2>
                        <div className="topics_list">
                          <ul className="social-links">
                            <Link href="/">
                              <li>
                                <a>
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                            </Link>
                            <Link href="/">
                              <li>
                                <a>
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                            </Link>
                            <Link href="/">
                              <li>
                                <a>
                                  <i className="fa fa-instagram"></i>
                                </a>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
            {/* separate */}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Policy;
