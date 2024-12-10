import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import { useEffect, useRef } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";

interface ShareButtonBottomProps {
  isOpen: boolean;
}

const ShareButtonBottom = ({ isOpen }: ShareButtonBottomProps) => {
  const inputFocusRef = useRef<HTMLInputElement | null>(null);

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
      <div className="share-button-drop-down-bottom-button-container">
        <div className="share-button-drop-down-bottom-icon-container">
          <FaFacebookMessenger />
        </div>
        <h4 className="share-button-drop-down-bottom-button-text">Send</h4>
      </div>
    </div>
  );
};

export default ShareButtonBottom;
