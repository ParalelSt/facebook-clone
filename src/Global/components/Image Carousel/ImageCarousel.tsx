import { carouselData } from "../../../Content/Home/MiddleNav/MiddleContent";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "keen-slider/keen-slider.min.css";

interface data {
  carouselData: carouselData[];
}

function ImageCarousel({ carouselData }: data) {
  return (
    <div className="carousel">
      {carouselData.map((story) => (
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
      ))}
      <button className="button-prev">
        <IoIosArrowBack />
      </button>
      <button className="button-next">
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default ImageCarousel;
