import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import { singlePost, listRelated } from "../../actions/post";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
import { isAuth } from "../../actions/auth";
import Card from "../../components/post/Card";
import Search from "../../components/post/Search";
// Social media share
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon
  // EmailShareButton,
  // EmailIcon,
  // WhatsappShareButton,
  // WhatsappIcon
} from "react-share";

const SinglePost = ({ post, query }) => {
  const [related, setRelated] = useState([]);

  // Loader
  const [modalOpen, setModalOpen] = useState(false);
  const [verifyOpen, setVerifyOpen] = useState(false);

  const toggleModal = () => {
    // console.log("i was click!");
    setModalOpen(!modalOpen);
  };
  const toggleVerify = () => {
    setVerifyOpen(!verifyOpen);
  };
  const closeModal = () => {
    // console.log("i was click!");
    setModalOpen(!modalOpen);
  };
  const closeVerify = () => {
    setVerifyOpen(!verifyOpen);
  };

  const loadRelated = () => {
    listRelated({ post }).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };
  // load state related blogs
  useEffect(() => {
    loadRelated();
    // initLike();
  }, []);

  const head = () => (
    <Head>
      <title>
        {post.about} | {APP_NAME}
      </title>
      <meta name="description" content={post.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/posts/${query.slug}`} />
      <meta property="og:title" content={`${post.title}| ${APP_NAME}`} />
      <meta property="og:description" content={post.mdesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/posts/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/post/photo/${post.slug}`} />
      <meta
        property="og:image:secure_url"
        ccontent={`${API}/post/photo/${post.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showPostCategories = post =>
    post.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <li className="cat_list">{c.name}</li>
      </Link>
    ));

  const showPostTags = post =>
    post.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <li className="tag_list">{t.name}</li>
      </Link>
    ));

  const showRelatedPost = () => {
    return related.map((post, i) => (
      <div className="quote-div" key={i}>
        <Card post={post} />
      </div>
    ));
  };

  const showReactShareIcons = () => {
    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={`${API}/posts/${post.slug}`}
            quote={post.title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round={false} />
          </FacebookShareButton>
        </div>
        <div className="Demo__some-network">
          <TwitterShareButton
            url={`${API}/posts/${post.slug}`}
            quote={post.title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round={false} />
          </TwitterShareButton>
        </div>
        <div className="Demo__some-network">
          <PinterestShareButton
            url={`${API}/posts/${post.slug}`}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button"
          >
            <PinterestIcon size={32} round={false} />
          </PinterestShareButton>
        </div>
      </div>
    );
  };

  // const showLoading = () => loading && <div className="loader">Loading...</div>;

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="container__singleQuote">
          <div className="wrapper__quote">
            {/* {showLoading()} */}
            <div className="hero">
              <div className="hero-banner">
                <h3 className="hero-title">{post.body}</h3>
                <p className="hero-text">~ {post.author}</p>
                {showReactShareIcons()}
              </div>
            </div>
            <div className="main_container">
              <div className="main">
                <div className="lg">
                  <div className="article left_wrapper">
                    <section className="left_card">
                      <div style={{ margin: "30px" }}>
                        <h1 className="about_info">
                          <span className="about_title">hugot details</span>
                        </h1>

                        <Link href={`/profile/${post.postedBy.username}`}>
                          <p className="about-author">
                            {" "}
                            <a>Posted by: {post.postedBy.username}</a>
                          </p>
                        </Link>

                        <div className="border_text">
                          {post.source ? (
                            <span className="border">Sourced</span>
                          ) : (
                            <span className="border">Unsourced</span>
                          )}
                        </div>
                        <div className="info_text">
                          <p>{post.about}</p>
                        </div>
                      </div>
                      <div className="hugot-content-wrapper">
                        <figure>
                          <ul>
                            <li>
                              <button
                                onClick={toggleModal}
                                className="btn-modal"
                              >
                                <div className="sm-card">
                                  <div
                                    className="sm-card-container"
                                    style={{ position: "relative" }}
                                  >
                                    <img
                                      src={`${API}/post/photo/${post.slug}`}
                                      alt={post.about}
                                      style={{
                                        width: "100%",
                                        display: "block"
                                      }}
                                      onError={i =>
                                        (i.target.src =
                                          "/static/images/noah-silliman.jpg")
                                      }
                                    />
                                    <div className="overlay-sm">
                                      <div className="content">
                                        <p>
                                          {post.body} <br />~ {post.author}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </figure>
                        <div className={modalOpen ? "modal" : "none"}>
                          <div className="modal-content">
                            <span onClick={closeModal} className="close">
                              &times;
                            </span>
                            <div className="modal-content-container">
                              <div className="sm-card">
                                <div
                                  className="modal-card-container"
                                  style={{ position: "relative" }}
                                >
                                  <img
                                    src={`${API}/post/photo/${post.slug}`}
                                    alt={post.about}
                                    style={{ width: "100%", display: "block" }}
                                    onError={i =>
                                      (i.target.src =
                                        "/static/images/noah-silliman.jpg")
                                    }
                                  />
                                  <div className="overlay-modal">
                                    <div className="content">
                                      <p>
                                        {post.body} <br />~ {post.author}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p className="modal-footer-text">
                              Presented by: hugot.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="long_btn">
                        <button className="grey_outline" onClick={toggleVerify}>
                          {post.verification ? (
                            <p className="btn_title">Verified</p>
                          ) : (
                            <p className="btn_title">Unverified</p>
                          )}
                        </button>
                      </div>
                      <div className={verifyOpen ? "verifymodal" : "none"}>
                        <div className="verifymodal-content">
                          <div className="verify-header">
                            <h2>Alam mo ba?</h2>
                          </div>
                          <div className="verify-content">
                            <p>
                              We at hugot always value accuracy, and one of our
                              main principles is to keep factual records in both
                              casual and academic settings.
                            </p>
                            <p>
                              To help us achieve this goal, please feel free to
                              suggest an edit if a hugot line on our site is
                              displaying insufficient or inaccurate information.
                            </p>
                            <p>
                              If a particular hugot line has been researched and
                              validated by hugot, the label below each hugot
                              line will confirm it as being verified.
                            </p>
                            {post.verification ? (
                              <p>
                                This hugot line has been Verified by our writers
                                and may be own by the creator themselves and/or
                                others.
                              </p>
                            ) : (
                              <p>
                                Unfortunately this hugot line has not been
                                officially verified by our editors. But be sure
                                to check back in the future, as we're constantly
                                adding documentation to our database
                              </p>
                            )}
                          </div>
                          <button
                            className="btn-verify-close"
                            onClick={closeVerify}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="sm">
                  <div className="right_wrapper">
                    <Search />
                    <aside>
                      <div className="topics_wrapper">
                        <h2>Topics</h2>
                        <div className="topics_list">
                          <ul>{showPostCategories(post)}</ul>
                        </div>
                      </div>
                    </aside>
                    <aside>
                      <div className="topics_wrapper">
                        <h2>Tags</h2>
                        <div className="topics_list">
                          <ul>{showPostTags(post)}</ul>
                        </div>
                      </div>
                    </aside>
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

            {/* borders */}
          </div>
        </div>
        <section className="section featured" id="featured">
          <div className="title-wrapper">
            <h2 className="title">related</h2>
            {/* <span className="subtitle">lines</span> */}
          </div>
          <div className="section-center featured-center">
            {showRelatedPost()}
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
};

SinglePost.getInitialProps = ({ query }) => {
  return singlePost(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return { post: data, query };
    }
  });
};

export default withRouter(SinglePost);
