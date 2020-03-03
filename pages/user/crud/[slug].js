import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import PostUpdate from "../../../components/crud/PostUpdate";

const Post = () => {
  return (
    <Layout>
      <Private>
        <div className="manage-table">
          <PostUpdate />
        </div>
      </Private>
    </Layout>
  );
};

export default Post;
