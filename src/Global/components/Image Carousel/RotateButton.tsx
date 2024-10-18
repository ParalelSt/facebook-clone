import { RxRotateCounterClockwise } from "react-icons/rx";
import "Global/components/Image Carousel/RotateButton.scss";

const RotateButton = () => {
  return (
    <button className="rotate-button">
      <RxRotateCounterClockwise />
      <span>Rotate</span>
    </button>
  );
};

export default RotateButton;
