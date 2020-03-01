import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import PostUpdate from "../../../components/crud/PostUpdate";

const Post = () => {
  return (
    <Layout>
      <Admin>
        <PostUpdate />
      </Admin>
    </Layout>
  );
};

export default Post;
