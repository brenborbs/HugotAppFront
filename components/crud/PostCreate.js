import { useState, useEffect } from "react";
import { withRouter } from "next/router"; // same as props
import { getCookie } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { createPost } from "../../actions/post";

const PostCreate = ({ router }) => {
  // Show ctegories and tags
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]); // categories
  const [checkedTag, setCheckedTag] = useState([]); // tags

  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    about: "",
    body: "",
    author: "",
    source: "",
    verification: "",
    hidePublishButton: false
  });

  const {
    error,
    sizeError,
    success,
    formData,
    about,
    body,
    author,
    source,
    verification,
    hidePublishButton
  } = values;
  const token = getCookie("token");

  // lifecycle, load blog when render and grab props, populate state
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initCategories();
    initTags();
  }, [router]);

  const publishPost = e => {
    e.preventDefault();
    // console.log('ready to publishPost');
    createPost(formData, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          about: "",
          body: "",
          author: "",
          error: "",
          success: `Hugot line "${data.about}" is created`
        });
        setCategories([]);
        setTags([]);
      }
    });
  };

  const initCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };

  const initTags = () => {
    getTags().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };

  const handleChange = name => e => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleToggle = c => () => {
    setValues({ ...values, error: "" });
    // return the first index or -1
    const clickedCategory = checked.indexOf(c);
    const all = [...checked]; // values in state
    // if category exist then take-out splice , if exist then push
    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set("categories", all);
  };

  const handleTagsToggle = t => () => {
    setValues({ ...values, error: "" });
    // return the first index or -1
    const clickedTag = checked.indexOf(t);
    const all = [...checkedTag];

    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set("tags", all);
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i}>
          <input
            onChange={handleToggle(c._id)}
            type="checkbox"
            className="check_input"
          />
          <label>{c.name}</label>
        </li>
      ))
    );
  };

  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i}>
          <input
            onChange={handleTagsToggle(t._id)}
            type="checkbox"
            className="check_input"
          />
          <label>{t.name}</label>
        </li>
      ))
    );
  };

  const showError = () => (
    <div className="alert-error" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="alert-success" style={{ display: success ? "" : "none" }}>
      {success}
    </div>
  );

  return (
    // <React.fragment>
    <div className="right_create_wrapper">
      <div className="create_right">
        {showError()}
        {showSuccess()}
        <h2>Create</h2>
        <form onSubmit={publishPost}>
          <div className="form-group">
            <label className="label_inputs">
              <i className="fa fa-file-image-o" aria-hidden="true"></i>Photo
            </label>
            <small className="text-muted">Max size: 1mb</small>
            <input
              onChange={handleChange("photo")}
              type="file"
              accept="image/*"
              className="file_input"
              required
            />
          </div>
          <div className="form-group">
            <label className="label_inputs">About</label>
            <input
              value={about}
              onChange={handleChange("about")}
              type="text"
              placeholder="e.g success and failure, love and friendship, humor , music and food..."
            />
          </div>
          <div className="form-group">
            <label className="label_inputs">Line</label>
            <textarea
              value={body}
              onChange={handleChange("body")}
              type="text"
              placeholder="Write hugot line here..."
            ></textarea>
          </div>
          <div className="form-group">
            <label className="label_inputs">Author</label>
            <input
              value={author}
              onChange={handleChange("author")}
              type="text"
              placeholder="Name of hugot line writer..."
            ></input>
          </div>

          <div className="form-checkbox">
            <label className="label_inputs">Category</label>
            {showCategories()}
          </div>

          <div className="form-checkbox">
            <label className="label_inputs">Tags</label>
            {showTags()}
          </div>

          <div className="form-group">
            <label className="label_inputs">Source</label>
            <select onChange={handleChange("source")}>
              <option value="select one">Please Select</option>
              <option value="0">Sourced</option>
              <option value="1">Unsourced</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label_inputs">Verification</label>
            <select onChange={handleChange("verification")}>
              <option>Please Select</option>
              <option value="0">Verified</option>
              <option value="1">Unverified</option>
            </select>
          </div>

          <button className="btn_create">Add Line</button>
        </form>
      </div>
    </div>
    // </React.fragment>
  );
};

export default withRouter(PostCreate);
