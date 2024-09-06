import { FaPlus } from "react-icons/fa6";
import { GroupsType } from "../../../Navbar/Content/Home/RightSideNav/RightSideNav";
import { Link } from "react-router-dom";

interface Group {
  groups: GroupsType[];
}

function GroupChat({ groups }: Group) {
  return (
    <div className="group-chat-container">
      <div className="title-container">
        <h1 className="title">Group chats</h1>
      </div>
      {groups.map((group) => (
        <Link to={""} className="item-container" key={group.id}>
          <img src={group.image} className="group-picture" />
          <span className="title">{group.groupName}</span>
        </Link>
      ))}
      <button className="create-group-btn-container item-container">
        <div className="background">
          <FaPlus></FaPlus>
        </div>
        <span className="title">Create group chat</span>
      </button>
    </div>
  );
}

export default GroupChat;
