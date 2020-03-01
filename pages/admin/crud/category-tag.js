import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Category from "../../../components/crud/Category";
import Tag from "../../../components/crud/Tag";

const CategoryTag = () => {
  return (
    <Layout>
      <Admin>
        <div className="cat-tags-container">
          <div className="right_create_wrapper">
            <Category />
            <Tag />
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default CategoryTag;
