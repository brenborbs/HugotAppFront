import { useState, useEffect } from "react";
import { getCookie } from "../../actions/auth";
import { create, getTags, removeTag } from "../../actions/tag";

const Tag = () => {
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
    tags: [],
    removed: false,
    reload: false,
    loading: false
  });

  const { name, error, success, tags, removed, reload, loading } = values;
  const token = getCookie("token");

  useEffect(() => {
    loadTags();
  }, [reload]);

  const loadTags = () => {
    getTags().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, tags: data });
      }
    });
  };

  const showTags = () => {
    return tags.map((t, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(t.slug)}
          title="Double click to delete"
          key={i}
          className="btn-category"
        >
          {t.name}
        </button>
      );
    });
  };

  const deleteConfirm = slug => {
    let answer = window.confirm("Are you sure you want to delete this tag?");
    if (answer) {
      deleteTag(slug);
    }
  };

  const deleteTag = slug => {
    // console.log('delete', slug);
    removeTag(slug, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({
          ...values,
          error: false,
          success: false,
          name: "",
          removed: !removed,
          reload: !reload
        });
      }
    });
  };

  const clickSubmit = e => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    // console.log('create category', name);
    create({ name }, token).then(data => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          success: false,
          loading: false
        });
      } else {
        setValues({
          ...values,
          error: false,
          loading: false,
          success: true,
          name: ""
          // removed: !removed,
          // reload: !reload
        });
      }
    });
  };

  const handleChange = e => {
    setValues({
      ...values,
      name: e.target.value,
      error: false,
      success: false,
      removed: ""
    });
  };

  const showSuccess = () => {
    if (success) {
      return (
        <div className="alert-info" style={{ marginBottom: "10px" }}>
          <div className="alert-icon">
            <i
              className="fa fa-check-circle-o"
              aria-hidden="true"
              style={{ color: "#4caf50" }}
            ></i>
          </div>
          <div className="alert-message">Tag has been added</div>
        </div>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <div className="alert-danger">
          <div className="alert-icon">
            <i
              className="fa fa-exclamation-circle"
              aria-hidden="true"
              style={{ color: "#f44336" }}
            ></i>
          </div>
          <div className="alert-message">Tag allready existed!</div>
        </div>
      );
    }
  };

  const showRemoved = () => {
    if (removed) {
      return (
        <div className="alert-info" style={{ marginBottom: "10px" }}>
          <div className="alert-icon">
            <i
              className="fa fa-check-circle-o"
              aria-hidden="true"
              style={{ color: "#4caf50" }}
            ></i>
          </div>
          <div className="alert-message">Tag has been removed!</div>
        </div>
      );
    }
  };

  const mouseMoveHandler = e => {
    setValues({ ...values, error: false, success: false, removed: "" });
  };

  const newTagForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="label_inputs">Tag</label>
        <input
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="Write Tag..."
          required
        />
      </div>
      <div>
        <button type="submit" className="btn_create">
          {loading && (
            <i className="fa fa-refresh fa-spin" style={{ color: "white" }}></i>
          )}
          {loading && <span> Creating...</span>}
          {!loading && <span>New Tag</span>}
        </button>
      </div>
    </form>
  );

  return (
    // <div className="right_create_wrapper">
    <div className="create_right" style={{ marginTop: "2em" }}>
      {showSuccess()}
      {showRemoved()}
      {showError()}
      <h2>Create Tags</h2>
      <div onMouseMove={mouseMoveHandler}>
        {newTagForm()}
        {showTags()}
      </div>
    </div>
    // </div>
  );
};

export default Tag;
