import { useMemo, useState } from "react";
import ImageCarousel from "Global/components/Image Carousel/ImageCarousel";
import "Content/Home/MiddleContent/MiddleContent.scss";
import { v4 as uuidv4, v4 } from "uuid";
import StateYourMind from "Content/Home/MiddleContent/StateYourMind";
import { Users } from "App";
import { ContactListType } from "Content/Home/Home";
import Post from "Content/Home/MiddleContent/Post";

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
  users: Users[];
  setEmailOrPhoneValue: (emailOrPhoneValue: string) => void;
  setPasswordValue: (passwordValue: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
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
}: MiddleContentProps) {
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

  const [posts, setPosts] = useState<Posts[]>([
    {
      username: "Aron Matoic",
      profilePicture: "./images/ProfilePicture.jpg",
      timePosted: "10 hours ago",
      description:
        "The capybara, or greater capybara (Hydrochoerus hydrochaeris), is the largest living rodent, native to South America. It is a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria. The capybara inhabits savannas and dense forests and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually lives in groups of 10–20 individuals. The capybara is hunted for its meat and hide and also for grease from its thick fatty skin.",
      image: "/images/post/CapybaraJudge.jpg",
      likeIcons: [],
      usersWhoLiked: [],
      likeCount: 0,
      commentCount: 1,
      shareCount: 1,
      comments: [],
      id: v4(),
    },

    {
      username: "Toshihido Yamada",
      profilePicture: "./images/post/Toshihido.jpg",
      timePosted: "28 August",
      description: "Take a look at my new GTR R34",
      image: "/images/post/R34.avif",
      likeIcons: [],
      usersWhoLiked: [],
      likeCount: 0,
      commentCount: 0,
      shareCount: 0,
      comments: [],
      id: v4(),
    },
  ]);

  return (
    <div className="middle-content-container">
      <div className="inner-content-container">
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
      </div>
    </div>
  );
}

export default MiddleContent;
