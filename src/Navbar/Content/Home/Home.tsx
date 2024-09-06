import LeftNavSide from "./LeftSideNav/LeftSideNav";
import RightSideNav from "./RightSideNav/RightSideNav";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <LeftNavSide></LeftNavSide>
      <RightSideNav></RightSideNav>
    </div>
  );
}

export default Home;
