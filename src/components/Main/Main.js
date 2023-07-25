import React from "react";
import Container from "../Container/Container";
import Sort from "../Sort/Sort";
import style from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={style.main}>
      <Container>
        <div className={style.control}>
          <Sort />
        </div>
        <div className={style.mainContent}>{props.children}</div>
      </Container>
    </div>
  );
};

export default Main;
