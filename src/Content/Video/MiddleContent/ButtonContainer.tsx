import LikeButton from "Content/Home/MiddleContent/LikeButton";
import { Users } from "App";
import CommentButton from "Content/Home/MiddleContent/CommentButton";
import CopyButton from "Content/Home/MiddleContent/CopyButton";
import ShareButton from "Content/Home/MiddleContent/ShareButton";
import "Content/Video/MiddleContent/ButtonContainer.scss";
import { Post } from "Content/PostTypes";

interface ButtonContainerProps {
  className?: string;
  setVideos: React.Dispatch<React.SetStateAction<Post[]>>;
  video: Post;
  user: Users | null;
  commentButtonToggle?: (postId: string) => void;
}

const ButtonContainer = ({
  className,
  video,
  setVideos,
  user,
  commentButtonToggle,
}: ButtonContainerProps) => {
  return (
    <div className={`button-container ${className}`}>
      <LikeButton post={video} setPosts={setVideos} user={user}></LikeButton>
      <CommentButton
        setCommentButtonsActive={() =>
          commentButtonToggle ? commentButtonToggle(video.id) : null
        }
      ></CommentButton>
      <CopyButton post={video}></CopyButton>
      <ShareButton></ShareButton>
    </div>
  );
};

export default ButtonContainer;
