import { useState } from "react";
import { carouselData } from "../../../Content/Home/MiddleNav/MiddleContent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface data {
  carouselData: carouselData[];
}

function ImageCarousel({ carouselData }: data) {
  const [startIndex, setStartIndex] = useState(0);
  const imagesToShow = 5;

  const nextImage = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex + imagesToShow >= carouselData.length) {
        return 0;
      }
      return prevIndex + imagesToShow;
    });
  };

  const prevImage = () => {
    setStartIndex((prevIndex) => {
      return Math.max(0, prevIndex - imagesToShow);
    });
  };

  const visibleImages = carouselData.slice(
    startIndex,
    startIndex + imagesToShow
  );

  return (
    <div className="carousel">
      {visibleImages.map((story) => (
        <div className="story-container" key={story.id}>
          <img src={story.image} alt="" className="story-image" />
          <img src={story.profilePicture} alt="" className="profile-picture" />
          <span className="story-username">{story.username}</span>
        </div>
      ))}
      <button onClick={prevImage} className="button-prev">
        <IoIosArrowBack />
      </button>
      <button onClick={nextImage} className="button-next">
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default ImageCarousel;
