import { CgClose } from "react-icons/cg";
import "Global/components/Image Carousel/CloseButton.scss";
import { useNavigate } from "react-router-dom";

interface CloseButtonProps {
  className?: string;
}

const CloseButton = ({ className }: CloseButtonProps) => {
  const Navigate = useNavigate();

  const handleCloseBtnClick = () => {
    Navigate("/");
  };

  return (
    <>
      <div
        className={`close-button-container item-container ${className}`}
        onClick={() => handleCloseBtnClick()}
      >
        <CgClose></CgClose>
      </div>
    </>
  );
};

export default CloseButton;
