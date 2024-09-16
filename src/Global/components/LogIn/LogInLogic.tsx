import { useNavigate } from "react-router-dom";
import { Users } from "../../../App";

function useLogInLogic(
  emailOrPhoneValue: string,
  passwordValue: string,
  users: Users[],
  setIsAuthenticated: (isAuthenticated: boolean) => void,
  setCurrentUser: (user: Users | null) => void
) {
  const Navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (user) =>
        (user.email === emailOrPhoneValue ||
          user.phoneNumber === emailOrPhoneValue) &&
        user.password === passwordValue
    );
    if (user) {
      localStorage.setItem("isAuthenticated", "true");
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem("currentUser", JSON.stringify(user));
      Navigate("/");
    } else {
      alert("Invalid email/phone or password");
    }
  };

  return handleLogin;
}

export default useLogInLogic;
