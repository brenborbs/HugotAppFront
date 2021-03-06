import Head from "next/head";
import Layout from "../../components/Layout";
import { singleTag } from "../../actions/tag";
import { DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Card from "../../components/post/Card";

const Tag = ({ tag, posts, query }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta
        name="description"
        content={`Hugot lines Bisaya and Tagalog ${tag.name}`}
      />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
      <meta
        property="og:description"
        content={`Hugot lines Bisaya and Tagalog ${tag.name}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/hugot.png`} />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/hugot.png`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div id="banner">
          <div className="banner-text">
            <h1>{tag.name}</h1>
          </div>
        </div>
        <section id="featured" className="section featured">
          <div className="section-center featured-center">
            {posts.map((p, i) => (
              <Card key={i} post={p} />
            ))}
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
};

Tag.getInitialProps = ({ query }) => {
  return singleTag(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { tag: data.tag, posts: data.posts, query };
    }
  });
};

export default Tag;
