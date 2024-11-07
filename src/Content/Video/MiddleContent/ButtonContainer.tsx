import LikeButton from "Content/Home/MiddleContent/LikeButton";
import { Users } from "App";
import CommentButton from "Content/Home/MiddleContent/CommentButton";
import ShareButton from "Content/Home/MiddleContent/ShareButton";
import "Content/Video/MiddleContent/ButtonContainer.scss";
import { Post } from "Content/PostTypes";
import { useCommentButtonLogic } from "Content/Home/MiddleContent/CommentButtonLogic";
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
      <ShareButton></ShareButton>
    </div>
  );
};

export default ButtonContainer;
