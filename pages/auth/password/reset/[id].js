import { useState } from "react";
import Layout from "../../../../components/Layout";
import { withRouter } from "next/router";
import { resetPassword } from "../../../../actions/auth";

const ResetPassword = ({ router }) => {
  const [values, setValues] = useState({
    name: "",
    newPassword: "",
    error: "",
    message: "",
    showForm: true
  });

  const { showForm, name, newPassword, error, message } = values;

  const handleSubmit = e => {
    e.preventDefault();
    resetPassword({
      newPassword,
      resetPasswordLink: router.query.id
    }).then(data => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          showForm: false,
          newPassword: ""
        });
      } else {
        setValues({
          ...values,
          message: data.message,
          showForm: false,
          newPassword: "",
          error: false
        });
      }
    });
  };

  const passwordResetForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="password"
          onChange={e => setValues({ ...values, newPassword: e.target.value })}
          className="form-control"
          value={newPassword}
          placeholder="Type new password"
          required
        />
      </div>
      <div>
        <button className="btn_login">Change password</button>
      </div>
    </form>
  );

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

  return (
    <Layout>
      <div className="forgot-form">
        <div className="login-form" style={{ margin: "0 auto", width: "100%" }}>
          <div className="login-forgot">
            <h2>Reset password</h2>

            {showError()}
            {showMessage()}
            {passwordResetForm()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ResetPassword);
