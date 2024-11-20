import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCompress, FaEllipsis, FaExpand, FaTag } from "react-icons/fa6";
import BorderLine from "Global/components/BorderLine";
import LikeButton from "Content/Home/MiddleContent/Buttons/LikeButton";
import useDropDown from "Global/hooks/useDropDown";
import ProfilesAndPages from "Content/Home/MiddleContent/ProfilesAndPages";
import Menu from "Navbar/Right/Menu";
import Notifications from "Navbar/Right/Notifications";
import Messenger from "Navbar/Right/Messenger";
import ProfileButton from "Navbar/Right/ProfileButton";
import CloseButton from "Global/components/Image Carousel/CloseButton";
import FacebookLogoButton from "Global/components/Image Carousel/FacebookLogoButton";
import useZoomControl from "Content/Home/MiddleContent/ZoomControl";
import PostComments from "Content/Home/MiddleContent/Posts/PostComments";
import CommentButton from "Content/Home/MiddleContent/Buttons/CommentButton";
import WriteComment from "Content/Home/MiddleContent/Posts/WriteComment";
import "./PostDetail.scss";
import { Post, User } from "Content/PostTypes";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";
import { useCommentButtonLogic } from "Content/Home/MiddleContent/Buttons/CommentButtonLogic";
import ShareButton from "../Buttons/ShareButton";
import ImageShareButton from "../Buttons/ImageShareButton/ImageShareButton";

interface PostDetailProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  users: User[];
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: User | null) => void;
}

export default function PostDetail({
  posts,
  setPosts,
  users,
  setIsAuthenticated,
  setCurrentUser,
}: PostDetailProps) {
  const commentButtonsActive = true;
  const commentInputRef = useRef<{ [postId: string]: HTMLInputElement | null }>(
    {}
  );
  const [handleCommentButtonToggle] = useCommentButtonLogic(commentInputRef);
  const { id } = useParams<{ id: string }>();
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [handleDropDownOpen, handleDropDownClose, , isActive] = useDropDown();
  const [post, setPost] = useState<Post | null>(null);
  const [
    zoomIn,
    zoomOut,
    zoomLevel,
    toggleFullscreen,
    zoomDisabled,
    isFullscreen,
  ] = useZoomControl();
  const postImageRef = useRef<HTMLImageElement>(null);
  const [imageSize, setImageSize] = useState<{
    width: number | null;
    height: number | null;
  }>({ width: 0, height: 0 });
  const heightThreshold = 947;

  useEffect(() => {
    if (id && commentInputRef.current[id]) {
      commentInputRef.current[id]?.focus();
    }
  }, [id]);

  useEffect(() => {
    const fetchedPost = posts.find((post) => post.id === id);
    if (id) {
      setPost(fetchedPost ?? null);
    } else {
      setPost(null);
    }
  }, [id, posts]);

  const handleImageLoad = () => {
    if (postImageRef.current) {
      const { naturalHeight, naturalWidth } = postImageRef.current;
      setImageSize({
        width: naturalHeight > heightThreshold ? heightThreshold : naturalWidth,
        height:
          naturalHeight > heightThreshold ? heightThreshold : naturalWidth,
      });
    }
  };

  const handleLikeDisplayOpen = (postId: string) => setActivePostId(postId);
  const handleLikeDisplayClose = () => setActivePostId(null);

  if (!post) {
    return <div>Post not found. Please check the URL.</div>;
  }

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  ) as User | null;

  return (
    <div className="post-detail">
      <div className="post-detail-wrapper">
        <div className="left-side-nav-buttons">
          <CloseButton className="post-detail-close-btn" />
          <FacebookLogoButton />
        </div>
        <div className="post-image">
          <div className="post-detail-image-tags" />
          <div className="post-detail-image-container">
            {post.type === "image" ? (
              <img
                ref={postImageRef}
                src={post.image}
                style={{
                  width: imageSize.width ?? 0,
                  height: imageSize.height ?? 0,
                  transform: `scale(${zoomLevel})`,
                }}
                onLoad={handleImageLoad}
                alt=""
              />
            ) : (
              <video className="post-detail-video" controls>
                <source
                  src={post.video}
                  height={1}
                  width={1}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <div className="post-detail-image-controls">
          {post.type === "image" && (
            <button
              className={`zoom-in-btn ${zoomDisabled ? "disabled" : "active"}`}
              onClick={zoomIn}
            >
              <FaSearchPlus />
            </button>
          )}
          {post.type === "image" && (
            <button
              className={`zoom-out-btn ${zoomDisabled ? "active" : "disabled"}`}
              onClick={zoomOut}
            >
              <FaSearchMinus />
            </button>
          )}
          {post.type === "image" && (
            <button>
              <FaTag />
            </button>
          )}
          <button className="fullscreen-btn" onClick={toggleFullscreen}>
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div>
      </div>
      <div
        className={`post-detail-container ${
          isFullscreen ? "active" : "disabled"
        }`}
        key={post.id}
      >
        <div className="post-detail-nav">
          <Menu />
          <Messenger />
          <Notifications />
          <ProfileButton
            currentUser={currentUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        </div>
        <BorderLine />
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
                  <FaEllipsis />
                </div>
              </div>
            </div>
            <div className="post-top-container-bottom">
              {post.type === "image" && (
                <div className="post-description">{post.description}</div>
              )}
            </div>
          </div>
          <div className="post-bottom-container">
            {post.type === "image" &&
              (post.likeCount > 0 ||
                post.commentCount > 0 ||
                post.shareCount > 0) && (
                <div className="like-share-display">
                  <div
                    className={`users-that-liked ${
                      activePostId === post.id ? "active" : "disabled"
                    }`}
                  >
                    {post.usersWhoLiked.map((likedUser) => (
                      <div className="liked-user-display" key={likedUser.id}>
                        {likedUser.username}
                      </div>
                    ))}
                  </div>
                  <div className="post-likes">
                    <div className="like-icons">
                      {post.likeIcons.map((icon, index) => (
                        <div className="img-container" key={index}>
                          <img src={icon} alt="" />
                        </div>
                      ))}
                    </div>
                    <div
                      className={`like-count count ${
                        activePostId === post.id ? "active" : "disabled"
                      }`}
                      onMouseEnter={() => handleLikeDisplayOpen(post.id)}
                      onMouseLeave={handleLikeDisplayClose}
                    >
                      <span>{post.likeCount > 0 ? post.likeCount : ""}</span>
                    </div>
                  </div>
                  <div className="comment-and-share">
                    <div className="comment-count count">
                      <span>
                        {post.commentCount > 0
                          ? `${post.commentCount} comments`
                          : ""}
                      </span>
                    </div>
                    <div className="share-count count">
                      <span>
                        {post.shareCount > 0 ? `${post.shareCount} shares` : ""}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            {post.type === "video" &&
              (post.likeCount > 0 ||
                post.commentCount > 0 ||
                post.viewCount > 0) && (
                <div className="like-share-display">
                  <div
                    className={`users-that-liked ${
                      activePostId === post.id ? "active" : "disabled"
                    }`}
                  >
                    {post.usersWhoLiked.map((likedUser) => (
                      <div className="liked-user-display" key={likedUser.id}>
                        {likedUser.username}
                      </div>
                    ))}
                  </div>
                  <div className="post-likes">
                    <div
                      className={`like-count count ${
                        activePostId === post.id ? "active" : "disabled"
                      }`}
                      onMouseEnter={() => handleLikeDisplayOpen(post.id)}
                      onMouseLeave={handleLikeDisplayClose}
                    >
                      <span>{post.likeCount > 0 ? post.likeCount : ""}</span>
                    </div>
                  </div>
                  <div className="comment-and-share">
                    <div className="comment-count count">
                      <span>
                        {post.commentCount > 0
                          ? `${post.commentCount} comments`
                          : ""}
                      </span>
                    </div>
                    <div className="share-count count">
                      <span>
                        {post.viewCount > 0 ? `${post.viewCount} views` : ""}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            {post.type === "image" &&
              (post.likeCount > 0 ||
                post.commentCount > 0 ||
                post.shareCount > 0) && <BorderLine />}
            {post.type === "video" &&
              (post.likeCount > 0 ||
                post.commentCount > 0 ||
                post.viewCount > 0) && <BorderLine />}
            <div className="post-buttons post-detail-buttons">
              <LikeButton user={currentUser} setPosts={setPosts} post={post} />
              <CommentButton
                setCommentButtonsActive={() =>
                  handleCommentButtonToggle(post.id)
                }
              />
              {post.type === "video" && (
                <ShareButton post={post} className="post-detail-share-btn" />
              )}
              {post.type === "image" && <ImageShareButton />}
            </div>
            <BorderLine />
            {post.commentCount > 0 && (
              <PostComments className="post-detail-comments" post={post} />
            )}
            <WriteComment
              currentUser={currentUser}
              handleDropDownOpen={handleDropDownOpen}
              commentButtonsActive={commentButtonsActive}
              commentInputRef={commentInputRef}
              setPosts={setPosts}
              postId={post.id}
              writeCommentId={post.type === "video" ? "writeCommentVideo" : ""}
              className={`write-comment ${
                post.commentCount > 0 ? "active" : "disabled"
              }`}
            />
          </div>
        </div>
      </div>
      <ProfilesAndPages
        setIsAuthenticated={setIsAuthenticated}
        setCurrentUser={setCurrentUser}
        dropDownClose={handleDropDownClose}
        isActive={isActive}
        users={users}
      />
    </div>
  );
}
