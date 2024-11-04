import { useParams } from "react-router-dom";
import { Posts } from "./MiddleContent";
import { Users } from "App";
import "./PostDetail.scss";
import { FaCompress, FaEllipsis, FaExpand, FaTag } from "react-icons/fa6";
import BorderLine from "Global/components/BorderLine";
import LikeButton from "./LikeButton";
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
import ShareButton from "./ShareButton";
import { Videos } from "Content/Video/Video";

interface PostDetailProps {
  posts: Posts[] | Videos[];
  setPosts: React.Dispatch<React.SetStateAction<(Posts | Videos)[]>>;
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

  const [post, setPost] = useState<Posts | Videos | null>(null);

  useEffect(() => {
    // Log the available posts and the ID being searched
    console.log("Available posts:", posts);
    console.log("Searching for post ID:", id);

    const fetchedPost = posts.find((post) => post.id === id) as
      | Posts
      | Videos
      | undefined;
    console.log("Fetched post:", fetchedPost); // Log the fetched post

    setPost(fetchedPost || null); // Set to null if undefined
  }, [id, posts]);

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
            {post && "description" in post && (
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
            )}
            {post && "video" in post && (
              <video className="video" controls>
                <source src={post.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
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
              {post && "description" in post && (
                <div className="post-description">{post.description}</div>
              )}
            </div>
          </div>
          <div className="post-bottom-container">
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
            {post &&
              "description" in post &&
              (post.likeCount > 0 ||
                post.commentCount > 0 ||
                post.shareCount > 0) && <BorderLine></BorderLine>}
            <div className="post-buttons post-detail-buttons">
              <LikeButton user={user} setPosts={setPosts} post={post} />
              <CommentButton />
              <CopyButton post={post}></CopyButton>
              <ShareButton></ShareButton>
            </div>
            <BorderLine />
            {post.commentCount > 0 && (
              <PostComments className={"post-detail-comments"} post={post} />
            )}
            <WriteComment
              currentUser={currentUser}
              handleDropDownOpen={handleDropDownOpen}
              commentButtonsActive={commentButtonsActive}
              commentInputRef={commentInputRef}
              setPosts={setPosts}
              postId={post.id}
              className={`write-comment ${
                post.commentCount > 0 ? "active" : "disabled"
              }`}
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
