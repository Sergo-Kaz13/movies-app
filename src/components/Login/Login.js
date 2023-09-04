import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getToken } from "../../redux/authenticationReducer";
import login from "../../assets/images/user.png";
import style from "./Login.module.css";

const Login = (props) => {
  const { token, getToken } = props;

  useEffect(() => {
    getToken();
  }, [getToken]);

  const onLoad = (e) => {
    e.preventDefault();

    if (token) {
      window.location.replace(e.target.parentNode.href);
    }
  };

  return (
    <a
      onClick={onLoad}
      href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/`}
      className={style.login}
    >
      <img className={style.loginImg} src={login} alt="login" />
    </a>
  );
};

const mapStateToProps = (state) => ({
  token: state.authenticationReducer.token,
});

export default connect(mapStateToProps, { getToken })(Login);
