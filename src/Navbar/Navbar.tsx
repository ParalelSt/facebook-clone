import LeftNav from "./Left/LeftNav";
import MiddleNav from "./Middle/MiddleNav";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav>
        <LeftNav></LeftNav>
        <MiddleNav></MiddleNav>
      </nav>
    </>
  );
}

export default Navbar;
