import React, { useState } from "react";
import styles from "./auth.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Auth = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className={styles.auth_container}>
      <div className={`${styles.grid} ${styles.align__item}`}>
        <div className={styles.login}>
          <div className="auth__logo">
            <h3
              style={{
                color: "white",
                fontSize: "50px",
                fontWeight: 600,
              }}
            >
              Business Soft
            </h3>
          </div>
          <form action="" method="post" className={styles.form}>
            <div className={styles.form__field}>
              <input type="email" placeholder="info@mailaddress.com" />
            </div>

            <div className={styles.password_container}>
              <input
                type={passwordVisible ? "text" : "password"}
                id={styles.password}
                placeholder="••••••••••••"
                style={{ width: "90%", marginBottom: "10%" }}
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className={styles.toggle_password}
                onClick={togglePasswordVisibility}
              />
            </div>

            <div className={styles.form__field}>
              <input type="submit" value="Войти" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
