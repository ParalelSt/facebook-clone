import React, { useState } from "react";
import { RiLinkM } from "react-icons/ri";
import useCopyLogic from "./CopyLogic";
import "./CopyButton.scss";

interface BasePost {
  id: string;
}

interface ImagePost extends BasePost {
  type: "image";
  image: string;
  description: string;
}

interface VideoPost extends BasePost {
  type: "video";
  video: string;
  viewCount: number;
  userId: string;
}

type Post = ImagePost | VideoPost;

interface CopyButtonProps {
  post: Post;
  text?: string;
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ post, text, className }) => {
  const [showCopied, setShowCopied] = useState(false);
  const [handleCopy] = useCopyLogic();

  const handleCopyClick = (postId: string) => {
    handleCopy(postId);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 800);
  };

  return (
    <button
      className={`copy-btn btn ${className}`}
      onClick={() => handleCopyClick(post.id)}
    >
      <RiLinkM />
      <span className="button-text">Copy {text}</span>
      <div
        className={`copied-to-clipboard ${showCopied ? "copied" : "disabled"}`}
      >
        <span id="copiedText">Copied to clipboard</span>
      </div>
    </button>
  );
};

export default CopyButton;
