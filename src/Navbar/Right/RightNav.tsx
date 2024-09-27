import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./RightNav.scss";
import { FaBell, FaCaretDown, FaFacebookMessenger } from "react-icons/fa6";
import useLogOutLogic from "../../Global/components/LogIn/LogOutLogic";
import { Users } from "../../App";
import BorderLine from "../../Global/components/BorderLine";
import Info from "../../Global/components/Info/Info";
import useDropDown from "../../Global/hooks/useDropDown";
import RightNavDropDown from "./RightNavDropDown";
import { useEffect, useRef } from "react";

interface RightNavProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  currentUser: Users | null;
}

function RightNav({ setIsAuthenticated, currentUser }: RightNavProps) {
  const handleLogOut = useLogOutLogic(setIsAuthenticated);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [handleDropDownOpen, handleDropDownClose, _, isActive] = useDropDown();

  const dropDownRef = useRef<HTMLDivElement>(null);
  const profilePicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node) &&
        profilePicRef.current &&
        !profilePicRef.current.contains(e.target as Node)
      ) {
        handleDropDownClose();
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [handleDropDownClose, isActive]);

  const handleDropDownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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
          <div
            ref={profilePicRef}
            className="profile-container"
            onClick={isActive ? handleDropDownClose : handleDropDownOpen}
          >
            <div className="img-container">
              <img
                className="profile"
                src={currentUser?.profilePicture}
                alt=""
              />
              <div className="caret-container">
                <FaCaretDown></FaCaretDown>
              </div>
            </div>
            <div
              ref={dropDownRef}
              className={`drop-down-container ${isActive ? "active" : ""}`}
              onClick={handleDropDownClick}
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
              <RightNavDropDown handleLogOut={handleLogOut}></RightNavDropDown>
              <Info></Info>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightNav;
