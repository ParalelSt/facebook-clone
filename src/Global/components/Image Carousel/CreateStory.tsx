import { Users } from "App";
import ItemsContainer from "Navbar/Right/ItemsContainer";
import Menu from "Navbar/Right/Menu";
import Notifications from "Navbar/Right/Notifications";
import ProfileButton from "Navbar/Right/ProfileButton";
import CloseButton from "Global/components/Image Carousel/CloseButton";
import FacebookLogoButton from "Global/components/Image Carousel/FacebookLogoButton";
import "./CreateStory.scss";
import { FaImage } from "react-icons/fa6";

interface CreateStoryProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  currentUser: Users | null;
}

const CreateStory = ({ setIsAuthenticated, currentUser }: CreateStoryProps) => {
  const TextIcon = () => (
    <div style={{ fontWeight: "bold", fontSize: "20px", color: "black" }}>
      Aa
    </div>
  );

  return (
    <div className="create-story-container">
      <div className="create-story-left">
        <ItemsContainer className="create-story-left-top">
          <CloseButton></CloseButton>
          <FacebookLogoButton></FacebookLogoButton>
        </ItemsContainer>
        <div className="create-story-left-user-info-container">
          <div className="create-story-left-user-info-container-top">
            <div className="left">
              <h2>Your story</h2>
            </div>
            <div className="right">
              <div className="privacy-settings">
                <img src="/icons/Cog.svg" alt="privacy-settings" />
              </div>
            </div>
          </div>
          <div className="create-story-left-user-info-container-bottom">
            <div className="profile-picture">
              <img
                src={currentUser?.profilePicture}
                alt="current user profile picture"
              />
            </div>
            <span className="username">{currentUser?.user}</span>
          </div>
        </div>
      </div>
      <div className="create-story-middle">
        <div className="card left-card">
          <div className="icon-container">
            <FaImage size={22} color="black" />
          </div>
          <span className="card-text">Create a photo story</span>
        </div>
        <div className="card right-card">
          <div className="icon-container">
            <TextIcon></TextIcon>
          </div>
          <span className="card-text">Create a text story</span>
        </div>
      </div>
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
    </div>
  );
};

export default CreateStory;
