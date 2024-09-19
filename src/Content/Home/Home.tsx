import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";
import MiddleContent from "./MiddleNav/MiddleContent";
import { v4 as uuidv4 } from "uuid";
import { Users } from "../../App";

export interface ContactListType {
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  image: string;
  status: string;
  recentStoryPost: boolean;
  id: string;
}

interface HomeProps {
  user: Users | null;
}

function Home({ user }: HomeProps) {
  const contactList: ContactListType[] = [
    {
      username: "Aron Matoic",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "1",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/icons/Agar.io.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "2",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "3",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "4",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "5",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "6",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "7",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "8",
      email: "",
      phoneNumber: "",
      password: "",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },
  ];

  return (
    <div className="home">
      <LeftNavSide></LeftNavSide>
      <MiddleContent user={user} contactList={contactList}></MiddleContent>
      <RightSideNav contactList={contactList}></RightSideNav>
    </div>
  );
}

export default Home;
