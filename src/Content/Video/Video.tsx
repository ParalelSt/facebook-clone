import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import "./Video.scss";
import "Global/GlobalStyles.scss";
import Videoplayer from "./MiddleContent/Videoplayer";
import UserInfo from "./MiddleContent/UserInfo";
import ButtonContainer from "./MiddleContent/ButtonContainer";
import { Users } from "App";
import StatisticsDisplay from "./MiddleContent/StatisticsDisplay";
import { useNavigate } from "react-router-dom";
import { BasePost } from "Content/Home/MiddleContent/PostDetail";

export interface Videos extends BasePost {
  video: string;
  timePosted: string;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  usersWhoLiked: { username: string; id: string }[];
  comments: {
    username: string;
    profilePicture: string;
    comment: string;
    id: string;
  }[];
  username: string;
  profilePicture: string;
  userId: string;
  id: string;
}

interface VideoProps {
  videos: Videos[];
  setVideos: React.Dispatch<React.SetStateAction<Videos[]>>;
  user: Users | null;
}

const Video = ({ videos, setVideos, user }: VideoProps) => {
  const navigate = useNavigate();

  const handleCommentButtonToggle = (videoId: string) => {
    navigate("");
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
              commentButtonToggle={handleCommentButtonToggle}
            ></ButtonContainer>
            <StatisticsDisplay
              likeCount={video.likeCount}
              peopleWhoLiked={video.usersWhoLiked}
              commentCount={video.commentCount}
              comments={video.comments}
              viewCount={video.viewCount}
            ></StatisticsDisplay>
          </ContentContainer>
        );
      })}
    </div>
  );
};

export default Video;
