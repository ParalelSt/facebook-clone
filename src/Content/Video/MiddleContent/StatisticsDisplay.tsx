import CommentsDisplay from "./CommentsDisplay";
import LikeDisplay from "./LikeDisplay";
import ViewsDisplay from "./ViewsDisplay";

interface StatisticsDisplayProps {
  likeCount: number;
  peopleWhoLiked: PeopleWhoLiked[];
  commentCount: number;
  comments: Comments[];
  viewCount: number;
}

export interface PeopleWhoLiked {
  username: string;
  id: string;
}

export interface Comments {
  username: string;
  profilePicture: string;
  comment: string;
  id: string;
}

const StatisticsDisplay = ({
  likeCount,
  peopleWhoLiked,
  commentCount,
  comments,
  viewCount,
}: StatisticsDisplayProps) => {
  return (
    <div className="statistics-display">
      <LikeDisplay
        likeCount={likeCount}
        peopleWhoLiked={peopleWhoLiked}
      ></LikeDisplay>
      <CommentsDisplay
        comments={comments}
        commentCount={commentCount}
      ></CommentsDisplay>
      <ViewsDisplay viewCount={viewCount}></ViewsDisplay>
    </div>
  );
};

export default StatisticsDisplay;
