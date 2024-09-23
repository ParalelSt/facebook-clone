import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./Global/GlobalStyles.scss";
import { useEffect, useState } from "react";
import PrivateRoute from "./Global/components/PrivateRoute.tsx";
import Home from "./Content/Home/Home.tsx";
import LogIn from "./Global/components/LogIn/LogIn.tsx";

export interface Users {
  user: string;
  email: string;
  phoneNumber: string;
  password: string;
  profilePicture: string;
}

export interface CurrentUser {
  user: string;
  email: string;
  phoneNumber: string;
  password: string;
  id: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  const storedUser = localStorage.getItem("currentUser");

  const [currentUser, setCurrentUser] = useState<Users | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("user");
    if (storedUsers) {
      const parsedUser = JSON.parse(storedUsers);
      setUsers((prevUsers) =>
        prevUsers.find((user) => user.email === parsedUser.email)
          ? prevUsers
          : [...prevUsers, parsedUser]
      );
    }
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  return (
    <>
      <Navbar
        users={users}
        currentUser={currentUser}
        setIsAuthenticated={setIsAuthenticated}
      ></Navbar>
      <Routes>
        <Route
          path="/login"
          element={
            <LogIn
              setUsers={setUsers}
              users={users}
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            ></LogIn>
          }
        />
        <Route
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}></PrivateRoute>
          }
        >
          <Route
            path="/"
            element={<Home currentUser={currentUser} user={currentUser}></Home>}
          ></Route>
          <Route path="/video"></Route>
          <Route path="/marketplace"></Route>
          <Route path="/groups"></Route>
          <Route path="/games"></Route>
          <Route path="/create-account"></Route>
        </Route>
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <Navigate to={"/"}></Navigate>
            ) : (
              <Navigate to={"/login"}></Navigate>
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
