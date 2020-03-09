import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { isAuth } from "../../actions/auth";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
// import ContactForm from "../../components/form/ContactForm";
import isEmpty from "../../helpers/is-empty";
import SmallCard from "../../components/post/SmallCard";

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
        <Link href={`/posts/${post.slug}`} key={i}>
          <li>
            <SmallCard key={i} post={post} />
          </li>
        </Link>
      );
    });
  };

  const photoURL = user.username
    ? `${API}/user/photo/${user.username}`
    : "/static/images/avatar.jpg";

  // const profileCover = user.username
  //   ? "/static/images/noah-silliman.jpg"
  //   : `${API}/user/photo/${user.username}`;

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="prof-container">
          <div className="timeline-cover">
            {/* Large Screens */}
            <div className="timeline-nav-bar hid-sm hid-xs">
              <div className="prof-row">
                <div className="col-left">
                  <div className="profile-info">
                    <img
                      src={photoURL}
                      className="profile-photo"
                      title="user-photo"
                      alt="user profile"
                      onError={i =>
                        (i.target.src = "/static/images/avatar.jpg")
                      }
                    />
                    <h3>{user.username}</h3>
                    <p className="text-prof">{user.about}</p>
                    <div className="text-prof">
                      <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                      Joined {moment(user.createdAt).format("MMMM D YYYY")}
                    </div>
                  </div>
                </div>
                <div className="col-right">
                  <ul className="list-inline profile-menu">
                    <li>
                      {" "}
                      {isEmpty(user.facebook && user.facebook) ? null : (
                        <a href={user.facebook} target="_blank">
                          <i className="fa fa-facebook-square fa-2x" />
                        </a>
                      )}
                    </li>
                    <li>
                      {isEmpty(user.twitter && user.twitter) ? null : (
                        <a href={user.twitter} target="_blank">
                          <i className="fa fa-twitter-square fa-2x" />
                        </a>
                      )}
                    </li>
                    <li>
                      {isEmpty(user.instagram && user.instagram) ? null : (
                        <a href={user.instagram} target="_blank">
                          <i className="fa fa-instagram fa-2x" />
                        </a>
                      )}
                    </li>
                  </ul>
                  <ul className="follow-me list-inline">
                    {isAuth() ? (
                      <Link href="/user/update">
                        <li>
                          <button className="btn-edit">Edit Profile</button>
                        </li>
                      </Link>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
            {/* Large Screens */}
            {/* Small Screens */}
            <div className="navbar-mobile hidden-lg hidden-md">
              <div className="profile-info">
                <img
                  src={photoURL}
                  className="profile-photo"
                  title="user-photo"
                  alt="user profile"
                  onError={i => (i.target.src = "/static/images/avatar.jpg")}
                />
                <h3>{user.username}</h3>
                <p className="text-prof">{user.about}</p>
                <div className="text-prof">
                  <i className="fa fa-calendar" aria-hidden="true"></i> Joined{" "}
                  {moment(user.createdAt).format("MMMM D YYYY")}
                </div>
              </div>
              <div className="mobile-menu">
                <ul className="list-inline">
                  <li>
                    {" "}
                    {isEmpty(user.facebook && user.facebook) ? null : (
                      <a href={user.facebook} target="_blank">
                        <i className="fa fa-facebook-square fa-2x" />
                      </a>
                    )}
                  </li>
                  <li>
                    {isEmpty(user.twitter && user.twitter) ? null : (
                      <a href={user.twitter} target="_blank">
                        <i className="fa fa-twitter-square fa-2x" />
                      </a>
                    )}
                  </li>
                  <li>
                    {isEmpty(user.instagram && user.instagram) ? null : (
                      <a href={user.instagram} target="_blank">
                        <i className="fa fa-instagram fa-2x" />
                      </a>
                    )}
                  </li>
                </ul>
                {isAuth() ? (
                  <Link href="/user/update">
                    <button className="btn-edit">Edit Profile</button>
                  </Link>
                ) : null}
              </div>
            </div>
            {/* Small Screens */}
          </div>
          <div id="page-contents">
            <div className="prof-row">
              <div className="col-left"></div>
              <div className="col-md-right">
                <ul className="post-lists">{showUserPosts()}</ul>
              </div>
              <div className="col-md-full static">
                <div className="stick-sidebar"></div>
              </div>
            </div>
          </div>
          {/* prof-container */}
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
      // console.log(data);
      return { user: data.user, posts: data.posts, query };
    }
  });
};

export default UserProfile;
