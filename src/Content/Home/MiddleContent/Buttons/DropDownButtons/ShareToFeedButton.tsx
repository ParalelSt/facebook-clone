import "Content/Home/MiddleContent/Buttons/DropDownButtons/DropDownButtons.scss";
import { BsPencilSquare } from "react-icons/bs";

const ShareToFeedButton = () => {
  return (
    <div className="share-to-feed-button drop-down-btn">
      <BsPencilSquare />
      <span>Share to Feed</span>
    </div>
  );
};

export default ShareToFeedButton;
