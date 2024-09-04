export const useHandleName = (path: string) => {
  let placeholder: string = "Search Facebook";

  switch (path) {
    case "/":
      return (placeholder = "Search Facebook");
    case "/video":
      return (placeholder = "Search videos");
    case "/marketplace":
      return (placeholder = "Search Marketplace");
    case "/groups":
      return (placeholder = "Search groups");
    case "/games":
      return (placeholder = "Search gaming");
  }

  return placeholder;
};
