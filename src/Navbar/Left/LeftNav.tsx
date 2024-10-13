import { useLocation, useNavigate } from "react-router-dom";
import { useHandleName } from "Global/hooks/useHandleName";
import "Navbar/Left/LeftNav.scss";
import SearchInput from "Navbar/Left/SearchInput";
import { ActiveItem } from "Navbar/Navbar";

interface LeftNavProps {
  setActiveItem: (item: ActiveItem) => void;
}

function LeftNav({ setActiveItem }: LeftNavProps) {
  const currentPath = useLocation().pathname;
  const placeholder = useHandleName(currentPath);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
    setActiveItem("house");
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
