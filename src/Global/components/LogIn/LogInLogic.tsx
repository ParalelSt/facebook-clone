import { useNavigate } from "react-router-dom";
import { Users } from "../../../App";
import bcrypt from "bcryptjs";

function useLogInLogic() {
  const Navigate = useNavigate();

  const handleLogin = async (
    emailOrPhoneValue: string,
    passwordValue: string,
    users: Users[],
    setIsAuthenticated: (isAuthenticated: boolean) => void,
    setCurrentUser: (user: Users | null) => void
  ) => {
    const user = users.find(
      (user) =>
        user.email === emailOrPhoneValue ||
        user.phoneNumber === emailOrPhoneValue
    );
    if (user) {
      const isPasswordValid = await bcrypt.compare(
        passwordValue,
        user.password
      );

      console.log(isPasswordValid);

      if (isPasswordValid) {
        localStorage.setItem("isAuthenticated", "true");
        setCurrentUser(user);
        setIsAuthenticated(true);
        localStorage.setItem("currentUser", JSON.stringify(user));
        Navigate("/");
      }
    } else {
      alert("Invalid email/phone or password");
    }
  };

  return handleLogin;
}

export default useLogInLogic;
