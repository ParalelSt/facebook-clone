import "Global/components/Accordion/Accordion.scss";
import { Link } from "react-router-dom";
import { AccordionItem } from "Content/Home/LeftSideNav/TopContainer";
import { RiArrowDownSLine } from "react-icons/ri";

interface Items {
  items: AccordionItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  scrollVisible: boolean;
  setScrollVisible: (scrollVisible: boolean) => void;
}

function Accordion({
  items,
  isOpen,
  setIsOpen,
  scrollVisible,
  setScrollVisible,
}: Items) {
  const toggleTitle = () => {
    setIsOpen(!isOpen);
    setScrollVisible(!scrollVisible);
  };

  const accordionTitle = isOpen ? "See less" : "See more";

  return (
    <div id="accordion" className="item-container">
      <div className={`accordion-inner ${isOpen ? "reorder" : ""}`}>
        <div className="top" onClick={toggleTitle}>
          <div className="icon-container">
            <RiArrowDownSLine />
          </div>
          <span className="title">{accordionTitle}</span>
        </div>
        <div className={`accordion-container ${isOpen ? "active" : ""}`}>
          {items.map((item) => (
            <Link to={""} className="accordion-item" key={item.id}>
              {typeof item.image === "string" ? (
                <img src={item.image} alt={item.image}></img>
              ) : (
                item.image
              )}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
