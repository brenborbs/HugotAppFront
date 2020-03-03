import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Head from "next/head";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
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

export default function BlogTemplate(props, router) {
  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }
  // data from getInitialProps
  const markdownBody = props.content;
  const frontmatter = props.data;
  const head = () => (
    <Head>
      <title>Collection of Best hugot lines | {APP_NAME}</title>
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

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/background-banner.jpg`}
      />
      <meta
        property="og:image:secure_url"
        ccontent={`${DOMAIN}/static/images/background-banner.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );
  const showReactShareIcons = () => {
    return (
      <div className="Demo__container">
        <div className="Demo__some-network">
          <FacebookShareButton
            url={`${API}/blog/${articles.slug}`}
            quote={frontmatter.title}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={32} round={false} />
          </FacebookShareButton>
        </div>
        <div className="Demo__some-network">
          <TwitterShareButton
            url={`${API}/blog/${articles.slug}`}
            quote={frontmatter.title}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={32} round={false} />
          </TwitterShareButton>
        </div>
        <div className="Demo__some-network">
          <PinterestShareButton
            url={`${API}/blog/${articles.slug}`}
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
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="container__singleQuote">
          <div className="wrapper__quote">
            <div className="blog-hero">
              <div className="blog-hero-banner">
                <h3 className="blog-hero-title">{frontmatter.title}</h3>
                <p className="blog-hero-text"> {frontmatter.author}</p>
                {/* {showReactShareIcons()} */}
              </div>
            </div>
            <div className="main_container">
              <div className="main">
                <div className="lg">
                  <div className="article left_wrapper">
                    <section className="left_card">
                      <h1 className="about_info">
                        <span className="about_title">Details</span>
                      </h1>
                      <p className="about-author">
                        {" "}
                        {reformatDate(frontmatter.date)}
                      </p>
                      <p
                        style={{
                          fontSize: "inherit",
                          marginTop: "0",
                          marginBottom: "1rem"
                        }}
                      >
                        <img
                          src={frontmatter.hero_image}
                          alt={`blog_hero_${frontmatter.title}`}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </p>
                      <span className="info_text">
                        <ReactMarkdown source={markdownBody} />
                      </span>
                    </section>
                  </div>
                </div>
                <div className="sm">
                  <div className="right_wrapper">
                    <Search />
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
}

BlogTemplate.getInitialProps = async function(context) {
  // context contains the query param
  const { slug } = context.query;
  // grab the file in the articles dir based on the slug
  const content = await import(`../articles/${slug}.md`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data
  };
};
