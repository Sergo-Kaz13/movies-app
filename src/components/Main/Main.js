import React from "react";
import Container from "../Container/Container";
import style from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={style.main}>
      <Container>
        <div className={style.filter}>filter</div>
        <div className={style.mainContent}>{props.children}</div>
      </Container>
    </div>
  );
};

export default Main;
