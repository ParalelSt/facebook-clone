import {
  FaCamera,
  FaCaretDown,
  FaEllipsis,
  FaFileImage,
} from "react-icons/fa6";
import ContentContainer from "../../../Global/components/ContentContainer/ContentContainer";
import { Posts } from "./MiddleContent";
import "./Post.scss";
import BorderLine from "../../../Global/components/BorderLine";
import { AiOutlineLike } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiLinkM } from "react-icons/ri";
import { PiShareFatLight } from "react-icons/pi";
import { FaSmile, FaSmileBeam, FaStickyNote } from "react-icons/fa";
import { Users } from "../../../App";
import ProfilesAndPages from "./ProfilesAndPages";

interface PostProps {
  posts: Posts[];
  users: Users[];
}

const Post = ({ posts, users }: PostProps) => {
  return (
    <>
      <ContentContainer>
        {posts.map((post) => {
          return (
            <div className="content" key={post.id}>
              <div className="post-top-container">
                <div className="post-top-container-top">
                  <div className="post-top-left">
                    <div className="post-top-left-profile">
                      <img src={post.profilePicture} alt="" />
                      {post.status === "online" && (
                        <div className="online-dot"></div>
                      )}
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
                <div className="post-bottom-image">
                  <img src={post.image} alt="" />
                  <BorderLine></BorderLine>
                </div>

                <div className="like-share-display">
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
                    <div className="like-count count">
                      {post.likeCount == 0 ? "" : post.likeCount}
                    </div>
                  </div>
                  <div className="comment-and-share">
                    <div className="comment-count count">
                      {post.commentCount !== 0
                        ? post.commentCount + " " + `comments`
                        : ""}
                    </div>
                    <div className="share-count count">
                      {post.commentCount !== 0
                        ? post.shareCount + " " + `share`
                        : ""}
                    </div>
                  </div>
                </div>

                {(post.likeCount > 0 ||
                  post.commentCount > 0 ||
                  post.shareCount > 0) && <BorderLine></BorderLine>}
                <div className="post-buttons">
                  <button className="like-btn">
                    <AiOutlineLike />
                    <span>Like</span>
                  </button>
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
                {post.commentCount > 0 && <BorderLine></BorderLine>}
                {post.commentCount > 0 && (
                  <div className={`post-comments`}></div>
                )}
                <div className="post-write-comment">
                  <div className="post-comment-left">
                    <img src={post.profilePicture} alt="" />
                    <div className="caret-container">
                      <FaCaretDown></FaCaretDown>
                    </div>
                  </div>
                  <div className="post-comment-right">
                    <input
                      placeholder={`Comment as ${post.username}`}
                      type="text"
                    />
                    <div className="comment-btns">
                      <FaSmileBeam />
                      <FaSmile />
                      <FaCamera />
                      <FaFileImage />
                      <FaStickyNote />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ContentContainer>
      <ProfilesAndPages users={users}></ProfilesAndPages>
    </>
  );
};

export default Post;
