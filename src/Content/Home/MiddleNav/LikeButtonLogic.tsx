import { useState } from "react";

const useLikeButtonLogic = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return [handleLikeToggle, isLiked] as const;
};

export default useLikeButtonLogic;
