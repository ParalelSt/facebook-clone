import { useState } from "react";
import { Comments } from "./StatisticsDisplay";
import "Content/Video/MiddleContent/CommentsDisplay.scss";
import { ImagePost, VideoPost } from "Content/PostTypes";

interface CommentsDisplayProps {
  commentCount: number;
  comments: Comments[];
  post: VideoPost | ImagePost;
}

const CommentsDisplay = ({
  commentCount,
  comments,
  post,
}: CommentsDisplayProps) => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const handleDisplayOpen = (postId: string) => {
    setActivePostId(postId);
  };

  const handleDisplayClose = () => {
    setActivePostId(null);
  };

  const displayedUsernames = new Set<string>();

  const uniqueComments = comments.filter((user) => {
    if (displayedUsernames.has(user.username)) {
      return false;
    }
    displayedUsernames.add(user.username);
    return true;
  });

  return (
    <div className="comments-display">
      {commentCount > 0 && (
        <div className="comment-display">
          <div
            className="comment-count"
            onMouseEnter={() => handleDisplayOpen(post.id)}
            onMouseLeave={handleDisplayClose}
          >
            <p>{commentCount} comments</p>
          </div>
          <div
            className={`people-who-commented ${
              activePostId === post.id ? "active" : "disabled"
            }`}
          >
            {uniqueComments.map((user) => {
              return (
                <div className="user-commented" key={user.id}>
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
