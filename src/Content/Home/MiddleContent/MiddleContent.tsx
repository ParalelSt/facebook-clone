import { useEffect, useMemo, useState } from "react";
import ImageCarousel from "Global/components/Image Carousel/ImageCarousel";
import "Content/Home/MiddleContent/MiddleContent.scss";
import { v4 } from "uuid";
import StateYourMind from "Content/Home/MiddleContent/StateYourMind";
import { Users } from "App";
import { ContactListType } from "Content/Home/Home";
import Post from "Content/Home/MiddleContent/Post";
import CarouselContext from "./CarouselContext";

export interface carouselDataType {
  username: string;
  profilePicture: string;
  recentStoryPost: boolean;
  image: string;
  userId: string;
  id: string;
}

interface MiddleContentProps {
  contactList: ContactListType[];
  user: Users | null;
  users: Users[];
  setEmailOrPhoneValue: (emailOrPhoneValue: string) => void;
  setPasswordValue: (passwordValue: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
  carouselData: carouselDataType[];
  setCarouselData: (carouselData: carouselDataType[]) => void;
}

export interface User {
  username: string;
  profilePicture: string;
}

export interface Posts {
  username: string;
  profilePicture: string;
  timePosted: string;
  description: string;
  image: string;
  likeIcons: [];
  usersWhoLiked: { username: string; id: string }[];
  likeCount: number;
  commentCount: number;
  shareCount: number;
  comments: [];
  id: string;
}

function MiddleContent({
  contactList,
  user,
  users,
  setIsAuthenticated,
  setCurrentUser,
  carouselData,
  setCarouselData,
}: MiddleContentProps) {
  // const currentUserString = localStorage.getItem("currentUser");
  // const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  const initialCarouselData: carouselDataType[] = useMemo(() => {
    return contactList.flatMap((post) => {
      return [
        {
          username: post.username || "",
          profilePicture: post.image || "",
          recentStoryPost: post.recentStoryPost || false,
          image: post.postImage || "",
          userId: post.id || "",
          id: v4(),
        },
      ];
    });
  }, [contactList]);

  useEffect(() => {
    if (carouselData.length === 0) {
      setCarouselData(initialCarouselData);
    }
  }, [carouselData.length, initialCarouselData, setCarouselData]);

  const [posts, setPosts] = useState<Posts[]>([
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
  ]);

  return (
    <div className="middle-content-container">
      <div className="inner-content-container">
        <CarouselContext.Provider value={{ carouselData, setCarouselData }}>
          <ImageCarousel carouselData={carouselData}></ImageCarousel>
          <StateYourMind user={user}></StateYourMind>
          <Post
            setCurrentUser={setCurrentUser}
            setIsAuthenticated={setIsAuthenticated}
            users={users}
            user={user}
            posts={posts}
            setPosts={setPosts}
          ></Post>
        </CarouselContext.Provider>
      </div>
    </div>
  );
}

export default MiddleContent;
