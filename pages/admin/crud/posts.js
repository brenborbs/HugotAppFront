import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import PostRead from "../../../components/crud/PostRead";

const Post = () => {
  return (
    <Layout>
      <Admin>
        <div className="manage-table">
          <PostRead />
        </div>
      </Admin>
    </Layout>
  );
};

export default Post;
