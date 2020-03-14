import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { list, removePost } from "../../actions/post";
import moment from "moment";

const PostRead = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const token = getCookie("token");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    list(username).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  const deletePost = slug => {
    removePost(slug, token).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadPosts();
      }
    });
  };

  const deleteConfirm = slug => {
    let answer = window.confirm("Are you sure you want to delete your line?");
    if (answer) {
      deletePost(slug);
    }
  };

  const showUpdateButton = post => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/crud/${post.slug}`}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1) {
      return (
        <Link href={`/admin/crud/${post.slug}`}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </Link>
      );
    }
  };

  const showAllPosts = () => {
    return posts.map((post, i) => {
      return (
        <tr className="stripe-dark" key={i}>
          <td className="pa3">{post.postedBy.name}</td>
          {/* <td className="pa3">{post.about}</td> */}
          <td className="pa3">{post.body}</td>
          <td className="pa3">{showUpdateButton(post)}</td>
          <td className="pa3">
            <i
              className="fa fa-trash-o"
              aria-hidden="true"
              onClick={() => deleteConfirm(post.slug)}
            ></i>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="create_right">
      {message && (
        <div className="alert-success">
          <div className="alert-icon">
            <i
              className="fa fa-check-circle-o"
              aria-hidden="true"
              style={{ color: "#4caf50" }}
            ></i>
          </div>
          <div className="alert-message">{message}</div>
        </div>
      )}
      <h2>
        <i className="fa fa-table" aria-hidden="true"></i> Manage Lines
      </h2>
      <div className="manage_line">
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">Posted By</th>
                <th className="fw6 tl pa3 bg-white">Hugot Line</th>
                <th className="fw6 tl pa3 bg-white">Edit</th>
                <th className="fw6 tl pa3 bg-white">Delete</th>
              </tr>
            </thead>
            <tbody className="lh-copy">{showAllPosts()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostRead;
