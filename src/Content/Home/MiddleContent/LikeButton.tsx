import { AiOutlineLike } from "react-icons/ai";
import { Posts } from "Content/Home/MiddleContent/MiddleContent";
import { Users } from "App";
import useLikeButtonLogic from "./LikeButtonLogic";
import { Videos } from "Content/Video/Video";
import "Content/Home/MiddleContent/LikeButton.scss";

interface LikeButtonProps {
  post: Posts | Videos;
  setPosts: React.Dispatch<React.SetStateAction<(Posts | Videos)[]>>;
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
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id === post.id) {
          return {
            ...p,
            likeCount: newIsLiked ? p.likeCount + 1 : p.likeCount - 1,
            usersWhoLiked: newIsLiked
              ? [
                  ...p.usersWhoLiked,
                  { id: currentUser?.id, username: currentUser?.user },
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
