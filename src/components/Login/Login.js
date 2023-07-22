import React from "react";
import login from "../../assets/images/user.png";
import style from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <img className={style.login} src={login} alt="login" />
    </div>
  );
};

export default Login;
