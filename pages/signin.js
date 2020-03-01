import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";

const Signin = () => {
  return (
    <Layout>
      <React.Fragment>
        <div className="signin-banner">
          <div className="signin-container">
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

export default Signin;
