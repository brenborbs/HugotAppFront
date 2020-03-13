import { useState, useEffect } from "react";
import { signup, isAuth, preSignup } from "../../actions/auth";
import Link from "next/link";
import Router from "next/router";

const SignupComponent = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    message: "",
    showForm: true
  });

  const { name, email, password, error, loading, message, showForm } = values;

  // if user is auth, then push to home page
  useEffect(() => {
    isAuth() && Router.push(`/`);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // console.table({ name, email, password, error, loading, message, showForm });
    setValues({ ...values, loading: true, error: false });
    const user = { name, email, password };

    preSignup(user).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          loading: false,
          message: data.message,
          showForm: false
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

  const signupForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label_inputs">Name</label>
          <input
            value={name}
            onChange={handleChange("name")}
            type="text"
            placeholder="Type your name"
          />
        </div>
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
        <div className="policy">
          <p>
            By clicking Register, you agree to our{" "}
            <Link href="/terms">
              <a>terms</a>
            </Link>{" "}
            .
          </p>
        </div>

        <button className="btn_login">Register</button>
      </form>
    );
  };

  return (
    <React.Fragment>
      <div className="login-form">
        {showError()}
        {showMessage()}
        {showForm && signupForm()}
        <div className="login-links">
          <p>
            Already have an account?{" "}
            <Link href="/signin">
              <a>Login</a>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupComponent;
