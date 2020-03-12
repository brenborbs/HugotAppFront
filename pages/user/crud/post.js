import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import PostCreate from "../../../components/crud/PostCreate";
import Link from "next/link";
import UserLinks from "../../user/Userlinks";

const UserPost = () => {
  return (
    <Layout>
      <Private>
        <div className="create_container">
          <div className="create_wrapper">
            <UserLinks />
          </div>
          <PostCreate />
        </div>
      </Private>
    </Layout>
  );
};

export default UserPost;
