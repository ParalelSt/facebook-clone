import { useState } from "react";
import { carouselData } from "../../../Content/Home/MiddleContent/MiddleContent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface data {
  carouselData: carouselData[];
}

function ImageCarousel({ carouselData }: data) {
  //Navigation Function

  const Navigate = useNavigate();

  const navigateToStoryCreation = () => {
    Navigate("/stories/create");
  };

  //Current User info

  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : "";

  //Displaying the image carousel

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + imagesToShow - 1;
      return newIndex < carouselData.length ? newIndex : 0;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - imagesToShow + 1;
      return newIndex >= 0
        ? newIndex
        : Math.max(carouselData.length - imagesToShow, 0);
    });
  };

  const remainingItems =
    carouselData.filter((contact) => contact.recentStoryPost).length -
    currentIndex;

  const isPrevVisible = currentIndex > 0;
  const isNextVisible = remainingItems > imagesToShow - 1;

  return (
    <div className="carousel">
      {carouselData
        .slice(currentIndex, currentIndex + imagesToShow)
        .map((story) => {
          if (story.userId === currentUser.id) {
            return (
              <div
                className="story-container user-story-container"
                onClick={navigateToStoryCreation}
                key={story.id}
              >
                <img src={story.profilePicture} className={`user-profile`} />
                <div className="create-story">
                  <button className="create-story-btn">
                    <GoPlus></GoPlus>
                  </button>
                  <span>Create story</span>
                </div>
              </div>
            );
          } else if (story.recentStoryPost) {
            return (
              <div className="story-container" key={story.id}>
                <img src={story.image} className="story-image" />
                <img
                  src={story.profilePicture}
                  className={`profile-picture ${
                    story.recentStoryPost ? "active" : "disabled"
                  }`}
                />
                <span className="story-username">{story.username}</span>
              </div>
            );
          }
        })}
      {isPrevVisible && (
        <button
          className={`button-prev ${remainingItems === 1 ? "move-left" : ""}`}
          onClick={prevSlide}
        >
          <IoIosArrowBack />
        </button>
      )}
      {isNextVisible && (
        <button className={`button-next`} onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
}

export default ImageCarousel;
