import { RiLinkM } from "react-icons/ri";
import useCopyLogic from "./CopyLogic";
import { Posts } from "./MiddleContent";
import "./CopyButton.scss";
import { useState } from "react";
import { Videos } from "Content/Video/Video";

interface CopyButtonProps {
  post: Posts | Videos;
}

const CopyButton = ({ post }: CopyButtonProps) => {
  //Copying function

  const [showCopied, setShowCopied] = useState(false);

  const [handleCopy] = useCopyLogic();

  const handleCopyClick = (postId: string) => {
    handleCopy(postId);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 800);
  };

  return (
    <button className="copy-btn btn" onClick={() => handleCopyClick(post.id)}>
      <RiLinkM />
      <span className="button-text">Copy</span>
      <div
        className={`copied-to-clipboard ${showCopied ? "copied" : "disabled"}`}
      >
        <span id="copiedText">Copied to clipboard</span>
      </div>
    </button>
  );
};

export default CopyButton;
