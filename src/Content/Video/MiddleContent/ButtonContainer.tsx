import LikeButton from "Content/Home/MiddleContent/Buttons/LikeButton";
import { Users } from "App";
import CommentButton from "Content/Home/MiddleContent/Buttons/CommentButton";
import ShareButton from "Content/Home/MiddleContent/Buttons/ShareButton";
import "Content/Video/MiddleContent/ButtonContainer.scss";
import { Post } from "Content/PostTypes";
import { useCommentButtonLogic } from "Content/Home/MiddleContent/Buttons/CommentButtonLogic";
import { useRef } from "react";

interface ButtonContainerProps {
  className?: string;
  setVideos: React.Dispatch<React.SetStateAction<Post[]>>;
  video: Post;
  user: Users | null;
}

const ButtonContainer = ({
  className,
  video,
  setVideos,
  user,
}: ButtonContainerProps) => {
  const commentInputRef = useRef<{ [postId: string]: HTMLInputElement | null }>(
    {}
  );

  const [handleCommentButtonToggle] = useCommentButtonLogic(commentInputRef);

  return (
    <div className={`button-container ${className}`}>
      <LikeButton post={video} setPosts={setVideos} user={user}></LikeButton>
      <CommentButton
        setCommentButtonsActive={() => handleCommentButtonToggle(video.id)}
      ></CommentButton>
      <ShareButton post={video}></ShareButton>
    </div>
  );
};

export default ButtonContainer;
