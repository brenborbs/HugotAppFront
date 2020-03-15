import Layout from "../components/Layout";
import ContactForm from "../components/form/ContactForm";
import Link from "next/link";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import Search from "../components/post/Search";

const Contact = router => {
  const head = () => (
    <Head>
      <title>Contact hugot | {APP_NAME}</title>
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
                <h1 className="contact-hero-title">Contact</h1>
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
                      <p className="contact-info">
                        If you have any general questions or inquiries? Please
                        get in touch!
                      </p>
                      <p
                        style={{
                          fontSize: "inherit",
                          marginTop: "0",
                          marginBottom: "1rem"
                        }}
                      ></p>
                      <div className="blog-body">
                        <ContactForm />
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

export default Contact;
