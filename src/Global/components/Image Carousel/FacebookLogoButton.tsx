import { FaFacebook } from "react-icons/fa6";
import "Global/components/Image Carousel/FacebookLogo.scss";
import { useNavigate } from "react-router-dom";

const FacebookLogoButton = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="facebook-logo-button-container item-container facebook-logo-color">
      <FaFacebook color="#0866ff" size={32} onClick={handleNavigateToHome} />
    </div>
  );
};

export default FacebookLogoButton;
