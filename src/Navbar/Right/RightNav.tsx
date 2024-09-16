import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./RightNav.scss";
import { FaBell, FaCaretDown, FaFacebookMessenger } from "react-icons/fa6";
import useLogOutLogic from "../../Global/components/LogIn/LogOutLogic";
import { Users } from "../../App";
import BorderLine from "../../Global/components/BorderLine";
import { v4 } from "uuid";
import Info from "../../Global/components/Info/Info";
import { IoIosArrowForward } from "react-icons/io";
import useDropDown from "../../Global/hooks/useDropDown";

interface RightNavProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  currentUser: Users | null;
}

function RightNav({ setIsAuthenticated, currentUser }: RightNavProps) {
  const dropDropIcons = [
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

  const handleLogOut = useLogOutLogic(setIsAuthenticated);
  const [, , handleDropDownToggle, isActive] = useDropDown();

  return (
    <>
      <div className="right-nav">
        <div className="items-container">
          <div className="item-container">
            <div className="img-container">
              <BsFillGrid3X3GapFill className="icon"></BsFillGrid3X3GapFill>
            </div>
          </div>
          <div className="item-container">
            <div className="img-container">
              <FaFacebookMessenger className="icon"></FaFacebookMessenger>
            </div>
          </div>
          <div className="item-container">
            <div className="img-container">
              <FaBell className="icon"></FaBell>
            </div>
          </div>
          <div className="profile-container" onClick={handleDropDownToggle}>
            <div className="img-container">
              <img
                className="profile"
                src={currentUser?.profilePicture}
                alt=""
              />
              <div className="caret-container">
                <FaCaretDown></FaCaretDown>
              </div>
              <div
                className={`drop-down-container ${isActive ? "active" : ""}`}
              >
                <div className="user-display-container">
                  <div className="user-display-top">
                    <img src={currentUser?.profilePicture} alt="" />
                    <span className="username">{currentUser?.user}</span>
                  </div>
                  <BorderLine></BorderLine>
                  <div className="user-display-bottom">
                    <div className="button-container">
                      <button className="profiles">
                        <img src="/icons/SwapUser.svg" alt="" />
                        <span>See all profiles</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="drop-down-item-container">
                  {dropDropIcons.map((item) => {
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
                <Info></Info>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightNav;
