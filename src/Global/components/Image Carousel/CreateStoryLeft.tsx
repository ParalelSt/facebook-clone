import ItemsContainer from "Navbar/Right/ItemsContainer";
import CloseButton from "./CloseButton";
import FacebookLogoButton from "./FacebookLogoButton";
import "Global/components/Image Carousel/CreateStoryLeft.scss";
import AddTextButton from "./AddTextButton";
import DiscardButtonPopUp from "./DiscardButtonPopUp";
import { Users } from "App";

interface CreateStoryLeftProps {
  createStory: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setImage: (image: string | null) => void;
  storyItemsVisible: boolean;
  setStoryItemsVisible: (storyItemsVisible: boolean) => void;
  currentUser: Users | null;
  imageInputRef: React.RefObject<HTMLInputElement>;
}

const CreateStoryLeft = ({
  createStory,
  isOpen,
  setIsOpen,
  setImage,
  storyItemsVisible,
  setStoryItemsVisible,
  currentUser,
  imageInputRef,
}: CreateStoryLeftProps) => {
  console.log(currentUser);

  //Opening the discard items popup

  const openDiscardItems = () => {
    setIsOpen(true);
  };

  //Handle Image Discard

  const handleImageDiscard = () => {
    setImage(null);
    setStoryItemsVisible(false);
    setIsOpen(false);

    if (imageInputRef?.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
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
      <div
        className={`story-items ${storyItemsVisible ? "active" : "disabled"}`}
      >
        <AddTextButton></AddTextButton>
        <div className="main-buttons-container">
          <DiscardButtonPopUp
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleImageDiscard={handleImageDiscard}
          ></DiscardButtonPopUp>
          <div className="create-story-button-container">
            <button
              onClick={() => openDiscardItems()}
              className="discard-button"
            >
              Discard
            </button>
            <button onClick={createStory} className="share-to-story-button">
              Share to story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStoryLeft;
