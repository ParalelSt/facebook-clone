import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "Navbar/Navbar";
import "Global/GlobalStyles.scss";
import { useEffect, useMemo, useState } from "react";
import PrivateRoute from "Global/components/PrivateRoute.tsx";
import Home, { ContactListType } from "Content/Home/Home.tsx";
import LogIn from "Global/components/LogIn/LogIn.tsx";
import CreateStory from "Global/components/Image Carousel/CreateStory.tsx";
import CarouselContext from "Content/Home/MiddleContent/CarouselContext";
import { carouselDataType } from "Content/Home/MiddleContent/MiddleContent";
import { v4 } from "uuid";

export interface Users {
  user: string;
  email: string;
  phoneNumber: string;
  password: string;
  profilePicture: string;
  likedPosts: string[];
  id: string;
}

export interface CurrentUser {
  user: string;
  email: string;
  phoneNumber: string;
  password: string;
  id: string;
}

function App() {
  const storedUser = localStorage.getItem("currentUser");
  const [currentUser, setCurrentUser] = useState<Users | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const contactList: ContactListType[] = useMemo(
    () => [
      {
        username: currentUser?.user || "",
        image: currentUser?.profilePicture || "",
        postImage: "",
        status: "online",
        recentStoryPost: false,
        id: currentUser?.id || v4(),
      },

      {
        username: "James Marquez",
        image: "/images/post/ProfilePic1.jpg",
        postImage: "/images/post/R34.avif",
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },

      {
        username: "Toshihido Yamada",
        image: "/images/post/Toshihido.jpg",
        postImage: "/images/post/R34.jpg",
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },

      {
        username: "Happy Capy",
        image: "/icons/HappyCapy.jpg",
        postImage: "/images/post/CapybaraJudge.jpg",
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },

      {
        username: "KittenLover 323",
        image: "/icons/KittenLover.jpg",
        postImage: "/images/post/Cat.jpg",
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },

      {
        username: "John Smith",
        image: "/icons/John.jpg",
        postImage: "/icons/LoL.jpg",
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },

      {
        username: "Emily Carter",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        postImage: "https://picsum.photos/600/400?random=1", // Static post image
        status: "offline",
        recentStoryPost: false,
        id: v4(),
      },
      {
        username: "Ryan Brooks",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        postImage: "https://picsum.photos/600/400?random=2", // Static post image
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Sophia Adams",
        image: "https://randomuser.me/api/portraits/women/15.jpg",
        postImage: "https://picsum.photos/600/400?random=3", // Static post image
        status: "offline",
        recentStoryPost: false,
        id: v4(),
      },
      {
        username: "Noah Mitchell",
        image: "https://randomuser.me/api/portraits/men/30.jpg",
        postImage: "https://picsum.photos/600/400?random=4", // Static post image
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Olivia Bennett",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        postImage: "https://picsum.photos/600/400?random=5", // Static post image
        status: "offline",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Liam Collins",
        image: "https://randomuser.me/api/portraits/men/28.jpg",
        postImage: "https://picsum.photos/600/400?random=6", // Static post image
        status: "online",
        recentStoryPost: false,
        id: v4(),
      },
      {
        username: "Ava Rogers",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        postImage: "https://picsum.photos/600/400?random=7", // Static post image
        status: "offline",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Mason Phillips",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        postImage: "https://picsum.photos/600/400?random=8", // Static post image
        status: "offline",
        recentStoryPost: false,
        id: v4(),
      },
      {
        username: "Isabella Evans",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        postImage: "https://picsum.photos/600/400?random=9", // Static post image
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },

      {
        username: "Lucas Johnson",
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        postImage: "https://picsum.photos/600/400?random=10",
        status: "online",
        recentStoryPost: false,
        id: v4(),
      },
      {
        username: "Chloe Smith",
        image: "https://randomuser.me/api/portraits/women/78.jpg",
        postImage: "https://picsum.photos/600/400?random=11",
        status: "offline",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Ethan Davis",
        image: "https://randomuser.me/api/portraits/men/29.jpg",
        postImage: "https://picsum.photos/600/400?random=12",
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Mia Thompson",
        image: "https://randomuser.me/api/portraits/women/89.jpg",
        postImage: "https://picsum.photos/600/400?random=13",
        status: "offline",
        recentStoryPost: false,
        id: v4(),
      },
      {
        username: "Aiden Martinez",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        postImage: "https://picsum.photos/600/400?random=14",
        status: "online",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Emma White",
        image: "https://randomuser.me/api/portraits/women/64.jpg",
        postImage: "https://picsum.photos/600/400?random=15",
        status: "offline",
        recentStoryPost: true,
        id: v4(),
      },
      {
        username: "Henry Harris",
        image: "https://randomuser.me/api/portraits/men/48.jpg",
        postImage: "https://picsum.photos/600/400?random=16",
        status: "online",
        recentStoryPost: false,
        id: v4(),
      },
    ],
    [currentUser]
  );

  const initialCarouselData: carouselDataType[] = useMemo(() => {
    const currentUserStory = currentUser
      ? {
          username: currentUser.user || "",
          profilePicture: currentUser.profilePicture || "",
          recentStoryPost: false,
          image: "",
          userId: currentUser.id || "",
          id: v4(),
          width: undefined,
          height: undefined,
        }
      : null;

    const otherStories = contactList.slice(1).flatMap((post) => {
      return [
        {
          username: post.username || "",
          profilePicture: post.image || "",
          recentStoryPost: post.recentStoryPost || false,
          image: post.postImage || "",
          userId: post.id || "",
          id: v4(),
          width: undefined,
          height: undefined,
        },
      ];
    });

    return currentUserStory
      ? [currentUserStory, ...otherStories]
      : otherStories;
  }, [contactList, currentUser]);

  useEffect(() => {
    setCarouselData(initialCarouselData);
  }, [initialCarouselData]);

  const [carouselData, setCarouselData] =
    useState<carouselDataType[]>(initialCarouselData);
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>("");

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("user");
    if (storedUsers) {
      const parsedUser = JSON.parse(storedUsers);
      setUsers((prevUsers) =>
        prevUsers.find((user) => user.email === parsedUser.email)
          ? prevUsers
          : [...prevUsers, parsedUser]
      );
    }
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  return (
    <>
      <Navbar
        users={users}
        currentUser={currentUser}
        setIsAuthenticated={setIsAuthenticated}
      ></Navbar>
      <Routes>
        <Route
          path="/login"
          element={
            <LogIn
              emailOrPhoneValue={emailOrPhoneValue}
              setEmailOrPhoneValue={setEmailOrPhoneValue}
              passwordValue={passwordValue}
              setPasswordValue={setPasswordValue}
              setUsers={setUsers}
              users={users}
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            ></LogIn>
          }
        />
        <Route
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}></PrivateRoute>
          }
        >
          <Route
            path="/"
            element={
              <Home
                emailOrPhoneValue={emailOrPhoneValue}
                setEmailOrPhoneValue={setEmailOrPhoneValue}
                passwordValue={passwordValue}
                setPasswordValue={setPasswordValue}
                setIsAuthenticated={setIsAuthenticated}
                setCurrentUser={setCurrentUser}
                users={users}
                user={currentUser}
                carouselData={carouselData}
                setCarouselData={setCarouselData}
                contactList={contactList}
                initialCarouselData={initialCarouselData}
              ></Home>
            }
          ></Route>
          <Route path="/video"></Route>
          <Route path="/marketplace"></Route>
          <Route path="/groups"></Route>
          <Route path="/games"></Route>
          <Route path="/create-account"></Route>
          <Route path="/posts/postId"></Route>
          <Route
            path="/stories/create"
            element={
              <CarouselContext.Provider
                value={{ carouselData, setCarouselData }}
              >
                <CreateStory
                  setIsAuthenticated={setIsAuthenticated}
                  currentUser={currentUser}
                ></CreateStory>
              </CarouselContext.Provider>
            }
          ></Route>
        </Route>
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <Navigate to={"/"}></Navigate>
            ) : (
              <Navigate to={"/login"}></Navigate>
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
