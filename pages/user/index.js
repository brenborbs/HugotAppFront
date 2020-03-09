import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <div className="create_container">
          <div className="create_wrapper">
            <div className="left_dash">
              <h2>
                <i className="fa fa-rocket" aria-hidden="true"></i>User
              </h2>
              <div className="link_account">
                <ul>
                  <Link href="/user/update">
                    <a>
                      <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                      Profile
                    </a>
                  </Link>

                  <li>
                    <a href="/user/crud/post">
                      <i className="fa fa-plus-circle" aria-hidden="true"></i>
                      Create Hugot Line
                    </a>
                  </li>

                  <Link href="/user/crud/posts">
                    <a>
                      <i className="fa fa-table" aria-hidden="true"></i>Manage
                      Lines
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="right_dash">
            <div className="dash-info">
              <h2>Useful Info and Links</h2>
              <div className="dash-info-wrapper">
                <h4>
                  We highly encouraged all users to follow proper posting
                  manners such as:
                </h4>
                <div className="dash-list">
                  <ul>
                    <li style={{ color: "red" }}>
                      We are currently fixing a bug at profile/user page. We
                      suggest to first complete your profile data before adding
                      any hugot line, especially at your profile photo. We are
                      currently trying to fix this bug. We are very sorry for
                      this inconvenience. Thank you for your kind understanding.
                    </li>
                    <li>
                      No nude photos allowed. If we find users posting using
                      nude photos, admin will take down the post and disallow
                      users to continue this app.
                    </li>
                    <li>
                      Green humor or hugot lines can be accepted but we
                      encouraged to refrain from using vulgar language
                    </li>
                  </ul>
                </div>
                <h4>
                  If you want to know more, you can go to blog page and continue
                  reading.
                </h4>
                <div className="dash-links">
                  <Link href="/blog">Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserIndex;
