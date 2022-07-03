import React from "react";
import styles from "../styles/styles.module.css";

const Login = () => {
  return (
    <div className={styles.loginBox}>
      <h1 className={styles.title}>會員登入</h1>
      <p className={styles.text}>Account</p>
      <input className={styles.area} type="text" />
      <p className={styles.text}>Password</p>
      <input className={styles.area} type="password" />
      <div>
        <button className={styles.forgot}>忘記密碼?</button>
        <button className={styles.login}>登入</button>
      </div>
    </div>
  );
};

export default Login;
