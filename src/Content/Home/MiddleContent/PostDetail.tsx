import { useParams } from "react-router-dom";
import { Posts } from "./MiddleContent";
import { Users } from "App";
import "./PostDetail.scss";
import {
  FaCamera,
  FaCaretDown,
  FaEllipsis,
  FaFileImage,
} from "react-icons/fa6";
import BorderLine from "Global/components/BorderLine";
import LikeButton from "./LikeButton";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiLinkM } from "react-icons/ri";
import { PiShareFatLight } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import useDropDown from "Global/hooks/useDropDown";
import { FaSmile, FaSmileBeam, FaStickyNote } from "react-icons/fa";
import ProfilesAndPages from "./ProfilesAndPages";
import Menu from "Navbar/Right/Menu";
import Notifications from "Navbar/Right/Notifications";
import Messenger from "Navbar/Right/Messenger";
import ProfileButton from "Navbar/Right/ProfileButton";
import CloseButton from "Global/components/Image Carousel/CloseButton";
import FacebookLogoButton from "Global/components/Image Carousel/FacebookLogoButton";
import { BiSolidSend } from "react-icons/bi";

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
  const commentInputRef = useRef<HTMLInputElement>(null);
  const [commentInputActive, setCommentInputActive] = useState(false);

  const handleInputChange = () => {
    if (commentInputRef.current?.value) {
      setCommentInputActive(true);
    } else {
      setCommentInputActive(false);
    }
  };

  //Like Logic

  const [activePostId, setActivePostId] = useState<string | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [handleDropDownOpen, handleDropDownClose, _, isActive] = useDropDown();

  const { id } = useParams<{ id: string }>();

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
    <div className="post-detail-wrapper">
      <div className="left-side-nav-buttons">
        <CloseButton className="post-detail-close-btn"></CloseButton>
        <FacebookLogoButton></FacebookLogoButton>
      </div>
      <div className="post-image">
        <a href="#">
          <img src={post.image} alt="" />
        </a>
      </div>
      <div className="post-detail-container" key={post.id}>
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
            <div className="post-buttons">
              <LikeButton
                user={user}
                setPosts={setPosts}
                post={post}
              ></LikeButton>
              <button className="comment-btn">
                <IoChatbubbleOutline />
                <span>Comment</span>
              </button>
              <button className="copy-btn btn">
                <RiLinkM />
                <span>Copy</span>
              </button>
              <button className="share-btn">
                <PiShareFatLight />
                <span>Share</span>
              </button>
            </div>
            <BorderLine></BorderLine>
            {post.commentCount > 0 && <div className={`post-comments`}></div>}
            <div className="post-detail-write-comment">
              <div className="post-detail-write-comment-top">
                <div className="user-profile" onClick={handleDropDownOpen}>
                  <img src={currentUser?.profilePicture} alt="" />
                  <div className="caret-container">
                    <FaCaretDown></FaCaretDown>
                  </div>
                </div>
                <input
                  placeholder={`Comment as ${currentUser?.user}`}
                  type="text"
                  ref={commentInputRef}
                  onChange={handleInputChange}
                />
              </div>
              <div className="post-detail-write-comment-bottom">
                <div className="comment-buttons">
                  <FaSmileBeam />
                  <FaSmile />
                  <FaCamera />
                  <FaFileImage />
                  <FaStickyNote />
                </div>
                <div
                  className={`post-comment-button ${
                    commentInputActive ? "active" : "disabled"
                  }`}
                >
                  <BiSolidSend />
                </div>
              </div>
            </div>
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
