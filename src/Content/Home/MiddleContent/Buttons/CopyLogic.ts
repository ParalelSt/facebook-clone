const useCopyLogic = () => {
  const handlePostLinkCopy = (postId: string) => {
    const baseUrl = window.location.origin.includes("localhost")
      ? "localhost:5173"
      : "https://aronmatoic-fb-clone.netlify.app";

    const link = `${baseUrl}/posts/${postId}`;
    console.log("Copying link:", link);

    navigator.clipboard.writeText(encodeURI(link));
  };

  return [handlePostLinkCopy] as const;
};

export default useCopyLogic;
