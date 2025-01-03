import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import "./Video.scss";
import "Global/GlobalStyles.scss";
import Videoplayer from "./MiddleContent/Videoplayer";
import UserInfo from "./MiddleContent/UserInfo";
import ButtonContainer from "./MiddleContent/ButtonContainer";
import { Users } from "App";
import StatisticsDisplay from "./MiddleContent/StatisticsDisplay";
import { ImagePost, VideoPost } from "Content/PostTypes";
import VideoLeftSideNav from "./LeftContent/VideoLeftSideNav";

interface VideoProps {
  videos: (VideoPost | ImagePost)[];
  setVideos: React.Dispatch<React.SetStateAction<(VideoPost | ImagePost)[]>>;
  user: Users | null;
}

const Video = ({ videos, setVideos, user }: VideoProps) => {
  return (
    <div className="video-container">
      <VideoLeftSideNav></VideoLeftSideNav>
      <div className="video-wrapper">
        {videos.map((post) => {
          if ((post as VideoPost).video) {
            return (
              <ContentContainer className="video-content-container">
                <UserInfo video={post}></UserInfo>
                <Videoplayer post={post as VideoPost}></Videoplayer>
                <div className="bottom-info">
                  <ButtonContainer
                    setVideos={setVideos}
                    video={post}
                    user={user}
                  ></ButtonContainer>
                  <StatisticsDisplay
                    likeCount={post.likeCount}
                    peopleWhoLiked={post.usersWhoLiked}
                    commentCount={post.commentCount}
                    comments={post.comments}
                    viewCount={post.type === "video" ? post.viewCount : 0}
                    post={post}
                  ></StatisticsDisplay>
                </div>
              </ContentContainer>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Video;
