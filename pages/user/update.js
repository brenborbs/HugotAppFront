import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import ProfileUpdate from "../../components/auth/ProfileUpdate";
import Link from "next/link";
import UserLinks from "../../pages/user/Userlinks";

const UserProfileUpdate = () => {
  return (
    <Layout>
      <Private>
        <div className="create_container">
          <div className="create_wrapper">
            <UserLinks />
          </div>
          <ProfileUpdate />
        </div>
      </Private>
    </Layout>
  );
};

export default UserProfileUpdate;
