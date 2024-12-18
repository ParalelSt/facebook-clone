import "Content/Home/MiddleContent/Buttons/ImageShareButton/ShareDropDownStyles.scss";
import { useEffect, useRef, useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa6";

interface ShareButtonBottomProps {
  isOpen: boolean;
  selectedContacts: Record<string, boolean>;
  setSelectedContacts: (selectedContacts: Record<string, boolean>) => void;
  closeFunction: (e: React.MouseEvent) => void;
}

const ShareButtonBottom = ({
  isOpen,
  selectedContacts,
  setSelectedContacts,
  closeFunction,
}: ShareButtonBottomProps) => {
  const inputFocusRef = useRef<HTMLInputElement | null>(null);

  const [sendButtonActive, setSendButtonActive] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (isOpen) {
      inputFocusRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const anySelected = Object.values(selectedContacts).some(
      (value) => value === true
    );

    if (anySelected) {
      setSendButtonActive(true);
    } else {
      setSendButtonActive(false);
    }
  }, [selectedContacts]);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleCloseDropDown = (event: React.MouseEvent) => {
    if (sendButtonActive) {
      closeFunction(event);
      setSelectedContacts({ contact: false });
    }
  };

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
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleCloseDropDown}
        className={`share-button-drop-down-bottom-button-container ${
          sendButtonActive ? "active" : "disabled"
        } ${isMouseDown ? "mouseDown" : "mouseUp"}`}
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
