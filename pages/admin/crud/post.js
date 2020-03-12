import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import PostCreate from "../../../components/crud/PostCreate";
import Adminlinks from "../AdminLinks";

const Post = () => {
  return (
    <Layout>
      <Admin>
        <div className="create_container">
          <div className="create_wrapper">
            <Adminlinks />
          </div>
          <PostCreate />
        </div>
      </Admin>
    </Layout>
  );
};

export default Post;
