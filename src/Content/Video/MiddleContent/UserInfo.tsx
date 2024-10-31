import { Videos } from "../Video";
import FollowButton from "./FollowButton";
import "Content/Video/MiddleContent/UserInfo.scss";

interface UserInfoProps {
  video: Videos;
}

const UserInfo = ({ video }: UserInfoProps) => {
  return (
    <div className="user-info-container" key={video.id}>
      <div className="user-info-left">
        <img src={video.profilePicture} alt="profile picture" />
      </div>
      <div className="user-info-right">
        <div className="user-info-right-top">
          <span className="username">{video.username}</span>
          <FollowButton></FollowButton>
        </div>
        <div className="user-info-right-bottom">
          <span className="time-posted">{video.timePosted}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
