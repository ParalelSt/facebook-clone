import { AiOutlineLike } from "react-icons/ai";
import useLikeButtonLogic from "./LikeButtonLogic";
import { Posts } from "./MiddleContent";

interface LikeButtonProps {
  post: Posts;
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
}

const LikeButton = ({ post, setPosts }: LikeButtonProps) => {
  const [handleLikeToggle, isLiked] = useLikeButtonLogic();

  return (
    <button
      className={`like-btn ${isLiked ? "liked" : ""}`}
      onClick={() => handleLikeToggle()}
    >
      <AiOutlineLike />
      <span>Like</span>
    </button>
  );
};

export default LikeButton;
