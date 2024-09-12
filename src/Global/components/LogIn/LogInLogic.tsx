import { useNavigate } from "react-router-dom";

export interface Users {
  user: string;
  email: string;
  phoneNumber: string;
  password: string;
}

function useLogInLogic(
  emailOrPhoneValue: string,
  passwordValue: string,
  users: Users[],
  setIsAuthenticated: (isAuthenticated: boolean) => void
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
      setIsAuthenticated(true);
      Navigate("/");
    } else {
      alert("Invalid email/phone or password");
    }
  };

  return handleLogin;
}

export default useLogInLogic;
