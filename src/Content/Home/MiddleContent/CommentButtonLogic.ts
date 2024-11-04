import { useRef, useState } from "react";

export const useCommentButtonLogic = () => {
  const [commentInputStates, setCommentInputStates] = useState<{
    [postId: string]: boolean;
  }>({});

  const commentInputRef = useRef<{ [postId: string]: HTMLInputElement | null }>(
    {}
  );

  const handleCommentButtonToggle = (postId: string) => {
    setCommentInputStates((prevStates) => ({
      ...prevStates,
      [postId]: true,
    }));

    if (commentInputRef.current[postId]) {
      commentInputRef.current[postId].focus();
    }
  };

  return [
    handleCommentButtonToggle,
    commentInputRef,
    commentInputStates,
  ] as const;
};
