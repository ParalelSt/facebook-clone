import { PiShareFatLight } from "react-icons/pi";
import "Content/Home/MiddleContent/ShareButton.scss";

const ShareButton = () => {
  return (
    <button className="share-btn btn">
      <PiShareFatLight />
      <span>Share</span>
    </button>
  );
};

export default ShareButton;
