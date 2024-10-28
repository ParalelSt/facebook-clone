import { useCallback, useState } from "react";

const useCopyLogic = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handlePostLinkCopy = useCallback(
    (postId: string) => {
      const baseUrl = window.location.origin.includes("localhost")
        ? "localhost:5173"
        : "https://aronmatoic-fb-clone.netlify.app";

      const link = `${baseUrl}/posts/${postId}`;
      console.log("Copying link:", link);

      navigator.clipboard.writeText(encodeURI(link)).then(() => {
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      });
    },
    [setShowCopied]
  );

  return [handlePostLinkCopy, showCopied] as const;
};

export default useCopyLogic;
