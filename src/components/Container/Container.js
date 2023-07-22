import React from "react";
import style from "../Container/Container.module.css";

const Container = (props) => {
  return <div className={style._container}>{props.children}</div>;
};

export default Container;
