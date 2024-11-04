import { Comments } from "./StatisticsDisplay";

interface CommentsDisplayProps {
  commentCount: number;
  comments: Comments[];
}

const CommentsDisplay = ({ commentCount, comments }: CommentsDisplayProps) => {
  return (
    <div className="comments-display">
      {commentCount > 0 && (
        <div className="comment-display">
          <div className="comment-count">{commentCount}</div>
          <div className="people-who-commented">
            {comments.map((user) => {
              return (
                <div className="user-liked" key={user.id}>
                  <span>{user.username}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentsDisplay;
