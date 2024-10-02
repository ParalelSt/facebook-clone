import { Users } from "../../../App";
import ItemsContainer from "../../../Navbar/Right/ItemsContainer";
import Menu from "../../../Navbar/Right/Menu";
import Notifications from "../../../Navbar/Right/Notifications";
import ProfileButton from "../../../Navbar/Right/ProfileButton";
import CloseButton from "./CloseButton";
import FacebookLogoButton from "./FacebookLogoButton";

interface CreateStoryProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  currentUser: Users | null;
}

const CreateStory = ({ setIsAuthenticated, currentUser }: CreateStoryProps) => {
  return (
    <div className="create-story-container">
      <div className="create-story-left">
        <ItemsContainer>
          <CloseButton></CloseButton>
          <FacebookLogoButton></FacebookLogoButton>
        </ItemsContainer>
      </div>
      <div className="create-story-middle"></div>
      <div className="create-story-right">
        <nav>
          <ItemsContainer>
            <Menu></Menu>
            <Notifications></Notifications>
            <ProfileButton
              setIsAuthenticated={setIsAuthenticated}
              currentUser={currentUser}
            ></ProfileButton>
          </ItemsContainer>
        </nav>
      </div>
    </div>
  );
};

export default CreateStory;
