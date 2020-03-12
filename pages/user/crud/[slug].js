import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import PostUpdate from "../../../components/crud/PostUpdate";
import UserLinks from "../../user/Userlinks";

const Post = () => {
  return (
    <Layout>
      <Private>
        <div className="create_container">
          <div className="create_wrapper">
            <UserLinks />
          </div>
          <PostUpdate />
        </div>
      </Private>
    </Layout>
  );
};

export default Post;
