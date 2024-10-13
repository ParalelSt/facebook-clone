import {
  FaGamepad,
  FaHouse,
  FaPeopleGroup,
  FaShop,
  FaVideo,
} from "react-icons/fa6";
import "Navbar/Middle/Middlenav.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ActiveItem } from "../Navbar";

interface MiddleNavProps {
  activeItem: ActiveItem;
  setActiveItem: (item: ActiveItem) => void;
}

function MiddleNav({ activeItem, setActiveItem }: MiddleNavProps) {
  const [isActive, setIsActive] = useState(true);

  const handleItemClick = (item: ActiveItem) => {
    setActiveItem(item);
    setIsActive(false);
  };

  const getItemClass = (item: ActiveItem) => {
    return item === activeItem ? "item-container active" : "item-container";
  };

  return (
    <div className="middle-nav">
      <div className="items-container">
        <Link
          to={"/"}
          className={`${getItemClass("house")} ${isActive ? "active" : ""}`}
          onClick={() => handleItemClick("house")}
        >
          <div className="img-container">
            <FaHouse></FaHouse>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/video"}
          className={getItemClass("video")}
          onClick={() => handleItemClick("video")}
        >
          <div className="img-container">
            <FaVideo></FaVideo>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/marketplace"}
          className={getItemClass("shop")}
          onClick={() => handleItemClick("shop")}
        >
          <div className="img-container">
            <FaShop></FaShop>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/groups"}
          className={getItemClass("group")}
          onClick={() => handleItemClick("group")}
        >
          <div className="img-container">
            <FaPeopleGroup></FaPeopleGroup>
          </div>
          <div className="underline"></div>
        </Link>
        <Link
          to={"/games"}
          className={getItemClass("game")}
          onClick={() => handleItemClick("game")}
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
