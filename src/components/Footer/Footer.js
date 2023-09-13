import React from "react";
import style from "./Footer.module.css";
import iconFacebook from "../../assets/images/icons8-facebook.svg";
import iconMale from "../../assets/images/icons8-gmail.svg";
import iconGithub from "../../assets/images/icons8-github-150.svg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <span className={style.author}>Sergo_Kaz</span>
      <ul className={style.contact}>
        <li>
          <a
            className={style.iconGithub}
            href="https://github.com/Sergo-Kaz13"
            rel="noreferrer"
            target="_blank"
          >
            <img src={iconGithub} alt="" />
          </a>
        </li>
        <li>
          <a
            className={style.iconFacebook}
            href="https://www.facebook.com/profile.php?id=100002496878718"
            rel="noreferrer"
            target="_blank"
          >
            <img src={iconFacebook} alt="facebook" />
          </a>
        </li>
        <li>
          <a
            className={style.iconMail}
            target="_top"
            href="mailto:kazmirchukserhii@gmail.com"
          >
            <img src={iconMale} alt="" />
          </a>
        </li>
      </ul>
      <a
        className={style.footerLogo}
        href="https://www.themoviedb.org/"
        rel="noreferrer"
        target="_blank"
      >
        tmdb
      </a>
    </div>
  );
};

export default Footer;
