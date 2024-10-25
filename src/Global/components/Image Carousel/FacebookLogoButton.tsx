import { FaFacebook } from "react-icons/fa6";
import "Global/components/Image Carousel/FacebookLogo.scss";

const FacebookLogoButton = () => {
  return (
    <div className="facebook-logo-button-container item-container facebook-logo-color">
      <FaFacebook color="#0866ff" size={32} />
    </div>
  );
};

export default FacebookLogoButton;
