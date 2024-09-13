import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./RightNav.scss";
import { FaBell, FaCaretDown, FaFacebookMessenger } from "react-icons/fa6";
import useLogOutLogic from "../../Global/components/LogIn/LogOutLogic";
import useDropDown from "../../Global/hooks/useDropDown";
import { Users } from "../../App";
import BorderLine from "../../Global/components/BorderLine";

interface RightNavProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  currentUser: Users | null;
}

function RightNav({ setIsAuthenticated, currentUser }: RightNavProps) {
  const handleLogOut = useLogOutLogic(setIsAuthenticated);
  const [open, close, toggle, isActive] = useDropDown();

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
          <div className="profile-container">
            <div className="img-container" onClick={() => toggle}>
              <img
                className="profile"
                src={currentUser?.profilePicture}
                alt=""
                onClick={() => toggle}
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
                  <div className="user-display-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightNav;
