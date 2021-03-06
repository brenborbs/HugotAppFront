import Link from "next/link";

const Userlinks = () => {
  return (
    <div className="left_dash">
      <h2>
        <i className="fa fa-rocket" aria-hidden="true"></i> User
      </h2>
      <div className="link_account">
        <ul>
          <Link href="/user/update">
            <a>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              Profile
            </a>
          </Link>

          <li>
            <a href="/user/crud/post">
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
              Create Hugot Line
            </a>
          </li>

          <Link href="/user/crud/posts">
            <a>
              <i className="fa fa-table" aria-hidden="true"></i>Manage Lines
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Userlinks;
