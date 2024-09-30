import { useState } from "react";
import "./Accordion.scss";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa6";
import { AccordionItem } from "../../../Content/Home/LeftSideNav/TopContainer";

interface Items {
  items: AccordionItem[];
}

function Accordion({ items }: Items) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTitle = () => {
    setIsOpen(!isOpen);
  };

  const accordionTitle = isOpen ? "See less" : "See more";

  return (
    <div id="accordion" className="item-container">
      <div className={`accordion-inner ${isOpen ? "reorder" : ""}`}>
        <div className="top" onClick={toggleTitle}>
          <FaCaretDown />
          <div className="icon-container"></div>
          <span className="title">{accordionTitle}</span>
        </div>
        <div className={`accordion-container ${isOpen ? "active" : ""}`}>
          {items.map((item) => (
            <Link to={""} className="accordion-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

Accordion.defaultProps = {
  title: "See less",
};

export default Accordion;
