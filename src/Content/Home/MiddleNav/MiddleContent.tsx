import { useMemo } from "react";
import ImageCarousel from "../../../Global/components/Image Carousel/ImageCarousel";
import "./MiddleContent.scss";
import { v4 as uuidv4, v4 } from "uuid";
import StateYourMind from "./StateYourMind";
import { Users } from "../../../App";
import { ContactListType } from "../Home";
import Post from "./Post";

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

export interface Posts {
  username: string;
  profilePicture: string;
  status: string;
  timePosted: string;
  description: string;
  image: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  comments: string[];
  id: string;
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

  const posts: Posts[] = [
    {
      username: "Aron Matoic",
      profilePicture: "./images/ProfilePicture.jpg",
      status: "online",
      timePosted: "10 hours ago",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur quasi sequi enim laudantium rem doloribus repudiandae aut nemo dolorem, iure placeat. Reiciendis recusandae accusantium nam neque. Cum, sapiente debitis.",
      image: "/icons/ClimateScienceCenter.svg",
      likeCount: 0,
      commentCount: 0,
      shareCount: 0,
      comments: [],
      id: v4(),
    },
  ];

  return (
    <div className="middle-content-container">
      <div className="inner-content-container">
        <ImageCarousel carouselData={carouselData}></ImageCarousel>
        <StateYourMind user={user}></StateYourMind>
        <Post posts={posts}></Post>
      </div>
    </div>
  );
}

export default MiddleContent;
