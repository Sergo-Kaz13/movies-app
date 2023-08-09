import React from "react";
import { connect } from "react-redux";
import { getToken } from "../../redux/authenticationReducer";
import login from "../../assets/images/user.png";
import style from "./Login.module.css";

const Login = (props) => {
  const { getToken } = props;

  return (
    <div onClick={getToken}>
      <img className={style.login} src={login} alt="login" />
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { getToken })(Login);
