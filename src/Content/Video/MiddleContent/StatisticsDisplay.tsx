import { ImagePost, VideoPost } from "Content/PostTypes";
import CommentsDisplay from "./CommentsDisplay";
import LikeDisplay from "./LikeDisplay";
import ViewsDisplay from "./ViewsDisplay";
import "Content/Video/MiddleContent/StatisticsDisplay.scss";
import { LuDot } from "react-icons/lu";

interface StatisticsDisplayProps {
  likeCount: number;
  peopleWhoLiked: PeopleWhoLiked[];
  commentCount: number;
  comments: Comments[];
  viewCount: number;
  post: VideoPost | ImagePost;
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
  post,
}: StatisticsDisplayProps) => {
  return (
    <div className="statistics-display">
      <LikeDisplay
        likeCount={likeCount}
        peopleWhoLiked={peopleWhoLiked}
        post={post}
      ></LikeDisplay>
      {commentCount > 0 && <LuDot size={10} className={"comment-dot"} />}
      <CommentsDisplay
        comments={comments}
        commentCount={commentCount}
        post={post}
      ></CommentsDisplay>
      {viewCount > 0 && <LuDot size={10} className={"view-dot"} />}
      <ViewsDisplay viewCount={viewCount}></ViewsDisplay>
    </div>
  );
};

export default StatisticsDisplay;
