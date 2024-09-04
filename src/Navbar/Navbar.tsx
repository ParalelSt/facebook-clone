import LeftNav from "./Left/LeftNav";
import MiddleNav from "./Middle/MiddleNav";
import "./Navbar.scss";
import RightNav from "./Right/RightNav";

function Navbar() {
  return (
    <>
      <nav>
        <LeftNav></LeftNav>
        <MiddleNav></MiddleNav>
        <RightNav></RightNav>
      </nav>
    </>
  );
}

export default Navbar;
