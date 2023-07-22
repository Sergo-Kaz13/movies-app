import React from "react";
import style from "./Logo.module.css";
import logo from "../../assets/images/video-player.png";

const Logo = () => {
  return (
    <div className={style.blockLogo}>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Logo;
