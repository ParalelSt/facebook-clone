import "./RightNav.scss";
import { Users } from "App";
import ProfileButton from "Navbar/Right/ProfileButton";
import Menu from "Navbar/Right/Menu";
import Messenger from "Navbar/Right/Messenger";
import Notifications from "Navbar/Right/Notifications";
import "./ProfileItem.scss";
import "./ItemContainer.scss";
import ItemsContainer from "./ItemsContainer";

interface RightNavProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  currentUser: Users | null;
}

function RightNav({ setIsAuthenticated, currentUser }: RightNavProps) {
  return (
    <>
      <div className="right-nav">
        <ItemsContainer className="nav-items-container">
          <Menu></Menu>
          <Messenger></Messenger>
          <Notifications></Notifications>
          <ProfileButton
            setIsAuthenticated={setIsAuthenticated}
            currentUser={currentUser}
          ></ProfileButton>
        </ItemsContainer>
      </div>
    </>
  );
}

export default RightNav;
