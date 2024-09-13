import { useLocation } from "react-router-dom";
import LeftNav from "./Left/LeftNav";
import MiddleNav from "./Middle/MiddleNav";
import "./Navbar.scss";
import RightNav from "./Right/RightNav";

function Navbar({ setIsAuthenticated }) {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <nav>
        <LeftNav></LeftNav>
        <MiddleNav></MiddleNav>
        <RightNav setIsAuthenticated={setIsAuthenticated}></RightNav>
      </nav>
    </>
  );
}

export default Navbar;
