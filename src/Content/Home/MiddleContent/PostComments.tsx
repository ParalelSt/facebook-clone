import React from "react";
import { Posts } from "Content/Home/MiddleContent/MiddleContent";
import "./PostComments.scss";

interface PostCommentsProps {
  className?: string;
  post: Posts;
}

const PostComments: React.FC<PostCommentsProps> = React.memo(
  ({ className, post }) => {
    return (
      <div className={`post-comment-display ${className}`} key={post.id}>
        {post.comments &&
          post.comments.map((comment) => {
            return (
              <div className="post-comment-container" key={comment.id}>
                <div className="post-comment-profile-picture">
                  <img src={comment.profilePicture} alt="profile picture" />
                </div>
                <div className="post-comment-text">
                  <span className="post-comment-username">
                    {comment.username}
                  </span>
                  <span className="post-comment">{comment.comment}</span>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
);

export default PostComments;
