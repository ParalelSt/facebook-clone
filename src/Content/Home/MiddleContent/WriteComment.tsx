import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BiSolidSend } from "react-icons/bi";
import {
  FaSmile,
  FaSmileBeam,
  FaStickyNote,
  FaCamera,
  FaCaretDown,
  FaFileImage,
} from "react-icons/fa";
import { Post, User } from "Content/PostTypes";
import "./WriteComment.scss";

interface WriteCommentProps {
  handleDropDownOpen: () => void;
  currentUser: User | null;
  commentButtonsActive: boolean;
  setCommentButtonsActive?: () => void;
  commentInputRef: React.MutableRefObject<{
    [postId: string]: HTMLInputElement | null;
  }>;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  postId: string;
  className?: string;
}

const WriteComment: React.FC<WriteCommentProps> = ({
  handleDropDownOpen,
  currentUser,
  commentButtonsActive,
  setCommentButtonsActive,
  commentInputRef,
  setPosts,
  postId,
  className,
}) => {
  const [commentInputActive, setCommentInputActive] = useState(false);
  const [comment, setComment] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setComment(value);
    setCommentInputActive(value.trim().length > 0);
  };

  const handlePostComment = () => {
    if (comment.trim() === "") return;

    const newComment = {
      username: currentUser?.user ?? "",
      profilePicture: currentUser?.profilePicture ?? "",
      id: uuidv4(),
      comment: comment.trim(),
    };

    setPosts((prevPosts) => {
      return prevPosts.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [...p.comments, newComment],
              commentCount: p.commentCount + 1,
            }
          : p
      );
    });

    setComment("");
    if (commentInputRef.current[postId]) {
      commentInputRef.current[postId]?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handlePostComment();
      event.preventDefault();
    }
    setCommentInputActive(false);
  };

  return (
    <div className={`post-detail-write-comment ${className}`}>
      <div
        className="post-detail-write-comment-left user-detail"
        onClick={handleDropDownOpen}
      >
        <img src={currentUser?.profilePicture} alt="" />
        <div className="caret-container">
          <FaCaretDown />
        </div>
      </div>
      <div className="post-detail-write-comment-right">
        <div className="post-detail-write-comment-top">
          <input
            placeholder={`Comment as ${currentUser?.user}`}
            type="text"
            ref={(el) => (commentInputRef.current[postId] = el)}
            value={comment}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            onClick={() => setCommentButtonsActive?.()}
          />
        </div>
        <div
          className={`post-detail-write-comment-bottom ${
            commentButtonsActive ? "active" : "disabled"
          }`}
        >
          <div className="comment-buttons">
            <FaSmileBeam />
            <FaSmile />
            <FaCamera />
            <FaFileImage />
            <FaStickyNote />
          </div>
          <div
            className={`post-comment-button ${
              commentInputActive ? "active" : "disabled"
            }`}
            onClick={handlePostComment}
          >
            <BiSolidSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteComment;
