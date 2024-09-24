import { FaEllipsis } from "react-icons/fa6";
import ContentContainer from "../../../Global/components/ContentContainer/ContentContainer";
import { Posts } from "./MiddleContent";
import "./Post.scss";
import BorderLine from "../../../Global/components/BorderLine";
import { AiOutlineLike } from "react-icons/ai";
import { IoChatbubbleOutline } from "react-icons/io5";
import { RiLinkM } from "react-icons/ri";
import { PiShareFatLight } from "react-icons/pi";

interface PostProps {
  posts: Posts[];
}

const Post = ({ posts }: PostProps) => {
  return (
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
                  <div className="like-count">{post.likeCount}</div>
                </div>
                <div className="comment-and-share">
                  <div className="comment-count">
                    {post ? post.commentCount + " " + `comments` : ""}
                  </div>
                  <div className="share-count">
                    {post ? post.shareCount + " " + `share` : ""}
                  </div>
                </div>
              </div>

              <BorderLine></BorderLine>
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
              <div className={`post-write-comment`}></div>
            </div>
          </div>
        );
      })}
    </ContentContainer>
  );
};

export default Post;
