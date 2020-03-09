import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { getCookie, isAuth, updateUser } from "../../actions/auth";
import { getProfile, update } from "../../actions/user";
import { API } from "../../config";

const ProfileUpdate = () => {
  const [values, setValues] = useState({
    username: "",
    name: "",
    username_for_photo: "",
    email: "",
    about: "",
    password: "",
    facebook: "",
    twitter: "",
    instagram: "",
    error: false,
    success: false,
    loading: false,
    photo: "",
    userData: process.browser && new FormData()
  });

  const token = getCookie("token");
  const {
    username,
    username_for_photo,
    name,
    email,
    about,
    password,
    facebook,
    twitter,
    instagram,
    error,
    success,
    loading,
    photo,
    userData
  } = values;

  // load data to state
  const init = () => {
    getProfile(token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          username: data.username,
          username_for_photo: data.username,
          name: data.name,
          email: data.email,
          about: data.about,
          facebook: data.facebook,
          twitter: data.twitter,
          instagram: data.instagram
          // photo: data.photo
        });
      }
    });
  };

  // init data using useEffect method
  useEffect(() => {
    init();
    setValues({ ...values, userData: new FormData() });
  }, []);

  const handleChange = name => e => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    // let userFormData = new FormData();
    userData.set(name, value);
    setValues({
      ...values,
      [name]: value,
      userData,
      error: false,
      success: false
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true });
    update(token, userData).then(data => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
          loading: false
        });
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            username: data.username,
            name: data.name,
            email: data.email,
            about: data.about,
            facebook: data.facebook,
            twitter: data.twitter,
            instagram: data.instagram,
            // photo: data.photo,
            password: "",
            success: true,
            loading: false
          });
          if (isAuth() && isAuth().role === 1) {
            // Router.replace(`/admin/crud/${router.query.slug}`);
            Router.replace(`/profile/${username}`);
          } else if (isAuth() && isAuth().role === 0) {
            // Router.replace(`/user/crud/${router.query.slug}`);
            Router.replace(`/profile/${username}`);
          }
        });
      }
    });
  };

  const showError = () => (
    <div className="alert-error" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert-success" style={{ display: success ? "" : "none" }}>
      Profile updated
    </div>
  );

  const showLoading = () => (
    <div className="alert-loading" style={{ display: loading ? "" : "none" }}>
      Loading...
    </div>
  );

  const photoURL = username
    ? `${API}/user/photo/${username_for_photo}`
    : "/static/images/avatar.jpg";

  return (
    <div className="profile-container">
      <div className="profile-right">
        <h2>Profile Update</h2>
        <div className="tc pa3 pa5-ns">
          <div className="hide-child relative ba b--black-20 mw5 center">
            <img
              src={photoURL}
              style={{ height: "200px", width: "200px", borderRadius: "50%" }}
              className="db"
              alt="user profile"
              onError={i => (i.target.src = "/static/images/avatar.jpg")}
            />
          </div>
        </div>
      </div>
      <div className="profile-left">
        <div className="profile-left-container">
          {showSuccess()}
          {showError()}
          {showLoading()}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="label_inputs">
                <i className="fa fa-file-image-o" aria-hidden="true"></i>Profile
                Photo
              </label>
              <small className="text-muted">Max size: 1mb</small>
              <input
                onChange={handleChange("photo")}
                type="file"
                accept="image/*"
                className="file_input"
              />
            </div>
            <div className="form-group">
              <label className="label_inputs">Username</label>
              <input
                value={username}
                onChange={handleChange("username")}
                type="text"
                placeholder="Your username"
              />
            </div>
            <div className="form-group">
              <label className="label_inputs">Name</label>
              <input
                value={name}
                onChange={handleChange("name")}
                type="text"
                placeholder="Your name"
              />
            </div>
            {/* <div className="form-group">
              <label className="label_inputs">Email</label>
              <input
                value={email}
                onChange={handleChange("email")}
                type="text"
                placeholder="Your email"
              />
            </div> */}
            <div className="form-group">
              <label className="label_inputs">About</label>
              <textarea
                value={about}
                onChange={handleChange("about")}
                type="text"
                placeholder="Write about yourself..."
              ></textarea>
            </div>
            <div className="form-group">
              <div className="social-wrap">
                <span className="social-profile">
                  <i className="fa fa-facebook" />
                </span>
                <input
                  onChange={handleChange("facebook")}
                  type="text"
                  value={facebook}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="social-wrap">
                <span className="social-profile">
                  <i className="fa fa-twitter" />
                </span>
                <input
                  onChange={handleChange("twitter")}
                  type="text"
                  value={twitter}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="social-wrap">
                <span className="social-profile">
                  <i className="fa fa-instagram" />
                </span>
                <input
                  onChange={handleChange("instagram")}
                  type="text"
                  value={instagram}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="label_inputs">Password</label>
              <input
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <button className="btn_create">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
