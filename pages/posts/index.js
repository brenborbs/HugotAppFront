import Head from "next/head";
// import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listPostsWithCategoriesAndTags } from "../../actions/post";
import Card from "../../components/post/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";

const Posts = ({ posts, totalPosts, postsLimit, postSkip, router }) => {
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

  // load more posts when loading on state
  const [limit, setLimit] = useState(postsLimit);
  const [skip, setSkip] = useState(0); // default
  const [size, setSize] = useState(totalPosts);
  const [loadedPosts, setLoadedPosts] = useState([]); // empty area

  const loadMore = () => {
    let toSkip = skip + limit;
    listPostsWithCategoriesAndTags(toSkip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedPosts([...loadedPosts, ...data.posts]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="loadmore-btn">
          Load more
        </button>
      )
    );
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div id="banner">
          <div className="banner-text">
            <h1>Hugot Lines</h1>
          </div>
        </div>
        <section id="featured" className="section featured">
          <div className="section-center featured-center">
            {posts.map((post, i) => (
              <Card key={i} post={post} />
            ))}
          </div>
          <div className="section-center featured-center">
            {loadedPosts.map((post, i) => (
              <Card key={i} post={post} />
            ))}
          </div>
          <div className="loadmore-container">{loadMoreButton()}</div>
        </section>
      </Layout>
    </React.Fragment>
  );
};

// getInitialProps can only be used in pages not components! same as componentWillMount
Posts.getInitialProps = () => {
  let skip = 0;
  let limit = 9; // appearing on front-end list card!
  return listPostsWithCategoriesAndTags(skip, limit).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        posts: data.posts,
        totalPosts: data.size,
        postsLimit: limit,
        postSkip: skip
      };
    }
  });
};

export default withRouter(Posts);
