import { useMemo } from "react";
import ImageCarousel from "../../../Global/components/Image Carousel/ImageCarousel";
import { ContactI } from "../RightSideNav/RightSideNav";
import "./MiddleContent.scss";
import { v4 as uuidv4 } from "uuid";
import StateYourMind from "./StateYourMind";

export interface carouselData {
  username: string;
  profilePicture: string;
  recentStoryPost: boolean;
  image: string;
  userId: string;
  id: string;
}

export interface User {
  username: string;
  profilePicture: string;
}

const user: User = {
  username: "Aron",
  profilePicture: "/images/ProfilePicture.jpg",
};

function MiddleContent({ contactList }: ContactI) {
  const carouselData: carouselData[] = useMemo(() => {
    return contactList.flatMap((post) => ({
      username: post.username,
      profilePicture: post.image,
      recentStoryPost: post.recentStoryPost,
      image: "/images/post/R34.jpg",
      userId: post.id,
      id: uuidv4(),
    }));
  }, [contactList]);

  return (
    <div className="middle-content-container">
      <div className="inner-content-container">
        <ImageCarousel carouselData={carouselData}></ImageCarousel>
        <StateYourMind user={user}></StateYourMind>
      </div>
    </div>
  );
}

export default MiddleContent;
