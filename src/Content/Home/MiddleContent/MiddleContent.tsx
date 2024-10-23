import { useEffect } from "react";
import ImageCarousel from "Global/components/Image Carousel/ImageCarousel";
import "Content/Home/MiddleContent/MiddleContent.scss";
import StateYourMind from "Content/Home/MiddleContent/StateYourMind";
import { Users } from "App";
import { ContactListType } from "Content/Home/Home";
import Post from "Content/Home/MiddleContent/Post";
import CarouselContext from "./CarouselContext";

export interface carouselDataType {
  username: string;
  profilePicture: string;
  recentStoryPost: boolean;
  image: string;
  userId: string;
  id: string;
  width: number | undefined;
  height: number | undefined;
}

interface MiddleContentProps {
  contactList: ContactListType[];
  user: Users | null;
  users: Users[];
  setEmailOrPhoneValue: (emailOrPhoneValue: string) => void;
  setPasswordValue: (passwordValue: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
  carouselData: carouselDataType[];
  setCarouselData: (carouselData: carouselDataType[]) => void;
  initialCarouselData: carouselDataType[];
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
}

export interface User {
  username: string;
  profilePicture: string;
}

export interface Posts {
  username: string;
  profilePicture: string;
  timePosted: string;
  description: string;
  image: string;
  likeIcons: [];
  usersWhoLiked: { username: string; id: string }[];
  likeCount: number;
  commentCount: number;
  shareCount: number;
  comments: [];
  id: string;
}

function MiddleContent({
  contactList,
  user,
  users,
  setIsAuthenticated,
  setCurrentUser,
  carouselData,
  setCarouselData,
  initialCarouselData,
  posts,
  setPosts,
}: MiddleContentProps) {
  useEffect(() => {
    if (carouselData.length === 0) {
      setCarouselData(initialCarouselData);
    }
  }, [carouselData.length, initialCarouselData, setCarouselData, contactList]);

  return (
    <div className="middle-content-container">
      <div className="inner-content-container">
        <CarouselContext.Provider value={{ carouselData, setCarouselData }}>
          <ImageCarousel carouselData={carouselData}></ImageCarousel>
          <StateYourMind user={user}></StateYourMind>
          <Post
            setCurrentUser={setCurrentUser}
            setIsAuthenticated={setIsAuthenticated}
            users={users}
            user={user}
            posts={posts}
            setPosts={setPosts}
          ></Post>
        </CarouselContext.Provider>
      </div>
    </div>
  );
}

export default MiddleContent;
