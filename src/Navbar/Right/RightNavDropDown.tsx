import { IoIosArrowForward } from "react-icons/io";

import { v4 } from "uuid";

interface RightNavDropDownProps {
  handleLogOut: () => void;
}

const RightNavDropDown = ({ handleLogOut }: RightNavDropDownProps) => {
  const dropDownIcons = [
    {
      name: "Settings & Privacy",
      img: "/icons/Cog.svg",
      caret: true,
      id: v4(),
    },

    {
      name: "Help & Support",
      img: "/icons/Question.svg",
      caret: true,
      id: v4(),
    },

    {
      name: "Display & accessibility",
      img: "/icons/Moon.svg",
      caret: true,
      id: v4(),
    },

    {
      name: "Give feedback",
      img: "/icons/Exclamation.svg",
      caret: false,
      id: v4(),
    },
  ];

  return (
    <div className="drop-down-item-container">
      {dropDownIcons.map((item) => {
        return (
          <div className="drop-down-item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="img-bg"></div>
            <span>{item.name}</span>
            {item.caret && (
              <span className="caret">
                <IoIosArrowForward />
              </span>
            )}
          </div>
        );
      })}
      <div className="drop-down-item" onClick={handleLogOut}>
        <img src="/icons/DoorExit.svg" />
        <div className="img-bg"></div>
        <span>Log out</span>
      </div>
    </div>
  );
};

export default RightNavDropDown;
