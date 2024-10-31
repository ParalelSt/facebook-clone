import { Videos } from "Content/Video/Video";
import "Content/Video/MiddleContent/VideoPlayer.scss";

interface VideoPlayerProps {
  video: Videos;
}

const Videoplayer = ({ video }: VideoPlayerProps) => {
  return (
    <div className="video-player">
      <div className="video-container" key={video.id}>
        <video className="video" controls>
          <source src={video.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Videoplayer;
