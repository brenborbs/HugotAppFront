import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import DashInfo from "../../components/DashInfo";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="create_container">
          <div className="create_wrapper">
            <div className="left_dash">
              <h2>
                <i className="fa fa-rocket" aria-hidden="true"></i>Admin
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
                    <a href="/admin/crud/post">
                      <i className="fa fa-plus-circle" aria-hidden="true"></i>
                      Create Hugot Line
                    </a>
                  </li>
                  <Link href="/admin/crud/category-tag">
                    <a>
                      <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
                      Categories
                    </a>
                  </Link>
                  <Link href="/admin/crud/category-tag">
                    <a>
                      <i className="fa fa-sticky-note-o" aria-hidden="true"></i>
                      Tags
                    </a>
                  </Link>
                  <Link href="/admin/crud/posts">
                    <a>
                      <i className="fa fa-table" aria-hidden="true"></i>Manage
                      Lines
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="right_dash">
            <DashInfo />
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
