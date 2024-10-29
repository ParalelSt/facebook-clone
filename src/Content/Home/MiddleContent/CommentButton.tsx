import { IoChatbubbleOutline } from "react-icons/io5";

interface CommentButtonProps {
  setCommentButtonsActive?: () => void;
}

const CommentButton = ({ setCommentButtonsActive }: CommentButtonProps) => {
  return (
    <button className="comment-btn" onClick={setCommentButtonsActive}>
      <IoChatbubbleOutline />
      <span className="button-text">Comment</span>
    </button>
  );
};

export default CommentButton;
