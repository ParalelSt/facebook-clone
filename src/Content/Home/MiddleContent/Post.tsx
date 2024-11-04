import { FaEllipsis } from "react-icons/fa6";
import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import { Posts } from "Content/Home/MiddleContent/MiddleContent";
import "Content/Home/MiddleContent/Post.scss";
import BorderLine from "Global/components/BorderLine";
import { Users } from "App";
import ProfilesAndPages from "Content/Home/MiddleContent/ProfilesAndPages";
import useDropDown from "Global/hooks/useDropDown";
import LikeButton from "Content/Home/MiddleContent/LikeButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import CopyButton from "./CopyButton";
import PostComments from "./PostComments";
import WriteComment from "./WriteComment";
import CommentButton from "./CommentButton";
import ShareButton from "./ShareButton";
import { useCommentButtonLogic } from "./CommentButtonLogic";
import { Videos } from "Content/Video/Video";

interface PostProps {
  posts: Posts[] | Videos[];
  post?: Posts | Videos[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[] | Videos[]>>;
  users: Users[];
  user: Users | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
}

const Post = ({
  posts,
  setPosts,
  users,
  user,
  setIsAuthenticated,
  setCurrentUser,
}: PostProps) => {
  //Write comment display

  const [handleCommentButtonToggle, commentInputRef, commentInputStates] =
    useCommentButtonLogic();

  //Like Logic

  const [activePostId, setActivePostId] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [handleDropDownOpen, handleDropDownClose, _, isActive] = useDropDown();

  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") as string)
    : null;

  //Hover on like count to display users who've liked the post

  const handleLikeDisplayOpen = (postId: string) => {
    setActivePostId(postId);
  };

  const handleLikeDisplayClose = () => {
    setActivePostId(null);
  };

  return (
    <>
      <div className="posts">
        {posts.map((post) => {
          return (
            <ContentContainer key={post.id}>
              <div className="content">
                <div className="post-top-container">
                  <div className="post-top-container-top">
                    <div className="post-top-left">
                      <div className="post-top-left-profile">
                        <img src={post.profilePicture} alt="" />
                      </div>
                      <div className="post-top-left-text">
                        <span className="username">{post.username}</span>
                        <span className="time-posted">{post.timePosted}</span>
                      </div>
                    </div>
                    <div className="post-top-right">
                      <div className="icon-container">
                        <FaEllipsis></FaEllipsis>
                      </div>
                    </div>
                  </div>
                  <div className="post-top-container-bottom">
                    {post && "description" in post && (
                      <div className="post-description">{post.description}</div>
                    )}
                  </div>
                </div>
                <div className="post-bottom-container">
                  <div className="post-bottom-image">
                    <Link to={`/posts/${post.id}`}>
                      {post && "description" in post && (
                        <img src={post.image} alt="" />
                      )}
                    </Link>
                    <BorderLine></BorderLine>
                  </div>
                  {post &&
                    "description" in post &&
                    (post.likeCount > 0 ||
                      post.commentCount > 0 ||
                      post.shareCount > 0) && (
                      <div className="like-share-display">
                        <div
                          className={`users-that-liked ${
                            activePostId === post.id ? "active" : "disabled"
                          }`}
                        >
                          {post.usersWhoLiked.map((likedUser) => {
                            return (
                              <div
                                className={`liked-user-display`}
                                key={likedUser.id}
                              >
                                {likedUser.username}
                              </div>
                            );
                          })}
                        </div>
                        <div className="post-likes">
                          <div className="like-icons">
                            {post.likeIcons.map((icon) => {
                              return (
                                <div className="img-container" key={post.id}>
                                  <img src={icon} alt="" />
                                </div>
                              );
                            })}
                          </div>
                          <div
                            className={`like-count count ${
                              activePostId === post.id ? "active" : "disabled"
                            }`}
                            onMouseEnter={() => handleLikeDisplayOpen(post.id)}
                            onMouseLeave={() => handleLikeDisplayClose()}
                          >
                            <span>
                              {post.likeCount == 0 ? "" : post.likeCount}
                            </span>
                          </div>
                        </div>
                        <div className={`comment-and-share`}>
                          <div className="comment-count count">
                            <span>
                              {post.commentCount !== 0
                                ? post.commentCount + " " + `comments`
                                : ""}
                            </span>
                          </div>
                          <div className="share-count count">
                            <span>
                              {post.shareCount !== 0
                                ? post.shareCount + " " + `share`
                                : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  {post &&
                    "description" in post &&
                    (post.likeCount > 0 ||
                      post.commentCount > 0 ||
                      post.shareCount > 0) && <BorderLine></BorderLine>}
                  <div className="post-buttons">
                    <LikeButton
                      user={user}
                      setPosts={setPosts}
                      post={post}
                    ></LikeButton>
                    <CommentButton
                      setCommentButtonsActive={() =>
                        handleCommentButtonToggle(post.id)
                      }
                    ></CommentButton>
                    <CopyButton post={post}></CopyButton>
                    <ShareButton></ShareButton>
                  </div>
                  <BorderLine></BorderLine>
                  {post.commentCount > 0 && (
                    <PostComments
                      className="comments-visible"
                      post={post}
                    ></PostComments>
                  )}
                </div>
                <WriteComment
                  currentUser={currentUser}
                  handleDropDownOpen={handleDropDownOpen}
                  commentButtonsActive={commentInputStates[post.id] || false}
                  setCommentButtonsActive={() =>
                    handleCommentButtonToggle(post.id)
                  }
                  commentInputRef={commentInputRef}
                  setPosts={setPosts}
                  postId={post.id}
                ></WriteComment>
              </div>
            </ContentContainer>
          );
        })}
      </div>

      <ProfilesAndPages
        setIsAuthenticated={setIsAuthenticated}
        setCurrentUser={setCurrentUser}
        dropDownClose={handleDropDownClose}
        isActive={isActive}
        users={users}
      ></ProfilesAndPages>
    </>
  );
};

export default Post;
