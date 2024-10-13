import { FaCaretDown } from "react-icons/fa6";
import Info from "Global/components/Info/Info";
import RightNavDropDown from "Navbar/Right/RightNavDropDown";
import useLogOutLogic from "Global/components/LogIn/LogOutLogic";
import useDropDown from "Global/hooks/useDropDown";
import { useEffect, useRef } from "react";
import { Users } from "App";
import BorderLine from "Global/components/BorderLine";

interface ProfileButtonProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  currentUser: Users | null;
}

const ProfileButton = ({
  setIsAuthenticated,
  currentUser,
}: ProfileButtonProps) => {
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
    <div
      ref={profilePicRef}
      className="nav-profile-container"
      onClick={isActive ? handleDropDownClose : handleDropDownOpen}
    >
      <div className="img-container">
        <img className="profile" src={currentUser?.profilePicture} alt="" />
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
  );
};

export default ProfileButton;
