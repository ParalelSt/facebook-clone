import "Content/Video/LeftContent/VideoLeftSideNav.scss";
import ContentContainer from "Global/components/ContentContainer/ContentContainer";

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
      <div className="video-left-side-nav-middle"></div>
      <div className="video-left-side-nav-bottom"></div>
    </ContentContainer>
  );
};

export default VideoLeftSideNav;
