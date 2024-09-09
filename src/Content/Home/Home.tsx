import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";
import MiddleNav from "./MiddleNav/MiddleContent";

export interface ContactListType {
  username: string;
  image: string;
  status: string;
  id: number;
}

function Home() {
  const contactList: ContactListType[] = [
    {
      username: "Aron Matoic",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "1",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "2",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "3",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "4",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "5",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "6",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      id: Math.random() * 100,
    },

    {
      username: "7",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      id: Math.random() * 100,
    },
  ];

  return (
    <div className="home">
      <LeftNavSide></LeftNavSide>
      <MiddleNav contactList={contactList}></MiddleNav>
      <RightSideNav contactList={contactList}></RightSideNav>
    </div>
  );
}

export default Home;
