import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import "./Video.scss";
import "Global/GlobalStyles.scss";
import Videoplayer from "./MiddleContent/Videoplayer";
import UserInfo from "./MiddleContent/UserInfo";

export interface Videos {
  video: string;
  timePosted: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
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
}

const Video = ({ videos }: VideoProps) => {
  return (
    <div className="video-wrapper">
      {videos.map((video) => {
        return (
          <ContentContainer className="video-content-container">
            <UserInfo video={video}></UserInfo>
            <Videoplayer video={video}></Videoplayer>
          </ContentContainer>
        );
      })}
    </div>
  );
};

export default Video;
