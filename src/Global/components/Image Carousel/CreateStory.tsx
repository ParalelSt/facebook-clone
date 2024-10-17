import { Users } from "App";
import "./CreateStory.scss";
import { useContext, useRef, useState } from "react";
import CarouselContext from "Content/Home/MiddleContent/CarouselContext";
import { v4 } from "uuid";
import { carouselDataType } from "Content/Home/MiddleContent/MiddleContent";
import CreateStoryRight from "./CreateStoryRight";
import CreateStoryMiddle from "./CreateStoryMiddle";
import CreateStoryLeft from "./CreateStoryLeft";

interface CreateStoryProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  currentUser: Users | null;
}

const CreateStory = ({ setIsAuthenticated, currentUser }: CreateStoryProps) => {
  //State for setting visibility of the Add text, Discard and Share to story buttons, but also the preview of the story
  const [storyItemsVisible, setStoryItemsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //Image file handling
  const [image, setImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  //CarouselData context

  const carouselContext = useContext(CarouselContext);

  if (!carouselContext) {
    throw new Error("temp");
  }

  const { carouselData, setCarouselData } = carouselContext;

  //Adding the new story

  const addNewStory = (newStory: carouselDataType) => {
    setCarouselData([...carouselData, newStory]);
  };

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
      <CreateStoryLeft
        createStory={createStory}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        storyItemsVisible={storyItemsVisible}
        setStoryItemsVisible={setStoryItemsVisible}
        setImage={setImage}
        currentUser={currentUser}
        imageInputRef={imageInputRef}
      ></CreateStoryLeft>
      <CreateStoryMiddle
        setImage={setImage}
        storyItemsVisible={storyItemsVisible}
        setStoryItemsVisible={setStoryItemsVisible}
        image={image}
        imageInputRef={imageInputRef}
      ></CreateStoryMiddle>
      <CreateStoryRight
        currentUser={currentUser}
        setIsAuthenticated={setIsAuthenticated}
      ></CreateStoryRight>
      <div className={`white-bg ${isOpen ? "active" : "disabled"}`}></div>
    </div>
  );
};

export default CreateStory;
