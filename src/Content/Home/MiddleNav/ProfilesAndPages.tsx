import { FaSearch } from "react-icons/fa";
import BorderLine from "../../../Global/components/BorderLine";
import "./ProfilesAndPages.scss";
import { Users } from "../../../App";
import { FaPlus } from "react-icons/fa6";

interface ProfileAndPagesProps {
  users: Users[];
}

const ProfilesAndPages = ({ users }: ProfileAndPagesProps) => {
  return (
    <div className="profiles-and-pages-container">
      <h1>Your profiles & Pages</h1>
      <BorderLine></BorderLine>
      <h4>
        Switch to interact on this post as a different profile or Page. Learn
        more.
      </h4>
      <div className="input-container">
        <FaSearch></FaSearch>
        <input placeholder="Search profiles and Pages" type="text" />
      </div>
      <div className="account-list">
        {users.map((user) => {
          return (
            <div className="account" key={user.id}>
              <img src={user.profilePicture} alt="" />
              <span>{user.user}</span>
            </div>
          );
        })}
        <button className="create-account-btn account">
          <FaPlus></FaPlus>
          <span>Create</span>
        </button>
      </div>
      <button className="accounts-center">Go to Accounts Center</button>
    </div>
  );
};

export default ProfilesAndPages;
