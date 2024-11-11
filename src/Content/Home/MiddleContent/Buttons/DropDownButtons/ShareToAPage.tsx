import "Content/Home/MiddleContent/Buttons/DropDownButtons/DropDownButtons.scss";
import { FaRegFlag } from "react-icons/fa6";

const ShareToAPage = () => {
  return (
    <div className="share-to-a-page-button drop-down-btn">
      <FaRegFlag />
      <span>Share to a Page</span>
    </div>
  );
};

export default ShareToAPage;
