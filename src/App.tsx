import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./Global/GlobalStyles.scss";
import { useEffect, useState } from "react";
import PrivateRoute from "./Global/components/PrivateRoute.tsx";
import Home from "./Content/Home/Home.tsx";
import LogIn from "./Global/components/LogIn/LogIn.tsx";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated.toString());
  }, [isAuthenticated]);

  return (
    <>
      <Navbar setIsAuthenticated={setIsAuthenticated}></Navbar>
      <Routes>
        <Route
          path="/login"
          element={<LogIn setIsAuthenticated={setIsAuthenticated}></LogIn>}
        ></Route>
        <Route
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}></PrivateRoute>
          }
        >
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/video"></Route>
          <Route path="/marketplace"></Route>
          <Route path="/groups"></Route>
          <Route path="/games"></Route>
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
