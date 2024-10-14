import {
  FaGamepad,
  FaHouse,
  FaPeopleGroup,
  FaShop,
  FaVideo,
} from "react-icons/fa6";
import "Navbar/Middle/Middlenav.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface MiddleNavProps {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

function MiddleNav({ currentPage, setCurrentPage }: MiddleNavProps) {
  //Button color and underline for currently active Url

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("house");
        break;
      case "/video":
        setCurrentPage("video");
        break;
      case "/marketplace":
        setCurrentPage("marketplace");
        break;
      case "/groups":
        setCurrentPage("groups");
        break;
      case "/games":
        setCurrentPage("games");
        break;
    }
  });

  return (
    <div className="middle-nav">
      <div className="items-container">
        <Link
          to={"/"}
          className={`${currentPage === "house" ? "active" : "disabled"}`}
        >
          <div className="img-container">
            <FaHouse></FaHouse>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/video"}
          className={`${currentPage === "video" ? "active" : "disabled"}`}
        >
          <div className="img-container">
            <FaVideo></FaVideo>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/marketplace"}
          className={`${currentPage === "marketplace" ? "active" : "disabled"}`}
        >
          <div className="img-container">
            <FaShop></FaShop>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/groups"}
          className={`${currentPage === "groups" ? "active" : "disabled"}`}
        >
          <div className="img-container">
            <FaPeopleGroup></FaPeopleGroup>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/games"}
          className={`${currentPage === "games" ? "active" : "disabled"}`}
        >
          <div className="img-container">
            <FaGamepad></FaGamepad>
          </div>
          <div className="underline"></div>
        </Link>
      </div>
    </div>
  );
}

export default MiddleNav;
