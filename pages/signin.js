import Layout from "../components/Layout";
import { withRouter } from "next/router";
import Link from "next/link";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };
  return (
    <Layout>
      <React.Fragment>
        <div className="signin-banner">
          <div className="signin-container">
            {showRedirectMessage()}
            <div className="login-main">
              <div className="main-text">
                <h2>Login</h2>
                <p>Login here to access the app</p>
              </div>
              <SigninComponent />
            </div>
            <div className="signin-wrapper">
              <div className="signin-right-text">
                <h2>"Pastilan friend mulutaw na gyud ka sa ka plastic"</h2>
                <p>~ George Estregan</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default withRouter(Signin);
