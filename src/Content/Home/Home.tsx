import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";
import MiddleContent from "./MiddleNav/MiddleContent";
import { useId } from "react";

export interface ContactListType {
  username: string;
  image: string;
  status: string;
  id: string;
}

function Home() {
  const contactList: ContactListType[] = [
    {
      username: "Aron Matoic",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: useId(),
    },

    {
      username: "1",
      image: "/icons/Agar.io.jpg",
      status: "online",
      id: useId(),
    },

    {
      username: "2",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: useId(),
    },

    {
      username: "3",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: useId(),
    },

    {
      username: "4",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: useId(),
    },

    {
      username: "5",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: useId(),
    },

    {
      username: "6",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      id: useId(),
    },

    {
      username: "7",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: useId(),
    },

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      id: useId(),
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
