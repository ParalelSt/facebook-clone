import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import "./Global/GlobalStyles.scss";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </>
  );
}

export default App;
