import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";
import MiddleContent from "./MiddleNav/MiddleContent";
import { v4 as uuidv4 } from "uuid";

export interface ContactListType {
  username: string;
  image: string;
  status: string;
  recentStoryPost: boolean;
  id: string;
}

function Home() {
  const contactList: ContactListType[] = [
    {
      username: "Aron Matoic",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "1",
      image: "/icons/Agar.io.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "2",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "3",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "4",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "5",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "6",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "7",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },
  ];

  return (
    <div className="home">
      <LeftNavSide></LeftNavSide>
      <MiddleContent contactList={contactList}></MiddleContent>
      <RightSideNav contactList={contactList}></RightSideNav>
    </div>
  );
}

export default Home;
