import { useNavigate } from "react-router-dom";

function useLogOutLogic(
  setIsAuthenticated: (isAuthenticated: boolean) => void
) {
  const Navigate = useNavigate();

  const handleLogOut = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
  };

  return handleLogOut;
}

export default useLogOutLogic;
