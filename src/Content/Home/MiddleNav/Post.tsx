import { FaEllipsis } from "react-icons/fa6";
import ContentContainer from "../../../Global/components/ContentContainer/ContentContainer";
import { Posts } from "./MiddleContent";
import "./Post.scss";

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
              <div className="like-share-display"></div>
              <div className="post-buttons"></div>
              <div className="post-write-comment"></div>
            </div>
          </div>
        );
      })}
    </ContentContainer>
  );
};

export default Post;
