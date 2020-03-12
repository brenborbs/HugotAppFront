import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import UserLinks from "../../pages/user/Userlinks";
import DashInfo from "../../components/DashInfo";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <div className="create_container">
          <div className="create_wrapper">
            <UserLinks />
          </div>
          <div className="right-dash-info">
            <DashInfo />
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserIndex;
