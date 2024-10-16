import { Users } from "App";
import ItemsContainer from "Navbar/Right/ItemsContainer";
import Menu from "Navbar/Right/Menu";
import Notifications from "Navbar/Right/Notifications";
import ProfileButton from "Navbar/Right/ProfileButton";
import "./CreateStoryRight.scss";

interface CreateStoryRightProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  currentUser: Users | null;
}

const CreateStoryRight = ({
  setIsAuthenticated,
  currentUser,
}: CreateStoryRightProps) => {
  return (
    <div className="create-story-right">
      <nav>
        <ItemsContainer className="create-story-right-container">
          <Menu></Menu>
          <Notifications></Notifications>
          <ProfileButton
            setIsAuthenticated={setIsAuthenticated}
            currentUser={currentUser}
          ></ProfileButton>
        </ItemsContainer>
      </nav>
    </div>
  );
};

export default CreateStoryRight;
