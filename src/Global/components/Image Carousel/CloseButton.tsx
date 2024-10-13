import { CgClose } from "react-icons/cg";
import "Global/components/Image Carousel/CloseButton.scss";
import { useNavigate } from "react-router-dom";

const CloseButton = () => {
  const Navigate = useNavigate();

  const handleCloseBtnClick = () => {
    Navigate("/");
  };

  return (
    <>
      <div
        className="close-button-container item-container"
        onClick={() => handleCloseBtnClick()}
      >
        <CgClose></CgClose>
      </div>
    </>
  );
};

export default CloseButton;
