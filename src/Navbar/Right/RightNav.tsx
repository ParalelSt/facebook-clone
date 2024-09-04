import { BsFillGrid3X3GapFill } from "react-icons/bs";
import "./RightNav.scss";
import { FaBell, FaFacebookMessenger } from "react-icons/fa6";

function RightNav() {
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
            <div className="img-container">
              <img
                className="profile"
                src="/images/ProfilePicture.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightNav;
