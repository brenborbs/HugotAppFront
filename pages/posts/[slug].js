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
  const [values, setValues] = useState({ loading: false });

  const { loading } = values;

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
                      <span className="info_text">
                        <span>{post.about}</span>
                      </span>
                      <div className="long_btn">
                        <button className="grey_outline">
                          {post.verification ? (
                            <span className="btn_title">Verified</span>
                          ) : (
                            <span className="btn_title">Unverified</span>
                          )}
                        </button>
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
