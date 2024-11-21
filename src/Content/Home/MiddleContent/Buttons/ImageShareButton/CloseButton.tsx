import "Content/Home/MiddleContent/Buttons/ImageShareButton/CloseButton.scss";
import { CgClose } from "react-icons/cg";

interface CloseButtonProps {
  closeFunction: (event: React.MouseEvent) => void;
}

const CloseButton = ({ closeFunction }: CloseButtonProps) => {
  return (
    <div className="close-btn-container" onClick={closeFunction}>
      <CgClose />
    </div>
  );
};

export default CloseButton;
