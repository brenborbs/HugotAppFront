import Layout from "../components/Layout";
import ContactForm from "../components/form/ContactForm";
import Link from "next/link";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../config";
import Search from "../components/post/Search";

const About = router => {
  const head = () => (
    <Head>
      <title>About hugot | {APP_NAME}</title>
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
                <h1 className="contact-hero-title">About</h1>
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
                      <p className="about-info">
                        Quotery is a thought-provoking web app that encourages
                        users to explore, collect, and share their favorite
                        quotes.
                      </p>
                      <p
                        style={{
                          fontSize: "inherit",
                          marginTop: "0",
                          marginBottom: "1rem"
                        }}
                      ></p>
                      <div className="about-body">
                        <p>
                          Whether it's prominent historical figures or heroes of
                          the modern age, we feature quotations from the most
                          brilliant minds in philosophy, politics, sports,
                          comedy, and everything in between. Our mission is to
                          present these powerful, bite-sized lessons of life in
                          a visually-stunning manner that makes their message
                          that much more impactful.
                        </p>
                        <p>
                          Launched in 2013, Quotery.com has fast become one of
                          the web’s most trusted merchants of inspiration and
                          entertainment.
                        </p>
                        <p>
                          Our encyclopdia of wit and wisdom is more than a
                          stagnant, lifeless list of quotes. We have a large
                          community of users who have used Quotery to publish
                          thousands of personalized collections. And our
                          easy-to-use design tool allows anyone to create
                          customizable picture quotes.
                        </p>
                        <p>
                          Additionally, we value authenticity and accuracy,
                          which is why readers are encouraged to make
                          contributions and suggest edits. Meanwhile, our
                          in-house team of eagle-eyed editors are continually
                          proofreading and verifying sources in an ongoing
                          effort to catch discrepancies.
                        </p>
                        <p>
                          In a nutshell, we believe that the profound insight
                          contained within a choice selection of crafted words
                          has the potential to do great things. So go ahead,
                          endulge yourself. Inspiring reflections, entertaining
                          quips, and delicious mind candy await you...
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

export default About;
