import { useState, useEffect } from "react";
import { getCookie } from "../../actions/auth";
import { create, getCategories, removeCategory } from "../../actions/category";

const Category = () => {
  const [values, setValues] = useState({
    name: "",
    error: false,
    success: false,
    categories: [],
    removed: false,
    reload: false,
    loading: false
  });
  const { name, error, success, categories, removed, reload, loading } = values;
  const token = getCookie("token");

  // load all categories during render
  useEffect(() => {
    loadCategories();
  }, [reload]);

  // loadCategories() function
  const loadCategories = () => {
    getCategories().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setValues({ ...values, categories: data });
      }
    });
  };

  const showCategories = () => {
    return categories.map((c, i) => {
      return (
        <button
          onDoubleClick={() => deleteConfirm(c.slug)}
          title="Double click to delete"
          key={i}
          className="btn-category"
        >
          {c.name}
        </button>
      );
    });
  };

  const deleteConfirm = slug => {
    let answer = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (answer) {
      deleteCategory(slug);
    }
  };

  const deleteCategory = slug => {
    // console.log('delete', slug);
    removeCategory(slug, token).then(data => {
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

  // error! cannot show this alert
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
          <div className="alert-message">Category has been added</div>
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
          <div className="alert-message">Category allready existed!</div>
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
          <div className="alert-message">Category has been removed!</div>
        </div>
      );
    }
  };

  const mouseMoveHandler = e => {
    setValues({ ...values, error: false, success: false, removed: "" });
  };

  const newCategoryForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="label_inputs">Category</label>
        <input
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="Write category..."
          required
        />
      </div>
      <button className="btn_create">
        {loading && (
          <i className="fa fa-refresh fa-spin" style={{ color: "white" }}></i>
        )}
        {loading && <span> Creating...</span>}
        {!loading && <span>New Category</span>}
      </button>
    </form>
  );

  return (
    // <div className="right_create_wrapper">
    <div className="create_right">
      {showSuccess()}
      {showRemoved()}
      {showError()}
      <h2>Create Categories</h2>
      <div onMouseMove={mouseMoveHandler}>
        {newCategoryForm()}
        {showCategories()}
      </div>
    </div>
    // </div>
  );
};

export default Category;
