/* eslint-disable @typescript-eslint/no-unused-vars */
import { Users } from "App";
import ItemsContainer from "Navbar/Right/ItemsContainer";
import Menu from "Navbar/Right/Menu";
import Notifications from "Navbar/Right/Notifications";
import ProfileButton from "Navbar/Right/ProfileButton";
import CloseButton from "Global/components/Image Carousel/CloseButton";
import FacebookLogoButton from "Global/components/Image Carousel/FacebookLogoButton";
import "./CreateStory.scss";
import { FaImage } from "react-icons/fa6";
import { useContext, useState } from "react";
import CarouselContext from "Content/Home/MiddleContent/CarouselContext";
import { v4 } from "uuid";
import { carouselDataType } from "Content/Home/MiddleContent/MiddleContent";

interface CreateStoryProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  currentUser: Users | null;
}

const CreateStory = ({ setIsAuthenticated, currentUser }: CreateStoryProps) => {
  const [createStoryButtonVisible, setCreateStoryButtonVisible] =
    useState(false);
  const [image, setImage] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImage(imageUrl);
      };
      reader.readAsDataURL(file);
    }
    setCreateStoryButtonVisible(true);
  };

  const carouselContext = useContext(CarouselContext);

  if (!carouselContext) {
    throw new Error("temp");
  }

  const { carouselData, setCarouselData } = carouselContext;

  const TextIcon = () => (
    <div style={{ fontWeight: "bold", fontSize: "20px", color: "black" }}>
      Aa
    </div>
  );

  const addNewStory = (newStory: carouselDataType) => {
    setCarouselData([...carouselData, newStory]);
  };

  // eslint-disable-file @typescript-eslint/no-unused-vars
  const createStory = () => {
    if (!currentUser || !image) {
      throw new Error("How did you get here without signing in?");
    }

    const newStory = {
      username: currentUser?.user || "",
      profilePicture: currentUser?.profilePicture || "",
      recentStoryPost: true,
      image: image || "",
      userId: currentUser?.id || "",
      id: v4(),
    };

    addNewStory(newStory);
  };

  return (
    <div className={`create-story-container`}>
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
        <div className="add-text-button-container">
          <button className="add-text-button">
            <div className="icon-container">
              <TextIcon></TextIcon>
            </div>
            <span>Add text</span>
          </button>
        </div>
        <div className="create-story-button-container">
          <button className="discard">Discard</button>
          <button onClick={createStory} className="share-to-story">
            Share to story
          </button>
        </div>
      </div>
      <div className="create-story-middle">
        <div className="card left-card">
          <input
            className="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
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
