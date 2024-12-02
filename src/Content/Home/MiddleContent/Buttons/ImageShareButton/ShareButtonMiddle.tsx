import { ContactListType } from "Content/Home/Home";
import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import { useRef, useState } from "react";
import { FaLock, FaMagnifyingGlass } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";
import { PiCaretRight } from "react-icons/pi";
import { v4 } from "uuid";

interface ShareButtonMiddleProps {
  contacts: ContactListType[];
}

const ShareButtonMiddle = ({ contacts }: ShareButtonMiddleProps) => {
  const [isGroup, setIsGroup] = useState(false);
  const checkBoxRef = useRef<HTMLInputElement | null>(null);

  const handleContactClick = () => {
    if (checkBoxRef.current) {
      checkBoxRef.current.checked = !checkBoxRef.current.checked;
      checkBoxRef.current.dispatchEvent(new Event("change", { bubbles: true }));
    }
  };

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
        <div className="contacts-container">
          <div className="contact" onClick={handleContactClick}>
            <div className="icon">
              <IoArrowRedo />
            </div>
            <h4 className="title">More share options</h4>
            <div className="caret-container">
              <PiCaretRight />
            </div>
          </div>
          {contacts.map((contact) => {
            return (
              <div
                className="contact"
                key={contact.id}
                onClick={handleContactClick}
              >
                <div className="profile-picture">
                  <img src={contact.image} alt="contact profile picture" />
                </div>
                <h4 className="username">{contact.username}</h4>
                <input id={v4()} type="checkbox" ref={checkBoxRef} />
              </div>
            );
          })}
        </div>
        <div className="scrollbar-container"></div>
      </div>
    </div>
  );
};

export default ShareButtonMiddle;
