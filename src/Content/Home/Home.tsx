import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";
import MiddleContent from "./MiddleNav/MiddleContent";
import { v4 as uuidv4 } from "uuid";
import { CurrentUser, Users } from "../../App";

export interface ContactListType {
  username: string;
  image: string;
  postImage: string;
  status: string;
  recentStoryPost: boolean;
  id: string;
}

interface HomeProps {
  user: Users | null;
  currentUser: CurrentUser;
}

function Home({ user, currentUser }: HomeProps) {
  const contactList: ContactListType[] = [
    {
      username: user?.user || "",
      image: user?.profilePicture || "",
      postImage: "/images/post/Sunflowers.webp",
      status: "online",
      recentStoryPost: true,
      id: currentUser.id,
    },

    {
      username: "James Marquez",
      image: "/images/post/ProfilePic1.jpg",
      postImage: "/images/post/R34.avif",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "Toshihido Yamada",
      image: "/images/ProfilePicture.jpg",
      postImage: "/images/post/R34.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "3",
      image: "/images/ProfilePicture.jpg",
      postImage: "/images/post/CapybaraJudge.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "4",
      image: "/images/ProfilePicture.jpg",
      postImage: "/images/post/Cat.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "5",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "6",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "7",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
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
