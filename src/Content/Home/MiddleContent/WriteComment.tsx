import { Users } from "App";
import { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { FaSmile, FaSmileBeam, FaStickyNote } from "react-icons/fa";
import { FaCamera, FaCaretDown, FaFileImage } from "react-icons/fa6";
import "./WriteComment.scss";
import { Posts } from "./MiddleContent";
import { v4 } from "uuid";

interface WriteCommentsProp {
  handleDropDownOpen: () => void;
  currentUser: Users;
  commentButtonsActive: boolean;
  setCommentButtonsActive?: () => void;
  commentInputRef: React.MutableRefObject<{
    [postId: string]: HTMLInputElement | null;
  }>;
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  postId: string;
}

const WriteComment = ({
  handleDropDownOpen,
  currentUser,
  commentButtonsActive,
  setCommentButtonsActive,
  commentInputRef,
  setPosts,
  postId,
}: WriteCommentsProp) => {
  const [commentInputActive, setCommentInputActive] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setComment(value);
    setCommentInputActive(value.trim().length > 0);
  };

  //Post comment
  const [comment, setComment] = useState("");

  const handlePostComment = () => {
    const newComment = {
      username: currentUser.user,
      profilePicture: currentUser.profilePicture,
      id: v4(),
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
      commentInputRef.current[postId].focus();
    }
  };

  return (
    <div className="post-detail-write-comment">
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
            onChange={handleInputChange}
            onClick={setCommentButtonsActive}
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
