import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./Global/GlobalStyles.scss";
import Home from "./Navbar/Content/Home/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
