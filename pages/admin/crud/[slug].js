import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import PostUpdate from "../../../components/crud/PostUpdate";
import Adminlinks from "../AdminLinks";

const Post = () => {
  return (
    <Layout>
      <Admin>
        <div className="create_container">
          <div className="create_wrapper">
            <Adminlinks />
          </div>
          <PostUpdate />
        </div>
      </Admin>
    </Layout>
  );
};

export default Post;
