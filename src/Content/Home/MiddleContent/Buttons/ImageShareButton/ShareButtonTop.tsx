import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import CloseButton from "Content/Home/MiddleContent/Buttons/ImageShareButton/CloseButton";

interface ShareButtonTopProps {
  closeFunction: (event: React.MouseEvent) => void;
}

const ShareButtonTop = ({ closeFunction }: ShareButtonTopProps) => {
  return (
    <div className="share-button-drop-down-top">
      <h3>Send to</h3>
      <CloseButton closeFunction={closeFunction} />
    </div>
  );
};

export default ShareButtonTop;
