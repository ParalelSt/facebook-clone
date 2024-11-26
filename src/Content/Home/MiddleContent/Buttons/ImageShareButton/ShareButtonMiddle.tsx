import { ContactListType } from "Content/Home/Home";
import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import { useRef, useState } from "react";
import { FaLock, FaMagnifyingGlass } from "react-icons/fa6";

interface ShareButtonMiddleProps {
  contacts: ContactListType[];
}

const ShareButtonMiddle = ({ contacts }: ShareButtonMiddleProps) => {
  const [isGroup, setIsGroup] = useState(false);
  const checkBoxRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="share-button-drop-down-middle">
      {isGroup && (
        <div className="share-button-drop-down-middle-text">
          <div className="lock-icon">
            <FaLock />
          </div>
          <span>
            Only members can see who's in the group and what they post.
            Non-members will get an invite to join.
          </span>
        </div>
      )}
      <div className="share-button-drop-down-middle-input">
        <div className="share-button-drop-down-middle-input-icon">
          <FaMagnifyingGlass />
        </div>
        <input type="text" placeholder="Search for people and groups" />
      </div>
      <div className="share-button-drop-down-middle-content-container">
        {contacts.map((contact) => {
          return (
            <div className="contact" key={contact.id}>
              <div className="profile-picture">
                <img src={contact.image} alt="contact profile picture" />
              </div>
              <h4 className="username">{contact.username}</h4>
              <input type="checkbox" ref={checkBoxRef} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShareButtonMiddle;
