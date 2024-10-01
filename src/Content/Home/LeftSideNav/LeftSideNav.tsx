import BottomContainer from "./BottomContainer";
import "./LeftNavSide.scss";
import TopContainer from "./TopContainer";
import "./TopContainer.scss";
import "./BottomContainer.scss";
import Info from "../../../Global/components/Info/Info";
import "../../../Global/components/Info/Info.scss";
import "../../../Global/GlobalStyles.scss";
import { useState } from "react";

function LeftSideNav() {
  const [scrollVisibleTop, setScrollVisibleTop] = useState(false);
  const [scrollVisibleBottom, setScrollVisibleBottom] = useState(false);

  return (
    <>
      <div
        className={`left-side-nav-container ${
          scrollVisibleTop || scrollVisibleBottom ? "opened" : ""
        }`}
      >
        <TopContainer
          scrollVisibleTop={scrollVisibleTop}
          setScrollVisibleTop={setScrollVisibleTop}
        ></TopContainer>
        <BottomContainer
          scrollVisibleBottom={scrollVisibleBottom}
          setScrollVisibleBottom={setScrollVisibleBottom}
        ></BottomContainer>
        <Info></Info>
      </div>
    </>
  );
}

export default LeftSideNav;
