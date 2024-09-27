import { AiOutlineLike } from "react-icons/ai";
import useLikeButtonLogic from "./LikeButtonLogic";
import { Posts } from "./MiddleContent";

interface LikeButtonProps {
  post: Posts;
}

const LikeButton = ({ post }: LikeButtonProps) => {
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
