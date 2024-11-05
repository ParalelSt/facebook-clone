import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import useLikeButtonLogic from "./LikeButtonLogic";
import { Post, User } from "Content/PostTypes";
import "Content/Home/MiddleContent/LikeButton.scss";

interface LikeButtonProps {
  post: Post;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  user: User | null;
}

const LikeButton: React.FC<LikeButtonProps> = ({ user, post, setPosts }) => {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  ) as User | null;

  const initialLikeState = post.usersWhoLiked.some(
    (likedUser) => likedUser.id === user?.id
  );
  const [handleLikeToggle, isLiked] = useLikeButtonLogic(initialLikeState);

  const handleLikeButtonClick = () => {
    const newIsLiked = !isLiked;
    handleLikeToggle();
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id === post.id) {
          return {
            ...p,
            likeCount: newIsLiked ? p.likeCount + 1 : p.likeCount - 1,
            usersWhoLiked: newIsLiked
              ? [
                  ...p.usersWhoLiked,
                  {
                    id: currentUser?.id || "",
                    username: currentUser?.user || "",
                  },
                ]
              : p.usersWhoLiked.filter((user) => user.id !== currentUser?.id),
          };
        }
        return p;
      })
    );
  };

  return (
    <button
      className={`like-btn btn ${isLiked ? "liked" : ""}`}
      onClick={handleLikeButtonClick}
    >
      <AiOutlineLike />
      <span className="button-text">Like</span>
    </button>
  );
};

export default LikeButton;
