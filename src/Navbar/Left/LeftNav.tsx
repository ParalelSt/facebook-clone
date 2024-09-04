import { useLocation } from "react-router-dom";
import { useHandleName } from "../../Global/hooks/useHandleName";
import "./LeftNav.scss";
import SearchInput from "./SearchInput";

function LeftNav() {
  const currentPath = useLocation().pathname;
  const placeholder = useHandleName(currentPath);

  return (
    <div className="left-nav">
      <div className="logo-container">
        <img src="/images/FacebookLogo.svg" alt="Facebook Logo" />
      </div>
      <SearchInput placeholder={placeholder}></SearchInput>
    </div>
  );
}

export default LeftNav;
