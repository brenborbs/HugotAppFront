import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import PostRead from "../../../components/crud/PostRead";
import Adminlinks from "../AdminLinks";

const Post = () => {
  return (
    <Layout>
      <Admin>
        <div className="create_container">
          <div className="create_wrapper">
            <Adminlinks />
          </div>
          <PostRead />
        </div>
      </Admin>
    </Layout>
  );
};

export default Post;
