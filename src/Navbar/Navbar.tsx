import { useLocation } from "react-router-dom";
import LeftNav from "./Left/LeftNav";
import MiddleNav from "./Middle/MiddleNav";
import "./Navbar.scss";
import RightNav from "./Right/RightNav";
import { Users } from "../App";

interface NavbarProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  currentUser: Users | null;
}

function Navbar({ setIsAuthenticated, users, currentUser }: NavbarProps) {
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  return (
    <>
      <nav>
        <LeftNav></LeftNav>
        <MiddleNav></MiddleNav>
        <RightNav
          users={users}
          currentUser={currentUser}
          setIsAuthenticated={setIsAuthenticated}
        ></RightNav>
      </nav>
    </>
  );
}

export default Navbar;
