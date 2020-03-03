import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import PostRead from "../../../components/crud/PostRead";
import { isAuth } from "../../../actions/auth";

const Post = () => {
  const username = isAuth() && isAuth().username;
  return (
    <Layout>
      <Private>
        <div className="manage-table">
          <PostRead username={username} />
        </div>
      </Private>
    </Layout>
  );
};

export default Post;
