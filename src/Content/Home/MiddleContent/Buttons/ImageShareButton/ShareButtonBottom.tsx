import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import { useEffect, useRef, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";

interface ShareButtonBottomProps {
  isOpen: boolean;
}

const ShareButtonBottom = ({ isOpen }: ShareButtonBottomProps) => {
  const inputFocusRef = useRef<HTMLInputElement | null>(null);

  const [sendButtonActive, setSendButtonActive] = useState(true);

  useEffect(() => {
    if (isOpen) {
      inputFocusRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="share-button-drop-down-bottom">
      <div className="share-button-drop-down-bottom-input">
        <input
          ref={inputFocusRef}
          type="text"
          placeholder="Add an optional message here..."
        />
      </div>
      <button
        className={`share-button-drop-down-bottom-button-container ${
          sendButtonActive ? "active" : "disabled"
        }`}
      >
        <div className="share-button-drop-down-bottom-button-container-icon-container">
          <FaFacebookMessenger />
        </div>
        <h4 className="share-button-drop-down-bottom-button-container-text">
          Send
        </h4>
        {!sendButtonActive && <div className="blur-background"></div>}
      </button>
    </div>
  );
};

export default ShareButtonBottom;
