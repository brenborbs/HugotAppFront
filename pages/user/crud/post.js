import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import PostCreate from "../../../components/crud/PostCreate";

const UserPost = () => {
  return (
    <Layout>
      <Private>
        <PostCreate />
      </Private>
    </Layout>
  );
};

export default UserPost;
