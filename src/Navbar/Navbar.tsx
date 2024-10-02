import { useLocation } from "react-router-dom";
import LeftNav from "./Left/LeftNav";
import MiddleNav from "./Middle/MiddleNav";
import "./Navbar.scss";
import RightNav from "./Right/RightNav";
import { Users } from "../App";
import { useState } from "react";

interface NavbarProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  currentUser: Users | null;
}

export type ActiveItem = "house" | "video" | "shop" | "group" | "game" | null;

function Navbar({ setIsAuthenticated, users, currentUser }: NavbarProps) {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<ActiveItem>(null);

  if (
    location.pathname === "/login" ||
    location.pathname === "/stories/create"
  ) {
    return null;
  }

  return (
    <>
      <nav>
        <div className="navbar-container">
          <LeftNav setActiveItem={setActiveItem}></LeftNav>
          <MiddleNav
            setActiveItem={setActiveItem}
            activeItem={activeItem}
          ></MiddleNav>
          <RightNav
            users={users}
            currentUser={currentUser}
            setIsAuthenticated={setIsAuthenticated}
          ></RightNav>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
