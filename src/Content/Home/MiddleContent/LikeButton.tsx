import { AiOutlineLike } from "react-icons/ai";
import { Posts } from "Content/Home/MiddleContent/MiddleContent";
import { Users } from "App";
import useLikeButtonLogic from "./LikeButtonLogic";

interface LikeButtonProps {
  post: Posts;
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  user: Users | null;
}

const LikeButton = ({ user, post, setPosts }: LikeButtonProps) => {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;
  const initialLikeState = post.usersWhoLiked.some(
    (likedUser) => likedUser.id === user?.id
  );
  const [handleLikeToggle, isLiked] = useLikeButtonLogic(initialLikeState);

  const handleLikeButtonClick = () => {
    const newIsLiked = !isLiked;
    handleLikeToggle();

    setPosts((prevPosts) => {
      return prevPosts.map((p) => {
        if (p.id === post.id) {
          const updatedLikeCount = newIsLiked
            ? p.likeCount + 1
            : p.likeCount - 1;
          const updatedUsersWhoLiked = newIsLiked
            ? [
                ...p.usersWhoLiked,
                { id: currentUser.id, username: currentUser.user },
              ]
            : p.usersWhoLiked.filter((user) => user.id !== currentUser.id);

          return {
            ...p,
            likeCount: updatedLikeCount,
            usersWhoLiked: updatedUsersWhoLiked,
          };
        }
        return p;
      });
    });
  };

  return (
    <button
      className={`like-btn ${isLiked ? "liked" : ""}`}
      onClick={handleLikeButtonClick}
    >
      <AiOutlineLike />
      <span className="button-text">Like</span>
    </button>
  );
};

export default LikeButton;
