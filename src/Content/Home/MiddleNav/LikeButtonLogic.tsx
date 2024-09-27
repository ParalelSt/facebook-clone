import { useEffect, useState } from "react";
import { Posts } from "./MiddleContent";

const useLikeButtonLogic = (
  post: Posts,
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>
) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {});

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return [handleLikeToggle, isLiked] as const;
};

export default useLikeButtonLogic;
