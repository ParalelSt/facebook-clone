import LikeButton from "Content/Home/MiddleContent/LikeButton";
import { Videos } from "../Video";
import { Users } from "App";

interface ButtonContainerProps {
  className?: string;
  setVideos: React.Dispatch<React.SetStateAction<Videos[]>>;
  video: Videos;
  user: Users | null;
}

const ButtonContainer = ({
  className,
  video,
  setVideos,
  user,
}: ButtonContainerProps) => {
  return (
    <div className={`button-container ${className}`}>
      <LikeButton post={video} setPosts={setVideos} user={user}></LikeButton>
    </div>
  );
};

export default ButtonContainer;
