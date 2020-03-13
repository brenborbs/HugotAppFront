import { useState } from "react";
import Layout from "../../../components/Layout";
import { forgotPassword } from "../../../actions/auth";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
    message: "",
    error: "",
    showForm: true
  });

  const { email, message, error, showForm } = values;

  const handleChange = name => e => {
    setValues({ ...values, message: "", error: "", [name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, message: "", error: "" });
    forgotPassword({ email }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          message: data.message,
          email: "",
          showForm: false
        });
      }
    });
  };

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

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label_inputs">Email address</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
          placeholder="Type your email"
          required
        />
      </div>
      <div>
        <button className="btn_login">Send password reset link</button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="forgot-form">
        <div className="login-form" style={{ margin: "0 auto", width: "100%" }}>
          <div className="login-forgot">
            <h2>Forgot password</h2>
            {showError()}
            {showMessage()}
            {showForm && passwordForgotForm()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
