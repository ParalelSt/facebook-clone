import { useCallback, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type commentInputRefType = React.MutableRefObject<{
  [postId: string]: HTMLInputElement | null;
}>;

export const useCommentButtonLogic = (commentInputRef: commentInputRefType) => {
  const [commentInputStates, setCommentInputStates] = useState<{
    [postId: string]: boolean;
  }>({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleCommentButtonToggle = useCallback(
    (postId: string) => {
      setCommentInputStates((prevStates) => ({
        ...prevStates,
        [postId]: true,
      }));

      const currentPath = location.pathname;
      console.log("Current path:", currentPath);

      if (
        currentPath === "/" ||
        currentPath.startsWith("/posts/") ||
        currentPath === `/video/videos/${postId}`
      ) {
        if (commentInputRef.current[postId]) {
          commentInputRef.current[postId]?.focus();
        }
      } else if (currentPath.startsWith("/video")) {
        navigate(`/video/videos/${postId}`);
      } else {
        navigate(`/posts/${postId}`);
      }
    },
    [location.pathname, navigate, commentInputRef]
  );

  return [handleCommentButtonToggle, commentInputStates] as const;
};
