import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import { FaFacebookMessenger } from "react-icons/fa6";

const ShareButtonBottom = () => {
  return (
    <div className="share-button-drop-down-bottom">
      <div className="share-button-drop-down-bottom-input">
        <input type="text" placeholder="Add an optional message here..." />
      </div>
      <div className="share-button-drop-down-bottom-button-container">
        <div className="share-button-drop-down-bottom-icon-container">
          <FaFacebookMessenger />
        </div>
        <h4 className="share-button-drop-down-bottom-button-text">Send</h4>
      </div>
    </div>
  );
};

export default ShareButtonBottom;
