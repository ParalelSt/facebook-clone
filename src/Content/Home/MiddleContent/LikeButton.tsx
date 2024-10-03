import { AiOutlineLike } from "react-icons/ai";
import useLikeButtonLogic from "./LikeButtonLogic";
import { Posts } from "./MiddleContent";
import { Users } from "../../../App";

interface LikeButtonProps {
  post: Posts;
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  user: Users | null;
}

const LikeButton = ({ user, post, setPosts }: LikeButtonProps) => {
  const [handleLikeToggle, isLiked] = useLikeButtonLogic();

  const handleLike = () => {
    handleLikeToggle();

    if (!user) return;

    const likedPosts = user.likedPosts || [];

    const isPostLiked = user?.likedPosts.includes(post.id);

    const updatedLikedPosts = isPostLiked
      ? likedPosts.filter((p) => p !== post.id)
      : [...likedPosts, post.id];

    const updatedUsersWhoLiked = isPostLiked
      ? post.usersWhoLiked.filter((likedUser) => likedUser.id !== user.id)
      : [...post.usersWhoLiked, { username: user.user, id: user.id }];

    const updatedUser = { likedPosts: updatedLikedPosts };

    const updatedLikeCount = isPostLiked
      ? post.likeCount - 1
      : post.likeCount + 1;

    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id
          ? {
              ...p,
              usersWhoLiked: updatedUsersWhoLiked,
              likeCount: updatedLikeCount,
            }
          : p
      )
    );

    console.log(updatedUser, updatedUsersWhoLiked);
  };

  return (
    <button
      className={`like-btn ${isLiked ? "liked" : ""}`}
      onClick={() => handleLike()}
    >
      <AiOutlineLike />
      <span>Like</span>
    </button>
  );
};

export default LikeButton;
