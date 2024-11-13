import { useState } from "react";
import { PeopleWhoLiked } from "./StatisticsDisplay";
import "Content/Video/MiddleContent/LikeDisplay.scss";
import { ImagePost, VideoPost } from "Content/PostTypes";

interface LikeDisplayProps {
  likeCount: number;
  peopleWhoLiked: PeopleWhoLiked[];
  post: VideoPost | ImagePost;
}

const LikeDisplay = ({ likeCount, peopleWhoLiked, post }: LikeDisplayProps) => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const handleDisplayOpen = (postId: string) => {
    setActivePostId(postId);
  };

  const handleDisplayClose = () => {
    setActivePostId(null);
  };

  return (
    <div className="like-display">
      {likeCount > 0 && (
        <div className="like-display">
          <div
            className="like-count"
            onMouseEnter={() => handleDisplayOpen(post.id)}
            onMouseLeave={handleDisplayClose}
          >
            <p>
              {likeCount > 999
                ? likeCount.toString().slice(0, -3) + "k"
                : likeCount}
            </p>
          </div>
          <div
            className={`people-who-liked ${
              activePostId === post.id ? "active" : "disabled"
            }`}
          >
            {peopleWhoLiked.map((user) => {
              return (
                <div className="user-liked" key={user.id}>
                  <p>{user.username}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default LikeDisplay;
