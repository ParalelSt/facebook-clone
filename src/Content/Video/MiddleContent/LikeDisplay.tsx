import { PeopleWhoLiked } from "./StatisticsDisplay";

interface LikeDisplayProps {
  likeCount: number;
  peopleWhoLiked: PeopleWhoLiked[];
}

const LikeDisplay = ({ likeCount, peopleWhoLiked }: LikeDisplayProps) => {
  return (
    <div className="like-display">
      {likeCount > 0 && (
        <div className="like-display">
          <div className="like-count">{likeCount}</div>
          <div className="people-who-liked">
            {peopleWhoLiked.map((user) => {
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

export default LikeDisplay;
