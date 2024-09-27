import { useState } from "react";
import { Posts } from "./MiddleContent";

const useLikeButtonLogic = (
  post: Posts,
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>
) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);

    setPosts((prevPosts) =>
      prevPosts.map((p) =>
        p.id === post.id
          ? { ...p, likeCount: p.likeCount + (p.likeCount ? -1 : 1) }
          : p
      )
    );
  };

  return [handleLikeToggle, isLiked] as const;
};

export default useLikeButtonLogic;
