function useLogOutLogic(
  setIsAuthenticated: (isAuthenticated: boolean) => void
) {
  const handleLogOut = () => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
    localStorage.removeItem("currentUser");
  };

  return handleLogOut;
}

export default useLogOutLogic;
