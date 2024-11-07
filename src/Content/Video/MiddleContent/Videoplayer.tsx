import { VideoPost } from "Content/PostTypes";
import "Content/Video/MiddleContent/VideoPlayer.scss";
import { useEffect, useRef, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

interface VideoPlayerProps {
  post: VideoPost;
}

const Videoplayer = ({ post }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoSize, setVideoSize] = useState<number | undefined>(650);

  useEffect(() => {
    if (isVisible) {
      videoRef.current?.play();
    } else if (videoRef.current?.play) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  const handleVideoResolution = () => {
    const currentVideoWidth = videoRef.current?.videoWidth ?? 650;
    setVideoSize(currentVideoWidth < 650 ? 650 : currentVideoWidth);
  };

  return (
    <div className="video-player">
      <div className="video-container" key={post.id}>
        <ReactVisibilitySensor
          onChange={(isVisible: boolean) => setIsVisible(isVisible)}
        >
          <video
            className="video"
            ref={videoRef}
            controls
            onLoadedMetadata={handleVideoResolution}
            style={{ width: videoSize }}
          >
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ReactVisibilitySensor>
      </div>
    </div>
  );
};

export default Videoplayer;
