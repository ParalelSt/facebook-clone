import BottomContainer from "./BottomContainer";
import "./LeftNavSide.scss";
import TopContainer from "./TopContainer";
import "./TopContainer.scss";
import "./BottomContainer.scss";
import Info from "../../../../Global/components/Info/Info";
import "../../../../Global/components/Info/Info.scss";
import "../../../../Global/GlobalStyles.scss";

function LeftSideNav() {
  return (
    <>
      <div className="container">
        <TopContainer></TopContainer>
        <BottomContainer></BottomContainer>
        <Info></Info>
      </div>
    </>
  );
}

export default LeftSideNav;
