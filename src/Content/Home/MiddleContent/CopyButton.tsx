import { RiLinkM } from "react-icons/ri";
import useCopyLogic from "./CopyLogic";
import { Posts } from "./MiddleContent";
import "./CopyButton.scss";

interface CopyButtonProps {
  post: Posts;
}

const CopyButton = ({ post }: CopyButtonProps) => {
  //Copying function

  const [handleCopy, showCopied] = useCopyLogic();

  return (
    <button className="copy-btn btn" onClick={() => handleCopy(post.id)}>
      <RiLinkM />
      <span>Copy</span>
      <div
        className={`copied-to-clipboard ${showCopied ? "copied" : "disabled"}`}
      >
        <span id="copiedText">Copied to clipboard</span>
      </div>
    </button>
  );
};

export default CopyButton;
