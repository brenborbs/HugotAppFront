import Link from "next/link";

const DashInfo = () => {
  return (
    <div className="dash-info">
      <div className="dash-info-title">
        <h2>
          <i className="fa fa-info-circle" aria-hidden="true"></i> Useful Info
        </h2>
      </div>
      {/* dash-info-wrapper */}
      <div className="dash-info-wrapper">
        <div className="dash-user-info">
          <Link href="/">
            <div
              className="dash-info-cell"
              style={{ backgroundColor: "mediumaquamarine" }}
            >
              <div className="internal-info">
                <i
                  className="fa fa-home"
                  aria-hidden="true"
                  style={{ fontSize: "40px", color: "white" }}
                ></i>
                <p>All Posts</p>
              </div>
            </div>
          </Link>
          <div className="dash-info-cell">
            <Link href="/blog">
              <div
                className="dash-info-cell"
                style={{ backgroundColor: "silver" }}
              >
                <div className="internal-info">
                  <i
                    className="fa fa-newspaper-o"
                    aria-hidden="true"
                    style={{ fontSize: "40px", color: "white" }}
                  ></i>
                  <p>Blog</p>
                </div>
              </div>
            </Link>
          </div>
          <div
            className="dash-info-cell"
            style={{ backgroundColor: "mediumpurple" }}
          >
            <div className="internal-info">
              <p
                style={{ fontSize: "22px", color: "white", paddingTop: "10px" }}
              >
                {" "}
                {new Date().toLocaleString()}
              </p>
              <p>Today</p>
            </div>
          </div>
        </div>

        <div className="inside-dash-info">
          <div className="info-cell">
            <div className="inside-cell">
              <h3>Starter Guidelines</h3>
            </div>
            <div className="dash-list">
              <ul>
                <li
                  style={{
                    color: "white",
                    backgroundColor: "darkorange",
                    borderRadius: "5px"
                  }}
                >
                  We suggest to first complete your profile data after you have
                  signed in for the first time. Please add your profile photo
                  and change your profile username before adding/creating your
                  first hugot line.
                </li>
                <li
                  style={{
                    color: "black",
                    backgroundColor: "lightblue",
                    borderRadius: "5px"
                  }}
                >
                  For profile completeness, we suggest to add your social media
                  accounts/links so when going to your profile page, you can
                  have a more complete profile. Not adding any links/accounts
                  will be showing empty on your profile bar.
                </li>
                <li>
                  No nude photos allowed. If we find users posting using nude
                  photos, admin will take down the post and disallow users to
                  continue this app.
                </li>
                <li>
                  We encouraged all users to refrain from using vulgar language.
                </li>
              </ul>
            </div>
          </div>
          <div className="info-cell">
            <div className="inside-cell">
              <h3>Links</h3>
            </div>
            <div className="dash-list">
              <ul>
                <li>
                  For now, user profile background cannot be customised and will
                  show default image(The pic in the alley). Customising the
                  profile background functionality will be added soon in later
                  versions/releases for this app.
                </li>
                <li>
                  If you want to know more, you can go to blog page and continue
                  reading.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashInfo;
