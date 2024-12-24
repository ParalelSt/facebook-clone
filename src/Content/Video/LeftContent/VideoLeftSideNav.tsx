import "Content/Video/LeftContent/VideoLeftSideNav.scss";
import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import { FaBookmark, FaRocket } from "react-icons/fa6";
import { MdOutlineMovieCreation } from "react-icons/md";
import { PiMonitorPlay } from "react-icons/pi";
import { RiClapperboardFill, RiLiveFill } from "react-icons/ri";

const VideoLeftSideNav = () => {
  return (
    <ContentContainer className="video-left-side-nav">
      <div className="video-left-side-nav-top">
        <div className="video-left-side-nav-top-top">
          <h3>Video</h3>
          <button className="settings"></button>
        </div>
        <div className="video-left-side-nav-top-bottom">
          <div className="search-videos-input">
            <input type="text" placeholder="Search videos" />
          </div>
        </div>
      </div>
      <div className="video-left-side-nav-middle">
        <div className="vide-left-side-nav-middle-button">
          <PiMonitorPlay />
          <span>Home</span>
        </div>
        <div className="vide-left-side-nav-middle-button">
          <RiLiveFill />
          <span>Live</span>
        </div>
        <div className="vide-left-side-nav-middle-button">
          <RiClapperboardFill />
          <span>Reels</span>
        </div>
        <div className="vide-left-side-nav-middle-button">
          <MdOutlineMovieCreation />
          <span>Shows</span>
        </div>
        <div className="vide-left-side-nav-middle-button">
          <FaRocket />
          <span>Explore</span>
        </div>
        <div className="vide-left-side-nav-middle-button">
          <FaBookmark />
          <span>Saved Videos</span>
        </div>
      </div>
      <div className="video-left-side-nav-bottom"></div>
    </ContentContainer>
  );
};

export default VideoLeftSideNav;
