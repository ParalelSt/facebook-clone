import { Users } from "App";
import { useEffect, useRef, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { FaSmile, FaSmileBeam, FaStickyNote } from "react-icons/fa";
import { FaCamera, FaCaretDown, FaFileImage } from "react-icons/fa6";
import "./WriteComment.scss";
import { Posts } from "./MiddleContent";

interface WriteCommentsProp {
  handleDropDownOpen: () => void;
  currentUser: Users;
  commentButtonsActive: boolean;
  setCommentButtonsActive?: () => void;
  commentInputRef: React.MutableRefObject<{
    [postId: string]: HTMLInputElement | null;
  }>;
  post: Posts;
  postId: string;
}

const WriteComment = ({
  handleDropDownOpen,
  currentUser,
  commentButtonsActive,
  setCommentButtonsActive,
  commentInputRef,
  post,
  postId,
}: WriteCommentsProp) => {
  const [commentInputActive, setCommentInputActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    commentInputRef.current[postId] = inputRef.current;
  }, [postId, inputRef, commentInputRef]);

  const handleInputChange = () => {
    if (inputRef.current?.value) {
      setCommentInputActive(true);
    } else {
      setCommentInputActive(false);
    }
  };

  //Post comment

  const handlePostComment = () => {};

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
            ref={inputRef}
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
          >
            <BiSolidSend />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteComment;
