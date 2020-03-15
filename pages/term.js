import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import Search from "../components/post/Search";

import React from "react";

const Term = router => {
  const head = () => (
    <Head>
      <title>Terms hugot | {APP_NAME}</title>
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
                <h1 className="contact-hero-title">Terms</h1>
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
                        By accessing this web site, you are agreeing to be bound
                        by these web site Terms and Conditions of Use, all
                        applicable laws and regulations, and agree that you are
                        responsible for compliance with any applicable local
                        laws. If you do not agree with any of these terms, you
                        are prohibited from using or accessing this site. The
                        materials contained in this web site are protected by
                        applicable copyright and trade mark law.
                      </p>

                      <div className="term-body">
                        <h4>Use License</h4>
                        <p>
                          Permission is granted to temporarily download one copy
                          of the materials (information or software) on Hugot’s
                          web site for personal, non-commercial transitory
                          viewing only. This is the grant of a license, not a
                          transfer of title, and under this license you may not:
                        </p>
                        <ul>
                          <li>modify or copy the materials</li>
                          <li>use the materials for any commercial purpose</li>
                          <li>
                            attempt to decompile or reverse engineer any
                            software contained on hugot’s web site
                          </li>
                          <li>
                            remove any copyright or other proprietary notations
                            from the materials
                          </li>
                          <li>
                            transfer the materials to another person or “mirror”
                            the materials on any other server
                          </li>
                        </ul>
                        <p>
                          This license shall automatically terminate if you
                          violate any of these restrictions and may be
                          terminated by Hugot at any time. Upon terminating your
                          viewing of these materials or upon the termination of
                          this license, you must destroy any downloaded
                          materials in your possession whether in electronic or
                          printed format.
                        </p>
                        <h4>Disclaimer</h4>
                        <p>
                          The materials on hugot’s web site are provided “as
                          is”. Hugot makes no warranties, expressed or implied,
                          and hereby disclaims and negates all other warranties,
                          including without limitation, implied warranties or
                          conditions of merchantability, fitness for a
                          particular purpose, or non-infringement of
                          intellectual property or other violation of rights.
                          Further, Hugot does not warrant or make any
                          representations concerning the accuracy, likely
                          results, or reliability of the use of the materials on
                          its Internet web site or otherwise relating to such
                          materials or on any sites linked to this site.
                        </p>
                        <h4>Limitations</h4>
                        <p>
                          In no event shall Hugot or its suppliers be liable for
                          any damages (including, without limitation, damages
                          for loss of data or profit, or due to business
                          interruption,) arising out of the use or inability to
                          use the materials on Hugot’s Internet site, even if
                          Hugot or a Hugot authorized representative has been
                          notified orally or in writing of the possibility of
                          such damage. Because some jurisdictions do not allow
                          limitations on implied warranties, or limitations of
                          liability for consequential or incidental damages,
                          these limitations may not apply to you.
                        </p>
                        <h4>Revisions and Errata</h4>
                        <p>
                          The materials appearing on Hugot’s web site could
                          include technical, typographical, or photographic
                          errors. Hugot does not warrant that any of the
                          materials on its web site are accurate, complete, or
                          current. Hugot may make changes to the materials
                          contained on its web site at any time without notice.
                          Hugot does not, however, make any commitment to update
                          the materials.
                        </p>
                        <h4>Links</h4>
                        <p>
                          Hugot has not reviewed all of the sites linked to its
                          Internet web site and is not responsible for the
                          contents of any such linked site. The inclusion of any
                          link does not imply endorsement by Hugot of the site.
                          Use of any such linked web site is at the user’s own
                          risk.
                        </p>
                        <h4>Site Terms of Use Modifications</h4>
                        <p>
                          Hugot may revise these terms of use for its web site
                          at any time without notice. By using this web site you
                          are agreeing to be bound by the then current version
                          of these Terms and Conditions of Use.
                        </p>
                        <h4>Governing Law</h4>
                        <p>
                          Any claim relating to Hugot’s web site shall be
                          governed by the cyber laws of the Republic of the
                          Philippines without regard to its conflict of law
                          provisions.
                        </p>
                        <p>
                          General Terms and Conditions applicable to Use of a
                          Web Site.
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

export default Term;
