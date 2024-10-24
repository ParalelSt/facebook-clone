import { useLocation } from "react-router-dom";
import LeftNav from "Navbar/Left/LeftNav";
import MiddleNav from "Navbar/Middle/MiddleNav";
import "Navbar/Navbar.scss";
import RightNav from "Navbar/Right/RightNav";
import { Users } from "App";
import { useState } from "react";

interface NavbarProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  currentUser: Users | null;
}

function Navbar({ setIsAuthenticated, users, currentUser }: NavbarProps) {
  const [currentPage, setCurrentPage] = useState<string>("");

  const location = useLocation();

  const isPostDetailPage = /^\/posts\/[\w-]+$/.test(location.pathname);

  if (
    location.pathname === "/login" ||
    location.pathname === "/stories/create" ||
    isPostDetailPage
  ) {
    return null;
  }

  return (
    <>
      <nav>
        <div className="navbar-container">
          <LeftNav></LeftNav>
          <MiddleNav
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
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
