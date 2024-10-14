import LeftNavSide from "Content/Home/LeftSideNav/LeftSideNav";
import RightSideNav from "Content/Home/RightSideNav/RightSideNav";
import "Content/Home/Home.scss";
import MiddleContent from "Content/Home/MiddleContent/MiddleContent";
import { v4 as uuidv4 } from "uuid";
import { Users } from "App";
import { useMemo } from "react";

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
  emailOrPhoneValue: string;
  setEmailOrPhoneValue: (emailOrPhoneValue: string) => void;
  passwordValue: string;
  setPasswordValue: (passwordValue: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
}

function Home({
  user,
  users,
  setIsAuthenticated,
  setCurrentUser,
  setEmailOrPhoneValue,
  setPasswordValue,
}: HomeProps) {
  const contactList: ContactListType[] = useMemo(
    () => [
      {
        username: user?.user || "",
        image: user?.profilePicture || "",
        postImage: "/images/post/Sunflowers.webp",
        status: "online",
        recentStoryPost: false,
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
        username: "Happy Capy",
        image: "/icons/HappyCapy.jpg",
        postImage: "/images/post/CapybaraJudge.jpg",
        status: "online",
        recentStoryPost: true,
        id: uuidv4(),
      },

      {
        username: "KittenLover 323",
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
        username: "Emily Carter",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        postImage: "https://picsum.photos/600/400?random=1", // Static post image
        status: "offline",
        recentStoryPost: false,
        id: uuidv4(),
      },
      {
        username: "Ryan Brooks",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        postImage: "https://picsum.photos/600/400?random=2", // Static post image
        status: "online",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Sophia Adams",
        image: "https://randomuser.me/api/portraits/women/15.jpg",
        postImage: "https://picsum.photos/600/400?random=3", // Static post image
        status: "offline",
        recentStoryPost: false,
        id: uuidv4(),
      },
      {
        username: "Noah Mitchell",
        image: "https://randomuser.me/api/portraits/men/30.jpg",
        postImage: "https://picsum.photos/600/400?random=4", // Static post image
        status: "online",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Olivia Bennett",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        postImage: "https://picsum.photos/600/400?random=5", // Static post image
        status: "offline",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Liam Collins",
        image: "https://randomuser.me/api/portraits/men/28.jpg",
        postImage: "https://picsum.photos/600/400?random=6", // Static post image
        status: "online",
        recentStoryPost: false,
        id: uuidv4(),
      },
      {
        username: "Ava Rogers",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        postImage: "https://picsum.photos/600/400?random=7", // Static post image
        status: "offline",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Mason Phillips",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        postImage: "https://picsum.photos/600/400?random=8", // Static post image
        status: "offline",
        recentStoryPost: false,
        id: uuidv4(),
      },
      {
        username: "Isabella Evans",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        postImage: "https://picsum.photos/600/400?random=9", // Static post image
        status: "online",
        recentStoryPost: true,
        id: uuidv4(),
      },

      {
        username: "Lucas Johnson",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        postImage: "https://picsum.photos/600/400?random=10",
        status: "online",
        recentStoryPost: false,
        id: uuidv4(),
      },
      {
        username: "Chloe Smith",
        image: "https://randomuser.me/api/portraits/women/78.jpg",
        postImage: "https://picsum.photos/600/400?random=11",
        status: "offline",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Ethan Davis",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        postImage: "https://picsum.photos/600/400?random=12",
        status: "online",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Mia Thompson",
        image: "https://randomuser.me/api/portraits/women/89.jpg",
        postImage: "https://picsum.photos/600/400?random=13",
        status: "offline",
        recentStoryPost: false,
        id: uuidv4(),
      },
      {
        username: "Aiden Martinez",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        postImage: "https://picsum.photos/600/400?random=14",
        status: "online",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Emma White",
        image: "https://randomuser.me/api/portraits/women/64.jpg",
        postImage: "https://picsum.photos/600/400?random=15",
        status: "offline",
        recentStoryPost: true,
        id: uuidv4(),
      },
      {
        username: "Henry Harris",
        image: "https://randomuser.me/api/portraits/men/48.jpg",
        postImage: "https://picsum.photos/600/400?random=16",
        status: "online",
        recentStoryPost: false,
        id: uuidv4(),
      },
    ],
    [user]
  );

  const sortedContactList = useMemo(() => {
    const onlineContacts = contactList.filter(
      (contact) => contact.status === "online"
    );
    const offlineContacts = contactList.filter(
      (contact) => contact.status !== "online"
    );

    return [...onlineContacts, ...offlineContacts].slice(0, 17);
  }, [contactList]);

  return (
    <div className="home">
      <LeftNavSide></LeftNavSide>
      <MiddleContent
        setEmailOrPhoneValue={setEmailOrPhoneValue}
        setPasswordValue={setPasswordValue}
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
