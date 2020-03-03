import Layout from "../components/Layout";
import SignupComponent from "../components/auth/SignupComponent";

const Signup = () => {
  return (
    <Layout>
      <React.Fragment>
        <div className="signin-banner">
          <div className="signin-container">
            <div className="login-main">
              <div className="main-text">
                <h2>Register</h2>
                <p>Register here to access the app</p>
              </div>
              <SignupComponent />
            </div>
            <div className="signin-wrapper">
              <div className="signin-right-text">
                <h2>
                  "Basta gani gugma na ang hisgutan, gusto nako nga mag walk
                  out"
                </h2>
                <p>~ Juana Dela Cruz</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default Signup;
