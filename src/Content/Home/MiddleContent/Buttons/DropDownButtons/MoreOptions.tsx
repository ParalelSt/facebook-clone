import "Content/Home/MiddleContent/Buttons/DropDownButtons/DropDownButtons.scss";
import { BsPencilSquare } from "react-icons/bs";

const MoreOptions = () => {
  return (
    <div className="more-options-button drop-down-btn">
      <BsPencilSquare />
      <span>More options</span>
    </div>
  );
};

export default MoreOptions;
