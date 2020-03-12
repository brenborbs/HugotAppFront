import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import PostRead from "../../../components/crud/PostRead";
import { isAuth } from "../../../actions/auth";
import UserLinks from "../../user/Userlinks";

// Bug on css create_container height
const Post = () => {
  const username = isAuth() && isAuth().username;
  return (
    <Layout>
      <Private>
        <div className="create_container" style={{ height: "150vh" }}>
          <div className="create_wrapper">
            <UserLinks />
          </div>
          <PostRead username={username} />
        </div>
      </Private>
    </Layout>
  );
};

export default Post;
