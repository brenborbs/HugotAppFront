import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import PostCreate from "../../../components/crud/PostCreate";

const Post = () => {
  return (
    <Layout>
      <Admin>
        <PostCreate />
      </Admin>
    </Layout>
  );
};

export default Post;
