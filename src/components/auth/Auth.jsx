import React, { useEffect, useState } from "react";
import styles from "./auth.module.css";
import Lock from "./assets/lock.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="50"
    height="50"
    fill="#435ebe"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const Auth = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          color: {
            value: "#435EBE",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              width: 80,
              height: 80,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#7c8db5",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 300,
              rotateY: 900,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 100,
              size: 20,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: 6, // Initial number of particles when clicked
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#0000",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover",
        },
      });
    }
  }, []);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      toast.error("Пожалуйста, заполните все поля.");
    } else {
      // Проверка других условий, например, валидация email и пароля
      // Если не прошли валидацию, отображаем соответствующее сообщение об ошибке
      toast.error("Пожалуйста, введите правильный email и пароль.");
    }
  };
  return (
    <div className={styles.auth_container}>
      <div id={styles.login_box}>
        <div className={styles.logo}>
          {/* <div style={{ marginLeft: "40%" }}>
            <UserIcon />
          </div> */}
          <h1 className={styles.logo_caption}>Business Soft</h1>
        </div>
        <div className={styles.controls}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.form_control}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.form_control}
            />
            <button
              type="submit"
              className={`${styles.btn} ${styles.btn_default} ${styles.btn_block} ${styles.btn_custom}`}
            >
              Войти
            </button>
          </form>
        </div>
      </div>

      <div id="particles-js"></div>

      <ToastContainer />
    </div>
  );
};

export default Auth;
