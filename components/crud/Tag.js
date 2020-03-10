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
    reload: false
  });

  const { name, error, success, tags, removed, reload } = values;
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
    // console.log('create category', name);
    create({ name }, token).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          error: false,
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
      return <div className="success">Tag has been added</div>;
    }
  };

  const showError = () => {
    if (error) {
      return <div className="warning">Tag already existed!</div>;
    }
  };

  const showRemoved = () => {
    if (removed) {
      return <div className="remove">Tag has been removed!</div>;
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
          New Tag
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
