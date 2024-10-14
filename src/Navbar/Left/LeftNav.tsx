import { useLocation, useNavigate } from "react-router-dom";
import { useHandleName } from "Global/hooks/useHandleName";
import "Navbar/Left/LeftNav.scss";
import SearchInput from "Navbar/Left/SearchInput";

function LeftNav() {
  const currentPath = useLocation().pathname;
  const placeholder = useHandleName(currentPath);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="left-nav">
      <div className="logo-container" onClick={handleNavigate}>
        <img src="/images/FacebookLogo.svg" alt="Facebook Logo" />
      </div>
      <SearchInput placeholder={placeholder}></SearchInput>
    </div>
  );
}

export default LeftNav;
