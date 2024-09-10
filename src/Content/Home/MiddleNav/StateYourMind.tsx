import { Link } from "react-router-dom";
import { User } from "./MiddleContent";
import { IoIosImages } from "react-icons/io";
import { FaVideo } from "react-icons/fa6";
import BorderLine from "../../../Global/components/BorderLine";
import { FaRegSmile } from "react-icons/fa";

interface UserI {
  user: User;
}

function StateYourMind({ user }: UserI) {
  return (
    <div className="content-container">
      <div className="content-top-container">
        <img src={user.profilePicture} />
        <div className="button-container">
          <span>What's on your mind, {user.username}?</span>
        </div>
      </div>
      <BorderLine></BorderLine>
      <div className="content-bottom-container">
        <Link to={""} className="item">
          <div className="icon video">
            <FaVideo></FaVideo>
          </div>
          <span>Live Video</span>
        </Link>
        <Link to={""} className="item">
          <div className="icon images">
            <IoIosImages />
          </div>
          <span>Photo/video</span>
        </Link>
        <Link to={""} className="item">
          <div className="icon smile">
            <FaRegSmile />
          </div>
          <span>Feeling/activity</span>
        </Link>
      </div>
    </div>
  );
}

export default StateYourMind;
