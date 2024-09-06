import Accordion from "../../../../Global/components/Accordion/Accordion";
import { AccordionItem } from "./TopContainer";
import "../../../../Global/GlobalStyles.scss";
import { useState } from "react";
import BorderLine from "../../../../Global/components/BorderLine";

function BottomContainer() {
  const leftBottomSideNav: AccordionItem[] = [
    {
      title: "Covjece ne ljuti se",
      image: "/icons/Covjece.png",
      id: 1,
    },

    {
      title: "Geometry Dash World",
      image: "/icons/GD.png",
      id: 2,
    },

    {
      title: "Happy Wheels Online",
      image: "/icons/HappyWheels.png",
      id: 3,
    },

    {
      title: "Imperia Online",
      image: "/icons/Imperia.png",
      id: 4,
    },

    {
      title: "Monster Legends",
      image: "/icons/Monster.png",
      id: 5,
    },

    {
      title: "Shred Hit",
      image: "/icons/SmashHit.png",
      id: 6,
    },

    {
      title: "Smash Hit 2D",
      image: "/icons/SmashHit.png",
      id: 7,
    },

    {
      title: "Poker",
      image: "/icons/Poker.png",
      id: 8,
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="bottom-container"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <BorderLine></BorderLine>
      <div className="title-container">
        <h1>Your shortcuts</h1>
        <button className={`edit-btn ${isHovered ? "active" : ""}`}>
          Edit
        </button>
      </div>
      <div className="item-container">
        <img src="/icons/8Ball.png" />
        <span className="title">8 Ball Pool</span>
      </div>
      <div className="item-container">
        <img src="/icons/Agar.io.jpg" />
        <span className="title">Agar.io</span>
      </div>
      <div className="item-container">
        <img src="/icons/Archer.png" />
        <span className="title">Archery Master 3D</span>
      </div>
      <div className="item-container">
        <img src="/icons/BingoBash.jpg" />
        <span className="title">Bingo Bash</span>
      </div>
      <div className="item-container">
        <img src="/icons/BingoPop.png" />
        <span className="title">Bingo Pop</span>
      </div>
      <Accordion items={leftBottomSideNav}></Accordion>
    </div>
  );
}

export default BottomContainer;
