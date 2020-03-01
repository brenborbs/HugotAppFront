import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
// import ContactForm from "../../components/form/ContactForm";
import isEmpty from "../../helpers/is-empty";

const UserProfile = ({ user, posts, query }) => {
  const head = () => (
    <Head>
      <title>
        {user.username} | {APP_NAME}
      </title>
      <meta name="description" content={`Posts by ${user.username}`} />
      <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
      <meta property="og:description" content={`Posts by ${user.username}`} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/background-banner.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/background-banner.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showUserPosts = () => {
    return posts.map((post, i) => {
      return (
        <li className="pv2" key={i}>
          <Link href={`/posts/${post.slug}`}>
            <a className="link-title">{post.about}</a>
          </Link>
        </li>
      );
    });
  };

  const photoURL = user.username
    ? `${API}/user/photo/${user.username}`
    : "/static/images/avatar.jpg";

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="user-profile-container">
          <div className="user-left-profile">
            <article className="prof-color mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
              <div className="tc">
                <img
                  src={photoURL}
                  className="br-100 h4 w4 dib ba b--black-05 pa2"
                  title="Photo of a kitty staring at you"
                  alt="user profile"
                  style={{ width: "100%" }}
                  onError={i => (i.target.src = "/static/images/avatar.jpg")}
                />
                {/* <h1 className="f3 mb2">{user.name}</h1> */}
                <h2 className="f5 mt1 fw4 gray">
                  Joined {moment(user.createdAt).format("MMMM D YYYY")}
                </h2>
                <div className="user-social-media">
                  {isEmpty(user.facebook && user.facebook) ? null : (
                    <a href={user.facebook} target="_blank">
                      <i className="fa fa-facebook-square fa-2x" />
                    </a>
                  )}
                  {isEmpty(user.twitter && user.twitter) ? null : (
                    <a href={user.twitter} target="_blank">
                      <i className="fa fa-twitter-square fa-2x" />
                    </a>
                  )}
                  {isEmpty(user.instagram && user.instagram) ? null : (
                    <a href={user.instagram} target="_blank">
                      <i className="fa fa-instagram fa-2x" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </div>
          <div className="user-right-profile">
            <article className="prof-color center mv3 bg-white br3 ba b--black-10">
              <div className="user-right-wrapper">
                <div className="user-name-wrapper">
                  <h1>{user.name}</h1>
                  <p>{user.about}</p>
                </div>
              </div>
            </article>
            <article className="prof-color center mv3 bg-white br3 ba b--black-10">
              <div className="user-right-wrapper">
                <h3>Recent Posts</h3>
                <ul className="list-group">{showUserPosts()}</ul>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  // console.log(query);
  return userPublicProfile(query.username).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
      return { user: data.user, posts: data.posts, query };
    }
  });
};

export default UserProfile;
