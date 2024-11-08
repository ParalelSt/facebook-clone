import { CgClose } from "react-icons/cg";
import "Global/components/Image Carousel/CloseButton.scss";
import { useNavigate } from "react-router-dom";

interface CloseButtonProps {
  className?: string;
  URL?: string;
}

const CloseButton = ({ className, URL }: CloseButtonProps) => {
  const navigate = useNavigate();

  const handleCloseBtnClick = () => {
    if (URL) {
      navigate(URL);
    } else {
      navigate(-1);
    }
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
