import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import "./Video.scss";
import "Global/GlobalStyles.scss";
import Videoplayer from "./MiddleContent/Videoplayer";
import UserInfo from "./MiddleContent/UserInfo";
import ButtonContainer from "./MiddleContent/ButtonContainer";
import { Users } from "App";
import StatisticsDisplay from "./MiddleContent/StatisticsDisplay";
import { useNavigate } from "react-router-dom";
import { Post } from "Content/PostTypes";

interface VideoProps {
  videos: Post[];
  setVideos: React.Dispatch<React.SetStateAction<Post[]>>;
  user: Users | null;
}

const Video = ({ videos, setVideos, user }: VideoProps) => {
  const navigate = useNavigate();

  const handleCommentButtonToggle = (videoId: string) => {
    navigate(`posts/${videoId}`);
  };

  return (
    <div className="video-wrapper">
      {videos.map((video) => {
        return (
          <ContentContainer className="video-content-container">
            <UserInfo video={video}></UserInfo>
            <Videoplayer video={video}></Videoplayer>
            <ButtonContainer
              setVideos={setVideos}
              video={video}
              user={user}
              commentButtonToggle={() => handleCommentButtonToggle(video.id)}
            ></ButtonContainer>
            <StatisticsDisplay
              likeCount={video.likeCount}
              peopleWhoLiked={video.usersWhoLiked}
              commentCount={video.commentCount}
              comments={video.comments}
              viewCount={video.type === "video" ? video.viewCount : 0}
            ></StatisticsDisplay>
          </ContentContainer>
        );
      })}
    </div>
  );
};

export default Video;
