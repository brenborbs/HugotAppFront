import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";
import Adminlinks from "../AdminLinks";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="create_container">
          <div className="create_wrapper">
            <Adminlinks />
          </div>
          <div className="create-right">
            <Category />
            <Tag />
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
