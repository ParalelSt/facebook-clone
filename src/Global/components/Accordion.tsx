import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Accordion.scss";

export interface TitleI {
  title: string;
}

function Accordion({ title }: TitleI) {
  const [isActive, setIsActive] = useState(false);
  const accordionTitle = () => {
    setIsActive(!isActive);

    if (isActive) {
      title = "See less";
    } else {
      title = "See more";
    }

    return title;
  };

  return (
    <div onClick={accordionTitle} className="item-container">
      <FaCaretDown></FaCaretDown>
      <span className="title">{title}</span>
      <div className={`accordion-container ${isActive ? "active" : ""}`}>
        <Link to={""} className="accordion-item">
          <img src="/icons/.svg" />
          <span className="title"></span>
        </Link>
      </div>
    </div>
  );
}

export default Accordion;
