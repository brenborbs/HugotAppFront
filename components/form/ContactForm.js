import { useState } from "react";
import { emailContactForm } from "../../actions/form";

const ContactForm = ({ authorEmail }) => {
  const [values, setValues] = useState({
    message: "",
    name: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
    success: false,
    error: false
  });

  const { message, name, email, sent, buttonText, success, error } = values;

  const clickSubmit = e => {
    e.preventDefault();
    setValues({ ...values, buttonText: "Sending..." });
    emailContactForm({ authorEmail, name, email, message }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          sent: true,
          name: "",
          email: "",
          message: "",
          buttonText: "Sent",
          success: data.success
        });
      }
    });
  };

  const handleChange = name => e => {
    setValues({
      ...values,
      [name]: e.target.value,
      error: false,
      success: false,
      buttonText: "Send Message"
    });
  };

  const showSuccessMessage = () =>
    success && (
      <div className="alert-success">
        <div className="alert-icon">
          <i
            className="fa fa-check-circle-o"
            aria-hidden="true"
            style={{ color: "#4caf50" }}
          ></i>
        </div>
        <div className="alert-message">Thank you for contacting us.</div>
      </div>
    );

  const showErrorMessage = () => (
    <div className="alert-error" style={{ display: error ? "" : "none" }}>
      <div className="alert-icon">
        <i
          className="fa fa-exclamation-circle"
          aria-hidden="true"
          style={{ color: "#f44336" }}
        ></i>
      </div>
      <div className="alert-message">{error}</div>
    </div>
  );

  const contactForm = () => {
    return (
      <form onSubmit={clickSubmit}>
        <div className="form-group">
          <label className="label_inputs">Message</label>
          <textarea
            onChange={handleChange("message")}
            type="text"
            className="form-control"
            value={message}
            required
            rows="10"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="label_inputs">Name</label>
          <input
            type="text"
            onChange={handleChange("name")}
            className="form-control"
            value={name}
            required
          />
        </div>

        <div className="form-group">
          <label className="label_inputs">Email</label>
          <input
            type="email"
            onChange={handleChange("email")}
            className="form-control"
            value={email}
            required
          />
        </div>

        <div>
          <button className="btn-footer">{buttonText}</button>
        </div>
      </form>
    );
  };

  return (
    <React.Fragment>
      {showSuccessMessage()}
      {showErrorMessage()}
      {contactForm()}
    </React.Fragment>
  );
};

export default ContactForm;
