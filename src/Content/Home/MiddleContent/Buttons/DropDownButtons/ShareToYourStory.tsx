import "Content/Home/MiddleContent/Buttons/DropDownButtons/DropDownButtons.scss";
import { LuPlusCircle } from "react-icons/lu";

const ShareToYourStory = () => {
  return (
    <div className="share-to-your-story-button drop-down-btn">
      <LuPlusCircle />
      <span>Share to your story (Friends)</span>
    </div>
  );
};

export default ShareToYourStory;
