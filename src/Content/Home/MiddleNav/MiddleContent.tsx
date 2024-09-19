import { useMemo } from "react";
import ImageCarousel from "../../../Global/components/Image Carousel/ImageCarousel";
import "./MiddleContent.scss";
import { v4 as uuidv4 } from "uuid";
import StateYourMind from "./StateYourMind";
import { Users } from "../../../App";
import { ContactListType } from "../Home";

export interface carouselData {
  username: string;
  profilePicture: string;
  recentStoryPost: boolean;
  image: string;
  userId: string;
  id: string;
}

interface MiddleContentProps {
  contactList: ContactListType[];
  user: Users | null;
}

export interface User {
  username: string;
  profilePicture: string;
}

function MiddleContent({ contactList, user }: MiddleContentProps) {
  const carouselData: carouselData[] = useMemo(() => {
    return contactList.flatMap((post) => ({
      username: post.username,
      profilePicture: post.image,
      recentStoryPost: post.recentStoryPost,
      image: post.postImage,
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
