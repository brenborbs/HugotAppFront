import { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Link from "next/link";
import Router from "next/router";
import LoginGoogle from "./LoginGoogle";

const SigninComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const { email, password, error, loading, message, showForm } = values;

  // if user is auth, then push to home page
  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        // save user token to cookie
        // save user info to localstorage
        // authenticate user
        authenticate(data, () => {
          if (isAuth() && isAuth().role === 1) {
            Router.push(`/admin`);
          } else {
            Router.push(`/user`);
          }
        });
      }
    });
  };

  const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const showLoading = () =>
    loading ? <div className="alert-info">Loading...</div> : "";

  const showError = () =>
    error ? (
      <div className="alert-danger">
        <div className="alert-icon">
          <i
            className="fa fa-exclamation-circle"
            aria-hidden="true"
            style={{ color: "#f44336" }}
          ></i>
        </div>
        <div className="alert-message">{error}</div>
      </div>
    ) : (
      ""
    );

  const showMessage = () =>
    message ? (
      <div className="alert-info">
        <div className="alert-icon">
          <i
            className="fa fa-check-circle-o"
            aria-hidden="true"
            style={{ color: "#4caf50" }}
          ></i>
        </div>
        <div className="alert-message">{message}</div>
      </div>
    ) : (
      ""
    );

  const siginForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label_inputs">Email address</label>
          <input
            value={email}
            onChange={handleChange("email")}
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label className="label_inputs">Password</label>
          <input
            value={password}
            onChange={handleChange("password")}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="btn_login">Login</button>
      </form>
    );
  };

  return (
    <React.Fragment>
      <div className="login-form">
        {showError()}
        {showMessage()}
        <LoginGoogle />
        {showForm && siginForm()}
        <div className="login-links">
          <p>
            Forgot your password?{" "}
            <Link href="/auth/password/forgot">
              <a>Go here</a>
            </Link>
          </p>
          <p>
            Don't have an account?{" "}
            <Link href="/signup">
              <a>Join</a>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SigninComponent;
