import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "Navbar/Navbar";
import "Global/GlobalStyles.scss";
import { useEffect, useMemo, useState } from "react";
import PrivateRoute from "Global/components/PrivateRoute.tsx";
import Home, { ContactListType } from "Content/Home/Home.tsx";
import LogIn from "Global/components/LogIn/LogIn.tsx";
import CreateStory from "Global/components/Image Carousel/CreateStory.tsx";
import CarouselContext from "Content/Home/MiddleContent/CarouselContext";
import {
  carouselDataType,
  Posts,
} from "Content/Home/MiddleContent/MiddleContent";
import { v4 } from "uuid";
import PostDetail from "Content/Home/MiddleContent/PostDetail";

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
  const [posts, setPosts] = useState<Posts[]>([]);

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

  const initialPosts: Posts[] = useMemo(() => {
    return [
      {
        username: "Aron Matoic",
        profilePicture: "./images/ProfilePicture.jpg",
        timePosted: "10 hours ago",
        description:
          "The capybara, or greater capybara (Hydrochoerus hydrochaeris), is the largest living rodent, native to South America. It is a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria. The capybara inhabits savannas and dense forests and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually lives in groups of 10–20 individuals. The capybara is hunted for its meat and hide and also for grease from its thick fatty skin.",
        image: "./images/post/CapybaraJudge.jpg",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Maine Cooper",
          },
          {
            id: v4(),
            username: "John Doe",
          },
          {
            id: v4(),
            username: "Jane Smith",
          },
          {
            id: v4(),
            username: "Alice Johnson",
          },
          {
            id: v4(),
            username: "Bob Brown",
          },
          {
            id: v4(),
            username: "Charlie Davis",
          },
        ],
        likeCount: 6,
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
        image: "./images/post/R34.avif",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "John Doe",
          },
          {
            id: v4(),
            username: "Jane Smith",
          },
          {
            id: v4(),
            username: "Alice Johnson",
          },
          {
            id: v4(),
            username: "Bob Brown",
          },
          {
            id: v4(),
            username: "Charlie Davis",
          },
        ],
        likeCount: 5,
        commentCount: 0,
        shareCount: 0,
        comments: [],
        id: v4(),
      },
      {
        username: "Emily Johnson",
        profilePicture: "https://randomuser.me/api/portraits/women/12.jpg",
        timePosted: "2 days ago",
        description:
          "Just witnessed an incredible sunset at the beach. The colors were breathtaking!",
        image: "https://picsum.photos/id/1001/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Sarah Wilson",
          },
          {
            id: v4(),
            username: "Mike Thompson",
          },
          {
            id: v4(),
            username: "Lisa Garcia",
          },
          {
            id: v4(),
            username: "David Lee",
          },
        ],
        likeCount: 4,
        commentCount: 2,
        shareCount: 1,
        comments: [],
        id: v4(),
      },
      {
        username: "Alex Rodriguez",
        profilePicture: "https://randomuser.me/api/portraits/men/67.jpg",
        timePosted: "1 week ago",
        description:
          "Exploring the beautiful streets of Paris. The Eiffel Tower never gets old!",
        image: "https://picsum.photos/id/318/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Emma Watson",
          },
          {
            id: v4(),
            username: "Chris Evans",
          },
          {
            id: v4(),
            username: "Sophie Turner",
          },
          {
            id: v4(),
            username: "Tom Holland",
          },
          {
            id: v4(),
            username: "Zendaya",
          },
          {
            id: v4(),
            username: "Robert Downey Jr.",
          },
          {
            id: v4(),
            username: "Scarlett Johansson",
          },
        ],
        likeCount: 7,
        commentCount: 3,
        shareCount: 2,
        comments: [],
        id: v4(),
      },
      {
        username: "Sophia Chen",
        profilePicture: "https://randomuser.me/api/portraits/women/79.jpg",
        timePosted: "3 days ago",
        description:
          "Just adopted this adorable puppy! Meet Max, my new best friend.",
        image: "https://picsum.photos/id/237/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Oliver Brown",
          },
          {
            id: v4(),
            username: "Isabella Martinez",
          },
          {
            id: v4(),
            username: "Ethan Wilson",
          },
        ],
        likeCount: 3,
        commentCount: 5,
        shareCount: 0,
        comments: [],
        id: v4(),
      },
      {
        username: "Michael Brown",
        profilePicture: "https://randomuser.me/api/portraits/men/22.jpg",
        timePosted: "5 hours ago",
        description:
          "Just finished my first marathon! Feeling accomplished and exhausted.",
        image: "https://picsum.photos/id/48/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Sarah Johnson",
          },
          {
            id: v4(),
            username: "David Lee",
          },
          {
            id: v4(),
            username: "Emily Davis",
          },
          {
            id: v4(),
            username: "James Wilson",
          },
        ],
        likeCount: 4,
        commentCount: 2,
        shareCount: 1,
        comments: [],
        id: v4(),
      },
      {
        username: "Olivia Taylor",
        profilePicture: "https://randomuser.me/api/portraits/women/33.jpg",
        timePosted: "1 day ago",
        description: "Trying out a new recipe today. Homemade sushi rolls!",
        image: "https://picsum.photos/id/292/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Emma Thompson",
          },
          {
            id: v4(),
            username: "Liam Garcia",
          },
        ],
        likeCount: 2,
        commentCount: 1,
        shareCount: 0,
        comments: [],
        id: v4(),
      },
      {
        username: "Daniel Kim",
        profilePicture: "https://randomuser.me/api/portraits/men/45.jpg",
        timePosted: "2 weeks ago",
        description:
          "Just got back from an amazing hiking trip in the Rockies. The views were incredible!",
        image: "https://picsum.photos/id/29/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Sophie Chen",
          },
          {
            id: v4(),
            username: "Ryan Patel",
          },
          {
            id: v4(),
            username: "Mia Johnson",
          },
          {
            id: v4(),
            username: "Noah Williams",
          },
          {
            id: v4(),
            username: "Ava Brown",
          },
        ],
        likeCount: 5,
        commentCount: 3,
        shareCount: 2,
        comments: [],
        id: v4(),
      },
      {
        username: "Emma Wilson",
        profilePicture: "https://randomuser.me/api/portraits/women/56.jpg",
        timePosted: "4 days ago",
        description:
          "Celebrating my graduation! Four years of hard work finally paid off.",
        image: "https://picsum.photos/id/180/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Liam Anderson",
          },
          {
            id: v4(),
            username: "Sophia Martinez",
          },
          {
            id: v4(),
            username: "Ethan Taylor",
          },
          {
            id: v4(),
            username: "Olivia Brown",
          },
          {
            id: v4(),
            username: "Noah Davis",
          },
          {
            id: v4(),
            username: "Ava Wilson",
          },
        ],
        likeCount: 6,
        commentCount: 4,
        shareCount: 1,
        comments: [],
        id: v4(),
      },
      {
        username: "James Lee",
        profilePicture: "https://randomuser.me/api/portraits/men/78.jpg",
        timePosted: "6 hours ago",
        description:
          "Just launched my first mobile app! So excited to share it with everyone.",
        image: "https://picsum.photos/id/0/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Emily Chen",
          },
          {
            id: v4(),
            username: "Michael Johnson",
          },
          {
            id: v4(),
            username: "Sophia Brown",
          },
        ],
        likeCount: 3,
        commentCount: 2,
        shareCount: 1,
        comments: [],
        id: v4(),
      },
      {
        username: "Sophie Martin",
        profilePicture: "https://randomuser.me/api/portraits/women/90.jpg",
        timePosted: "2 days ago",
        description:
          "Visited the Louvre today. The Mona Lisa is even more impressive in person!",
        image: "https://picsum.photos/id/320/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "David Thompson",
          },
          {
            id: v4(),
            username: "Emma Davis",
          },
          {
            id: v4(),
            username: "Oliver Wilson",
          },
          {
            id: v4(),
            username: "Ava Anderson",
          },
        ],
        likeCount: 4,
        commentCount: 1,
        shareCount: 1,
        comments: [],
        id: v4(),
      },
      {
        username: "Ryan Patel",
        profilePicture: "https://randomuser.me/api/portraits/men/36.jpg",
        timePosted: "1 week ago",
        description:
          "Just got my dream car! Can't wait to take it for a spin this weekend.",
        image: "https://picsum.photos/id/111/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Sophia Lee",
          },
          {
            id: v4(),
            username: "Ethan Brown",
          },
          {
            id: v4(),
            username: "Olivia Johnson",
          },
          {
            id: v4(),
            username: "Noah Davis",
          },
          {
            id: v4(),
            username: "Emma Wilson",
          },
        ],
        likeCount: 5,
        commentCount: 3,
        shareCount: 0,
        comments: [],
        id: v4(),
      },
      {
        username: "Isabella Garcia",
        profilePicture: "https://randomuser.me/api/portraits/women/68.jpg",
        timePosted: "3 days ago",
        description:
          "Trying out a new hobby: pottery! It's messy but so much fun.",
        image: "https://picsum.photos/id/177/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Liam Thompson",
          },
          {
            id: v4(),
            username: "Ava Martinez",
          },
        ],
        likeCount: 2,
        commentCount: 1,
        shareCount: 0,
        comments: [],
        id: v4(),
      },
      {
        username: "Ethan Anderson",
        profilePicture: "https://randomuser.me/api/portraits/men/52.jpg",
        timePosted: "5 days ago",
        description:
          "Just finished reading 'The Alchemist'. What an inspiring book!",
        image: "https://picsum.photos/id/24/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Sophie Wilson",
          },
          {
            id: v4(),
            username: "Oliver Brown",
          },
          {
            id: v4(),
            username: "Emma Davis",
          },
        ],
        likeCount: 3,
        commentCount: 2,
        shareCount: 1,
        comments: [],
        id: v4(),
      },
      {
        username: "Mia Johnson",
        profilePicture: "https://randomuser.me/api/portraits/women/42.jpg",
        timePosted: "8 hours ago",
        description:
          "First day at my new job! Excited for this new chapter in my career.",
        image: "https://picsum.photos/id/60/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: v4(),
            username: "Noah Taylor",
          },
          {
            id: v4(),
            username: "Sophia Lee",
          },
          {
            id: v4(),
            username: "Liam Garcia",
          },
          {
            id: v4(),
            username: "Olivia Chen",
          },
        ],
        likeCount: 4,
        commentCount: 3,
        shareCount: 0,
        comments: [],
        id: v4(),
      },
    ];
  }, []);

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

  useEffect(() => {
    setPosts(initialPosts);
  }, [initialPosts]);

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
                posts={initialPosts}
                setPosts={setPosts}
              ></Home>
            }
          ></Route>
          <Route path="/video"></Route>
          <Route path="/marketplace"></Route>
          <Route path="/groups"></Route>
          <Route path="/games"></Route>
          <Route path="/create-account"></Route>
          <Route
            path="/posts/:postId"
            element={
              <PostDetail
                posts={posts}
                setPosts={setPosts}
                user={currentUser}
              />
            }
          />
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
