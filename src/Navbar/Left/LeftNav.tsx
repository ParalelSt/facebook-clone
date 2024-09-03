import { FaMagnifyingGlass } from "react-icons/fa6";
import "./LeftNav.scss";

function LeftNav() {
  return (
    <div className="left-nav">
      <div className="logo-container">
        <img src="/images/FacebookLogo.svg" alt="Facebook Logo" />
      </div>
      <div className="input-container">
        <div className="left">
          <FaMagnifyingGlass></FaMagnifyingGlass>
        </div>
        <div className="right">
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
    </div>
  );
}

export default LeftNav;
