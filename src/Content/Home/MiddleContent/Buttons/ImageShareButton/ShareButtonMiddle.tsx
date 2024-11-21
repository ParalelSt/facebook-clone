import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";

const ShareButtonMiddle = () => {
  return (
    <div className="share-button-drop-down-middle">
      <div className="share-button-drop-down-middle-input">
        <div className="share-button-drop-down-middle-input-icon">
          <FaMagnifyingGlass />
        </div>
        <input type="text" placeholder="Search for people and groups" />
      </div>
    </div>
  );
};

export default ShareButtonMiddle;
