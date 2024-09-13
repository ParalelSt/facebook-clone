function useLogOutLogic(
  setIsAuthenticated: (isAuthenticated: boolean) => void
) {
  const handleLogOut = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  };

  return handleLogOut;
}

export default useLogOutLogic;
