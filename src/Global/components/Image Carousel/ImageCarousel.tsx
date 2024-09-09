import { carouselData } from "../../../Content/Home/MiddleNav/MiddleContent";

interface data {
  carouselData: carouselData[];
}

function ImageCarousel({ carouselData }: data) {
  console.log(carouselData);
  return (
    <>
      {carouselData.map((item, index) => {
        return (
          <div className="story-container" key={item.userId}>
            <img src={item.profilePicture} alt="" className="profile-picture" />
            <img src={item.image} alt="" className="story-image" />
            <span className="story-username">{item.username}</span>
          </div>
        );
      })}
    </>
  );
}

export default ImageCarousel;
