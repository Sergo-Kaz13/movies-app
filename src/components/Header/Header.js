import React from "react";
import Logo from "../Logo/Logo";
import Login from "../Login/Login";
import Container from "../Container/Container";
import style from "./Header.module.css";
import Search from "../Search/Search";
import SliderSlick from "../SliderSlick/SliderSlick";

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header_block}>
          <Logo />
          <div className={style.header_interaction}>
            <Search />
            <Login />
          </div>
        </div>
      </Container>
      <div className={style.slider}>
        <SliderSlick />
      </div>
    </header>
  );
};

export default Header;
