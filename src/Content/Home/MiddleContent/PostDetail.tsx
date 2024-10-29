import { useParams } from "react-router-dom";
import { Posts } from "./MiddleContent";
import { Users } from "App";
import "./PostDetail.scss";
import { FaCompress, FaEllipsis, FaExpand, FaTag } from "react-icons/fa6";
import BorderLine from "Global/components/BorderLine";
import LikeButton from "./LikeButton";
import { PiShareFatLight } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import useDropDown from "Global/hooks/useDropDown";
import { FaSearchMinus, FaSearchPlus } from "react-icons/fa";
import ProfilesAndPages from "./ProfilesAndPages";
import Menu from "Navbar/Right/Menu";
import Notifications from "Navbar/Right/Notifications";
import Messenger from "Navbar/Right/Messenger";
import ProfileButton from "Navbar/Right/ProfileButton";
import CloseButton from "Global/components/Image Carousel/CloseButton";
import FacebookLogoButton from "Global/components/Image Carousel/FacebookLogoButton";
import useZoomControl from "./ZoomControl";
import CopyButton from "./CopyButton";
import PostComments from "./PostComments";
import CommentButton from "./CommentButton";
import WriteComment from "./WriteComment";

interface PostDetailProps {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
  users: Users[];
  user: Users | null;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
}

const PostDetail = ({
  posts,
  setPosts,
  users,
  user,
  setIsAuthenticated,
  setCurrentUser,
}: PostDetailProps) => {
  //Write comment display

  const commentButtonsActive = true;
  const commentInputRef = useRef<{ [postId: string]: HTMLInputElement | null }>(
    {}
  );

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id && commentInputRef.current[id]) {
      commentInputRef.current[id]?.focus();
    }
  }, [id]);

  //Zoom in, out and fullscreen controls
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
  }>({
    width: 0,
    height: 0,
  });

  const heightThreshold = 947;

  const handleImageLoad = () => {
    if (postImageRef.current) {
      setImageSize({
        width:
          postImageRef.current.naturalHeight > heightThreshold
            ? heightThreshold
            : postImageRef.current.naturalWidth,
        height:
          postImageRef.current.naturalHeight > heightThreshold
            ? heightThreshold
            : postImageRef.current.naturalWidth,
      });
    }
  };

  //Like Logic

  const [activePostId, setActivePostId] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [handleDropDownOpen, handleDropDownClose, _, isActive] = useDropDown();

  if (!id) {
    throw new Error("Post ID is undefined");
  }

  const post = posts.find((p) => {
    console.log(`Comparing post.id: "${p.id}" with id: "${id}"`);
    return p.id === id; // Match post by id
  });

  useEffect(() => {
    console.log("Updated post:", post);
  }, [post]);

  if (!post) {
    console.error(`Post not found. Available posts: ${JSON.stringify(posts)}`);
    console.error(`Post ID: ${id}`);
    return <div>Post not found. Please check the URL.</div>;
  }

  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  //Hover on like count to display users who've liked the post

  const handleLikeDisplayOpen = (postId: string) => {
    setActivePostId(postId);
  };

  const handleLikeDisplayClose = () => {
    setActivePostId(null);
  };

  if (!posts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <div className="post-detail-wrapper">
        <div className="left-side-nav-buttons">
          <CloseButton className="post-detail-close-btn"></CloseButton>
          <FacebookLogoButton></FacebookLogoButton>
        </div>
        <div className="post-image">
          <div className="post-detail-image-tags"></div>
          <div className="post-detail-image-container">
            <img
              ref={postImageRef}
              src={post.image}
              style={{
                width: imageSize.width ?? 0,
                height: imageSize.height ?? 0,
                transform: `scale(${zoomLevel})`,
              }}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
        <div className="post-detail-image-controls">
          <button
            className={`zoom-in-btn ${zoomDisabled ? "disabled" : "active"}`}
            onClick={zoomIn}
          >
            <FaSearchPlus></FaSearchPlus>
          </button>
          <button
            className={`zoom-out-btn ${zoomDisabled ? "active" : "disabled"}`}
            onClick={zoomOut}
          >
            <FaSearchMinus></FaSearchMinus>
          </button>
          <button>
            <FaTag></FaTag>
          </button>
          <button className="fullscreen-btn" onClick={() => toggleFullscreen()}>
            {!isFullscreen && <FaExpand></FaExpand>}
            {isFullscreen && <FaCompress></FaCompress>}
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
          <Menu></Menu>
          <Messenger></Messenger>
          <Notifications></Notifications>
          <ProfileButton
            currentUser={currentUser}
            setIsAuthenticated={setIsAuthenticated}
          ></ProfileButton>
        </div>
        <BorderLine></BorderLine>
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
              <div className="post-description">{post.description}</div>
            </div>
          </div>
          <div className="post-bottom-container">
            {(post.likeCount > 0 ||
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
                      <div className={`liked-user-display`} key={likedUser.id}>
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
                    <span>{post.likeCount == 0 ? "" : post.likeCount}</span>
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
            {(post.likeCount > 0 ||
              post.commentCount > 0 ||
              post.shareCount > 0) && <BorderLine></BorderLine>}
            <div className="post-buttons post-detail-buttons">
              <LikeButton user={user} setPosts={setPosts} post={post} />
              <CommentButton />
              <CopyButton post={post}></CopyButton>
              <button className="share-btn">
                <PiShareFatLight />
                <span className="button-text">Share</span>
              </button>
            </div>
            <BorderLine />
            {post.commentCount > 0 && <PostComments post={post} />}
            {post.commentCount > 0 && <div className={`post-comments`}></div>}
            <WriteComment
              currentUser={currentUser}
              handleDropDownOpen={handleDropDownOpen}
              commentButtonsActive={commentButtonsActive}
              commentInputRef={commentInputRef}
              post={post}
              postId={post.id}
            ></WriteComment>
          </div>
        </div>
      </div>
      <ProfilesAndPages
        setIsAuthenticated={setIsAuthenticated}
        setCurrentUser={setCurrentUser}
        dropDownClose={handleDropDownClose}
        isActive={isActive}
        users={users}
      ></ProfilesAndPages>
    </div>
  );
};

export default PostDetail;
