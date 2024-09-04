import Accordion from "../../../../Global/components/Accordion";
import "./LeftNavSide.scss";

function LeftNavSide() {
  return (
    <>
      <div className="container">
        <div className="top-container">
          <div className="item-container">
            <img src="/images/ProfilePicture.jpg" />
            <span className="title">Aron Matoić</span>
          </div>

          <div className="item-container">
            <img src="/icons/GroupI.svg" />
            <span className="title">Friends</span>
          </div>

          <div className="item-container">
            <img src="/icons/HistoryI.svg" />
            <span className="title">Memories</span>
          </div>

          <div className="item-container">
            <img src="/icons/SavedI.svg" />
            <span className="title">Saved</span>
          </div>

          <div className="item-container">
            <img src="/icons/GroupsI.svg" />
            <span className="title">Groups</span>
          </div>

          <div className="item-container">
            <img src="/icons/VideoI.svg" />
            <span className="title">Video</span>
          </div>

          <Accordion title={""}></Accordion>
        </div>
        <div className="bottom-container"></div>
      </div>
    </>
  );
}

export default LeftNavSide;
