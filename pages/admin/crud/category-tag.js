import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="right_create_wrapper">
          <div className="create-left"></div>
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
