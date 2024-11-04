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
import Video, { Videos } from "Content/Video/Video";

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

  const initialPosts: Posts[] = useMemo(() => {
    return [
      {
        username: "Aron Matoic",
        profilePicture: "/images/ProfilePicture.jpg",
        timePosted: "10 hours ago",
        description:
          "The capybara, or greater capybara (Hydrochoerus hydrochaeris), is the largest living rodent, native to South America...",
        image: "/images/post/CapybaraJudge.jpg",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: "5f2b9f8a-e0ae-4319-8e2e-dc9f8f40b204",
            username: "Maine Cooper",
          },
          { id: "8c8e7c2a-abe1-481b-964f-1988b9a56a56", username: "John Doe" },
          {
            id: "a65b0bc9-fc8e-4c1a-8a6b-87e8d58b3bc7",
            username: "Jane Smith",
          },
          {
            id: "5b8e2397-baad-46de-b162-799e58e7b8e6",
            username: "Alice Johnson",
          },
          { id: "6fd3123a-3569-49a4-bc97-1f5120e99f7d", username: "Bob Brown" },
          {
            id: "4ff1b0bc-f349-4c45-b929-6e89d8e8e6f0",
            username: "Charlie Davis",
          },
        ],
        likeCount: 6,
        commentCount: 2,
        shareCount: 1,
        comments: [
          {
            username: "Maine Cooper",
            id: "e51ef8e5-5c1c-4dcb-bc66-90e5970120b4",
            profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
            comment: "Such an interesting animal!",
          },
          {
            username: "Jane Smith",
            id: "6c87de6c-b5a0-4e72-8c94-e7a48676007d",
            profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
            comment: "I love capybaras! They’re so cute.",
          },
        ],
        id: "b9d1079d-5154-4f8e-9ae7-0de2041c4b1a",
      },

      {
        username: "Toshihido Yamada",
        profilePicture: "/images/post/Toshihido.jpg",
        timePosted: "28 August",
        description: "Take a look at my new GTR R34",
        image: "/images/post/R34.avif",
        likeIcons: [],
        usersWhoLiked: [
          { id: "be9bc8ee-eec3-4be8-a6be-804ad1de420d", username: "John Doe" },
          {
            id: "de6350ae-d2bc-4292-a823-dba2dc5e6105",
            username: "Jane Smith",
          },
          {
            id: "e8fcf40c-1613-4f6d-b028-356aa1d29a02",
            username: "Alice Johnson",
          },
          { id: "45317cc1-545f-4eb0-89ec-c90a7edc536c", username: "Bob Brown" },
          {
            id: "f0c909b3-493b-4e48-b5b5-c0d7021c1f7b",
            username: "Charlie Davis",
          },
        ],
        likeCount: 5,
        commentCount: 0,
        shareCount: 0,
        comments: [],
        id: "0accc5bc-05c0-4c2b-98c4-c4da0588c5d6",
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
            id: "61ca8465-fb4f-4b94-bd1e-dc2f44dc3b3d",
            username: "Sarah Wilson",
          },
          {
            id: "0d6c022b-36c0-4b51-a684-f5b67fae775b",
            username: "Mike Thompson",
          },
          {
            id: "f69c2576-b8d1-4d38-b69e-8c64073997d2",
            username: "Lisa Garcia",
          },
          { id: "5c87b836-017e-47ed-8f7f-5c9a7f36215c", username: "David Lee" },
        ],
        likeCount: 4,
        commentCount: 2,
        shareCount: 1,
        comments: [
          {
            username: "Sarah Wilson",
            id: "077ed5cb-2e09-4fa0-8a41-77c6f1f832ec",
            profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
            comment: "Wow, that looks amazing!",
          },
          {
            username: "Mike Thompson",
            id: "a1b57918-0511-4e2d-a448-b4587c14d01b",
            profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
            comment: "I wish I was there!",
          },
        ],
        id: "f36f0a85-3f5c-44cf-b52e-3bcb0414a220",
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
            id: "cf4ab49c-d528-48ee-b69b-6e8aa6d1526f",
            username: "Emma Watson",
          },
          {
            id: "b80d6534-c917-4917-b90c-6ff9fa3ff580",
            username: "Chris Evans",
          },
          {
            id: "3eb47de1-d96a-45de-9724-4486ee7b7210",
            username: "Sophie Turner",
          },
          {
            id: "0173b62a-46d9-4e66-b3c3-2ab303df802b",
            username: "Tom Holland",
          },
          { id: "29cb9b24-e69d-4875-91f5-f73385dc30ec", username: "Zendaya" },
          {
            id: "a24837c3-daa0-4679-a97e-18c2296547e7",
            username: "Robert Downey Jr.",
          },
          {
            id: "ff3ed0a3-0d38-42e6-85b0-2c2d11aeb8e7",
            username: "Scarlett Johansson",
          },
        ],
        likeCount: 7,
        commentCount: 1,
        shareCount: 2,
        comments: [
          {
            username: "Emma Watson",
            id: "2c7f35c6-e8c0-4e06-bb1a-fc83a086b580",
            profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
            comment: "The Eiffel Tower is stunning!",
          },
        ],
        id: "aa53ff39-deda-4311-8cb6-5e0d4958b0fa",
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
            id: "7f07988f-69d5-49f0-8b82-067ecf04605a",
            username: "Oliver Brown",
          },
          {
            id: "9d1e64e2-6c2f-4e76-908c-b08ae77ef307",
            username: "Isabella Martinez",
          },
          {
            id: "1fa5879e-b891-4c49-a8b3-c1af22581e7c",
            username: "Ethan Wilson",
          },
        ],
        likeCount: 3,
        commentCount: 3,
        shareCount: 0,
        comments: [
          {
            username: "Oliver Brown",
            id: "e50c65a1-2db2-49a2-a73f-b55c6e4b6b79",
            profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
            comment: "What a cute puppy!",
          },
          {
            username: "Isabella Martinez",
            id: "063a5e3b-89b7-4c8e-9435-2981f15656ae",
            profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
            comment: "Max looks so playful!",
          },
          {
            username: "Ethan Wilson",
            id: "ecb261cb-1ee7-4de1-b93a-e9632c50851d",
            profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
            comment: "Congratulations on your new friend!",
          },
        ],
        id: "d157c07e-12b5-4b9f-b0f2-37d95f4891f8",
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
            id: "98c6e35f-ef73-41e5-9821-24c325b05b52",
            username: "Sarah Johnson",
          },
          { id: "4e518f6a-86a7-4c4d-b7e1-f5b4c4c1fc55", username: "David Lee" },
          {
            id: "b3b631d2-4d8b-46dc-97af-b08e5be4ff49",
            username: "Emily Davis",
          },
          {
            id: "5b2d5b48-0a5e-496f-b148-c86cc6e58c92",
            username: "James Wilson",
          },
        ],
        likeCount: 4,
        commentCount: 2,
        shareCount: 1,
        comments: [
          {
            username: "Sarah Johnson",
            id: "f1f64d5f-75f5-4b71-8dcb-e4c45da743b7",
            profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
            comment: "Amazing achievement! Well done!",
          },
          {
            username: "David Lee",
            id: "947db3c7-2252-4b18-9e4b-2b86c1d15b45",
            profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
            comment: "So proud of you!",
          },
        ],
        id: "f654450b-2b03-4e71-b64f-6dc5e44f7e36",
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
            id: "1f90e2af-7424-4f95-9e58-ffb6f1e03c5a",
            username: "Emma Thompson",
          },
          {
            id: "bbfd6f80-5713-42e5-b1f3-6b8cde8e34b3",
            username: "Liam Garcia",
          },
        ],
        likeCount: 2,
        commentCount: 0,
        shareCount: 0,
        comments: [],
        id: "ad78e378-e0c5-46aa-8d0d-1a1e5d8e7c73",
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
            id: "2f907b0d-b43e-47b3-9ac6-e7746d60b724",
            username: "Sophia Chen",
          },
          {
            id: "7afddf1a-1eb1-4c47-98fa-00bb0e5aa48f",
            username: "Ryan Patel",
          },
          {
            id: "38f33c60-d63d-4de1-b128-b59cbab9e8b5",
            username: "Mia Johnson",
          },
          {
            id: "cba5174f-f4f5-4c94-b9af-3c63a36a06f2",
            username: "Noah Williams",
          },
          { id: "4b3dca5b-82d8-4b0e-bf88-d12177d6cc29", username: "Ava Brown" },
        ],
        likeCount: 5,
        commentCount: 1,
        shareCount: 2,
        comments: [
          {
            username: "Sophie Chen",
            id: "2679b5c9-f90e-4373-bb7e-582307495e4e",
            profilePicture: "https://randomuser.me/api/portraits/women/79.jpg",
            comment: "The Rockies are beautiful!",
          },
        ],
        id: "885d54a4-c045-4c49-a6fc-ea705eb0d3af",
      },

      {
        username: "Emma Wilson",
        profilePicture: "https://randomuser.me/api/portraits/women/59.jpg",
        timePosted: "4 days ago",
        description:
          "Celebrating my graduation! Four years of hard work finally paid off.",
        image: "https://picsum.photos/id/45/800/600",
        likeIcons: [],
        usersWhoLiked: [
          {
            id: "89761c7c-450b-4b89-a25f-081823a935bc",
            username: "Oliver Brown",
          },
          {
            id: "c6fc2e58-2e31-4b72-9c5e-7a6c95e58c6d",
            username: "Isabella Martinez",
          },
          {
            id: "1fd8570e-41f4-4ec5-8df2-d7c69c185227",
            username: "Ethan Wilson",
          },
          {
            id: "fa0a63c4-254c-4474-855c-f8473d1e143b",
            username: "Liam Johnson",
          },
        ],
        likeCount: 6,
        commentCount: 1,
        shareCount: 1,
        comments: [
          {
            username: "Liam Johnson",
            id: "b59d0cc3-8e0a-4bb5-b1ba-b370e51aeb73",
            profilePicture: "https://randomuser.me/api/portraits/men/12.jpg",
            comment: "Congratulations on your graduation!",
          },
        ],
        id: "a9b5e564-6071-47ea-8ae6-b6cd062d9118",
      },
    ];
  }, []);

  const initialVideos: Videos[] = useMemo(() => {
    return [
      {
        video:
          "https://videos.pexels.com/video-files/8953675/8953675-uhd_1440_2560_30fps.mp4",
        timePosted: "October 24 at 1:20 PM",
        likeCount: 34,
        commentCount: 10,
        viewCount: 100,
        usersWhoLiked: [
          { username: "Victoria Primo", id: "l23$fkj5%kdsfJkL" },
          { username: "John Doe", id: "a12$ghj7&kdkfQs1" },
          { username: "Emma Watson", id: "z23$kfd8%jdfkLm9" },
        ],
        comments: [
          {
            username: "Alex Smith",
            profilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
            comment: "Great video!",
            id: "c1&f4h$Kd8jTq",
          },
          {
            username: "Lily Brown",
            profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
            comment: "I learned a lot from this!",
            id: "c2%h3r&8jDfQ9",
          },
        ],
        username: "Alice Wonderland",
        profilePicture: "https://randomuser.me/api/portraits/women/2.jpg",
        userId: "user123&kL3#Yg6",
        id: "video1$hJ4m%Pz8x",
      },
      {
        video:
          "https://videos.pexels.com/video-files/28951846/12526759_360_640_60fps.mp4",
        timePosted: "10 hours ago",
        likeCount: 18,
        commentCount: 5,
        viewCount: 100,
        usersWhoLiked: [
          { username: "Emily Clark", id: "m56$gjh8&lskdQz8" },
          { username: "Michael Johnson", id: "h78$fgd3&lkdsM8x" },
        ],
        comments: [
          {
            username: "Sarah Connor",
            profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
            comment: "This is awesome!",
            id: "c3!dF4$Lh2*jRf",
          },
          {
            username: "Tom Hardy",
            profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
            comment: "Thanks for sharing!",
            id: "c4%rT5#Kp8*vL9",
          },
          {
            username: "Robert Downey",
            profilePicture: "https://randomuser.me/api/portraits/men/3.jpg",
            comment: "Can you make more like this?",
            id: "c5&vW9#Fs3*jL5",
          },
        ],
        username: "John Doe",
        profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
        userId: "user456*Zg4#Df9",
        id: "video2^dR6k@X8!Hj2",
      },
      {
        video:
          "https://videos.pexels.com/video-files/28346004/12363907_640_360_30fps.mp4",
        timePosted: "Yesterday at 3:15 PM",
        likeCount: 25,
        commentCount: 8,
        viewCount: 100,
        usersWhoLiked: [
          { username: "Alice Wonderland", id: "a45$dsh2&fkjdLp9" },
          { username: "Peter Parker", id: "j67$lkj4&dlfjQk3" },
          { username: "Bruce Wayne", id: "g90$kjh5&lkfM2y1" },
          { username: "Clark Kent", id: "e12$hfd7&kjdsN5t" },
        ],
        comments: [
          {
            username: "Diana Prince",
            profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
            comment: "Amazing content!",
            id: "c6&gH7$Kj4*jWq8",
          },
          {
            username: "Tony Stark",
            profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
            comment: "Very informative!",
            id: "c7%fR2#Wb9*mLp3",
          },
          {
            username: "Natasha Romanoff",
            profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
            comment: "Keep it up!",
            id: "c8*R9$Wq6&hF5jN",
          },
        ],
        username: "Emma Watson",
        profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
        userId: "user789!Gh5%Lp1",
        id: "video3&Qf4#Wr8^Zj6",
      },

      {
        video:
          "https://videos.pexels.com/video-files/6606215/6606215-sd_960_506_24fps.mp4",
        timePosted: "Yesterday at 3:15 PM",
        likeCount: 25,
        commentCount: 8,
        viewCount: 100,
        usersWhoLiked: [
          { username: "Alice Wonderland", id: "a45$dsh2&fkjdLp9" },
          { username: "Peter Parker", id: "j67$lkj4&dlfjQk3" },
          { username: "Bruce Wayne", id: "g90$kjh5&lkfM2y1" },
          { username: "Clark Kent", id: "e12$hfd7&kjdsN5t" },
        ],
        comments: [
          {
            username: "Diana Prince",
            profilePicture: "https://randomuser.me/api/portraits/women/4.jpg",
            comment: "Amazing content!",
            id: "c6&gH7$Kj4*jWq8",
          },
          {
            username: "Tony Stark",
            profilePicture: "https://randomuser.me/api/portraits/men/5.jpg",
            comment: "Very informative!",
            id: "c7%fR2#Wb9*mLp3",
          },
          {
            username: "Natasha Romanoff",
            profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
            comment: "Keep it up!",
            id: "c8*R9$Wq6&hF5jN",
          },
        ],
        username: "Emma Watson",
        profilePicture: "https://randomuser.me/api/portraits/women/6.jpg",
        userId: "user789!Gh5%Lp1",
        id: "video3&Qf4#Wr8^Zj6",
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

  useEffect(() => {
    setVideos(initialVideos);
  }, [initialVideos]);

  const [posts, setPosts] = useState<Posts[] | Videos[]>(initialPosts);
  const [videos, setVideos] = useState(initialVideos);
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
    console.log("Posts array:", posts);
  }, [posts]);

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
                posts={posts}
                setPosts={setPosts}
              ></Home>
            }
          ></Route>
          <Route
            path="/video"
            element={
              <Video
                videos={videos}
                setVideos={setVideos}
                user={currentUser}
              ></Video>
            }
          ></Route>
          <Route path="/marketplace"></Route>
          <Route path="/groups"></Route>
          <Route path="/games"></Route>
          <Route path="/create-account"></Route>
          <Route
            path="/posts/:id"
            element={
              <PostDetail
                posts={posts}
                setPosts={setPosts}
                setCurrentUser={setCurrentUser}
                users={users}
                setIsAuthenticated={setIsAuthenticated}
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
