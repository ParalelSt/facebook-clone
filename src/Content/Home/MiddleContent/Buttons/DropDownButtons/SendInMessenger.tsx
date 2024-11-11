import "Content/Home/MiddleContent/Buttons/DropDownButtons/DropDownButtons.scss";
import { RiMessengerLine } from "react-icons/ri";

const SendInMessenger = () => {
  return (
    <div className="share-to-feed-button drop-down-btn">
      <RiMessengerLine />
      <span>Share in Messenger</span>
    </div>
  );
};

export default SendInMessenger;
