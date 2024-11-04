import LeftNavSide from "Content/Home/LeftSideNav/LeftSideNav";
import RightSideNav from "Content/Home/RightSideNav/RightSideNav";
import "Content/Home/Home.scss";
import MiddleContent, {
  carouselDataType,
  Posts,
} from "Content/Home/MiddleContent/MiddleContent";
import { Users } from "App";
import { useMemo } from "react";
import { Videos } from "Content/Video/Video";

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
  carouselData: carouselDataType[];
  setCarouselData: (carouselData: carouselDataType[]) => void;
  contactList: ContactListType[];
  initialCarouselData: carouselDataType[];
  posts: Posts[] | Videos[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[] | Videos[]>>;
}

function Home({
  user,
  users,
  setIsAuthenticated,
  setCurrentUser,
  setEmailOrPhoneValue,
  setPasswordValue,
  carouselData,
  setCarouselData,
  contactList,
  initialCarouselData,
  posts,
  setPosts,
}: HomeProps) {
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
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        initialCarouselData={initialCarouselData}
        posts={posts}
        setPosts={setPosts}
      ></MiddleContent>
      <RightSideNav contactList={sortedContactList}></RightSideNav>
    </div>
  );
}

export default Home;
