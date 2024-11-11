import { useState } from "react";

const useLikeButtonLogic = (initialState = false) => {
  const [isLiked, setIsLiked] = useState(initialState);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  return [handleLikeToggle, isLiked] as const;
};

export default useLikeButtonLogic;
