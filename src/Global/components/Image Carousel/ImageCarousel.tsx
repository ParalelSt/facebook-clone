import { useState, useMemo } from "react";
import { carouselDataType } from "Content/Home/MiddleContent/MiddleContent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

interface data {
  carouselData: carouselDataType[];
}

function ImageCarousel({ carouselData }: data) {
  const Navigate = useNavigate();

  const navigateToStoryCreation = () => {
    Navigate("/stories/create");
  };

  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : "";

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 5;

  const validStories = useMemo(() => {
    return carouselData.filter(
      (story) =>
        story.recentStoryPost ||
        (!story.recentStoryPost && story.userId === currentUser.id)
    );
  }, [carouselData, currentUser.id]);

  const totalValidImages = validStories.length;

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + imagesToShow - 1) % totalValidImages
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - imagesToShow + 1;
      return newIndex < 0 ? totalValidImages + newIndex : newIndex;
    });
  };

  const getVisibleStories = () => {
    const stories = [];
    for (let i = 0; i < imagesToShow; i++) {
      const index = (currentIndex + i) % totalValidImages;
      stories.push(validStories[index]);
    }
    return stories;
  };

  const visibleStories = getVisibleStories();

  const isNextVisible = currentIndex + imagesToShow < totalValidImages;
  const isPrevVisible = currentIndex > 0;

  return (
    <div className="carousel">
      {visibleStories.map((story) => {
        if (!story.recentStoryPost && story.userId === currentUser.id) {
          return (
            <div
              className="story-container user-story-container"
              onClick={navigateToStoryCreation}
              key={story.id}
            >
              <img
                src={story.profilePicture}
                className={`user-profile`}
                alt="User profile"
              />
              <div className="create-story">
                <button className="create-story-btn">
                  <GoPlus />
                </button>
                <span>Create story</span>
              </div>
            </div>
          );
        } else if (story.recentStoryPost) {
          return (
            <div className="story-container not-current-user" key={story.id}>
              <img
                src={story.image}
                className="story-image"
                style={{ width: story.width, height: story.height }}
                alt={`${story.username}'s story`}
              />
              <img
                src={story.profilePicture}
                className={`profile-picture ${
                  story.recentStoryPost ? "active" : "disabled"
                }`}
                alt={`${story.username}'s profile`}
              />
              <span className="story-username">{story.username}</span>
            </div>
          );
        }
        return null;
      })}
      {isPrevVisible && (
        <button className={`button-prev`} onClick={prevSlide}>
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
