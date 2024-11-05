export interface BasePost {
  id: string;
  username: string;
  profilePicture: string;
  timePosted: string;
  likeCount: number;
  commentCount: number;
  usersWhoLiked: { username: string; id: string }[];
  comments: {
    username: string;
    profilePicture: string;
    id: string;
    comment: string;
  }[];
}

export interface ImagePost extends BasePost {
  type: "image";
  image: string;
  description: string;
  likeIcons: string[];
  shareCount: number;
}

export interface VideoPost extends BasePost {
  type: "video";
  video: string;
  userId: string;
  viewCount: number;
}

export type Post = ImagePost | VideoPost;

export interface User {
  user: string;
  profilePicture: string;
  email: string;
  phoneNumber: string;
  password: string;
  likedPosts: string[];
  id: string;
}

export interface Videos {
  video: string;
  timePosted: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  usersWhoLiked: { username: string; id: string }[];
  comments: {
    username: string;
    profilePicture: string;
    comment: string;
    id: string;
  }[];
  username: string;
  profilePicture: string;
  userId: string;
  id: string;
}

export interface Posts {
  username: string;
  profilePicture: string;
  timePosted: string;
  description: string;
  image: string;
  likeIcons: string[];
  usersWhoLiked: { username: string; id: string }[];
  likeCount: number;
  commentCount: number;
  shareCount: number;
  comments: {
    username: string;
    profilePicture: string;
    id: string;
    comment: string;
  }[];
  id: string;
}
