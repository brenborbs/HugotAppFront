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
    reload: false
  });
  const { name, error, success, categories, removed, reload } = values;
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

  // error! cannot show this alert
  const showSuccess = () => {
    if (success) {
      return <div className="success">Category has been added</div>;
    }
  };

  const showError = () => {
    if (error) {
      return <div className="warning">Category already existed!</div>;
    }
  };

  const showRemoved = () => {
    if (removed) {
      return <div className="remove">Category has been removed!</div>;
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
      <button className="btn_create">New Category</button>
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
