import "./RightNav.scss";
import { Users } from "../../App";
import ProfileButton from "./ProfileButton";
import Menu from "./Menu";
import Messenger from "./Messenger";
import Notifications from "./Notifications";
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
        <ItemsContainer>
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
