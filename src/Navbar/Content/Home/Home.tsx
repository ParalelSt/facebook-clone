import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";
import MiddleNav from "./MiddleNav/MiddleNav";

function Home() {
  return (
    <div className="home">
      <LeftNavSide></LeftNavSide>
      <MiddleNav></MiddleNav>
      <RightSideNav></RightSideNav>
    </div>
  );
}

export default Home;
