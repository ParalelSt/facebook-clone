import {
  FaGamepad,
  FaHouse,
  FaPeopleGroup,
  FaShop,
  FaVideo,
} from "react-icons/fa6";
import "./Middlenav.scss";
import { useState } from "react";

function MiddleNav() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="middle-nav">
      <div className="items-container">
        <div className="item-container">
          <div className="img-container">
            <FaHouse></FaHouse>
          </div>
          <div className="underline"></div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <FaVideo></FaVideo>
          </div>
          <div className="underline"></div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <FaShop></FaShop>
          </div>
          <div className="underline"></div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <FaPeopleGroup></FaPeopleGroup>
          </div>
          <div className="underline"></div>
        </div>
        <div className="item-container">
          <div className="img-container">
            <FaGamepad></FaGamepad>
          </div>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
}

export default MiddleNav;
