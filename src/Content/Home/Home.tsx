import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";
import MiddleContent from "./MiddleNav/MiddleContent";
import { v4 as uuidv4 } from "uuid";
import { Users } from "../../App";

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
  users: Users[];
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
}

function Home({ user, users, setIsAuthenticated, setCurrentUser }: HomeProps) {
  const contactList: ContactListType[] = [
    {
      username: user?.user || "",
      image: user?.profilePicture || "",
      postImage: "/images/post/Sunflowers.webp",
      status: "online",
      recentStoryPost: true,
      id: user?.id || uuidv4(),
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
      image: "/images/post/Toshihido.jpg",
      postImage: "/images/post/R34.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "HappyCapy",
      image: "/icons/HappyCapy.jpg",
      postImage: "/images/post/CapybaraJudge.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "KittenLover323",
      image: "/icons/KittenLover.jpg",
      postImage: "/images/post/Cat.jpg",
      status: "online",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "John Smith",
      image: "/icons/John.jpg",
      postImage: "/icons/LoL.jpg",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
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

    {
      username: "A",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "A",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "A",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "A",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },

    {
      username: "A",
      image: "/images/ProfilePicture.jpg",
      postImage: "",
      status: "offline",
      recentStoryPost: true,
      id: uuidv4(),
    },
  ];

  const sortedContactList = contactList
    .sort((a, b) => {
      if (!a || !b) {
        return 0;
      }
      return a.status === "online" ? -1 : 1;
    })
    .slice(0, 17);

  return (
    <div className="home">
      <LeftNavSide></LeftNavSide>
      <MiddleContent
        setIsAuthenticated={setIsAuthenticated}
        setCurrentUser={setCurrentUser}
        users={users}
        user={user}
        contactList={contactList}
      ></MiddleContent>
      <RightSideNav contactList={sortedContactList}></RightSideNav>
    </div>
  );
}

export default Home;
