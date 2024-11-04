import { IoChatbubbleOutline } from "react-icons/io5";
import "Content/Home/MiddleContent/CommentButton.scss";

interface CommentButtonProps {
  setCommentButtonsActive?: () => void;
}

const CommentButton = ({ setCommentButtonsActive }: CommentButtonProps) => {
  return (
    <button className="comment-btn btn" onClick={setCommentButtonsActive}>
      <IoChatbubbleOutline />
      <span className="button-text">Comment</span>
    </button>
  );
};

export default CommentButton;
