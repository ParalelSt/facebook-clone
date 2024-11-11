import { PiShareFatLight } from "react-icons/pi";
import "Content/Home/MiddleContent/Buttons/ShareButton.scss";
import useDropDown from "Global/hooks/useDropDown";
import { useEffect, useRef } from "react";
import DropDownContainer from "../DropDownContainer";
import CopyButton from "./CopyButton";
import { Post } from "Content/PostTypes";
import ShareToFeedButton from "./DropDownButtons/ShareToFeedButton";
import ShareToYourStory from "./DropDownButtons/ShareToYourStory";
import SendInMessenger from "./DropDownButtons/SendInMessenger";
import MoreOptions from "./DropDownButtons/MoreOptions";
import ShareToAPage from "./DropDownButtons/ShareToAPage";
import Embed from "./DropDownButtons/Embed";
import ShareVia from "./DropDownButtons/ShareVia";

interface ShareButtonProps {
  post: Post;
}

const ShareButton = ({ post }: ShareButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [handleDropDownOpen, handleDropDownClose, toggleDropDown, isActive] =
    useDropDown();

  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCloseDropDown = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        handleDropDownClose();
      }
    };

    document.body.addEventListener("click", handleCloseDropDown);
    console.log("DropDown isActive: ", isActive);

    return () => {
      document.body.removeEventListener("click", handleCloseDropDown);
    };
  }, [handleDropDownClose, isActive]);

  const handleOpenDropDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDropDown();
  };

  return (
    <button
      className={`share-btn btn ${isActive ? "active" : "disabled"}`}
      onClick={handleOpenDropDown}
    >
      <PiShareFatLight />
      <span>Share</span>
      <DropDownContainer
        className="share-drop-down"
        ref={dropDownRef}
        isActive={isActive}
      >
        <ShareToFeedButton />
        <ShareToYourStory />
        <SendInMessenger />
        <MoreOptions />
        <ShareToAPage />
        <CopyButton className="share-copy-button" text="link" post={post} />
        <Embed />
        <ShareVia />
      </DropDownContainer>
    </button>
  );
};

export default ShareButton;
