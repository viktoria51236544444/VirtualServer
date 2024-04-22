import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "./detail.module.css"; // Импорт CSS модуля

const Questions = () => {
  const [expanded, setExpanded] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleSection = (index) => {
    setExpanded((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <center>
          <div className={styles.accordian}>
            <div className={styles.sec} onClick={() => toggleSection(0)}>
              <span className={styles.section}>Section 1</span>
              <FontAwesomeIcon
                icon={expanded[0] ? faMinus : faPlus}
                className={styles.icon}
              />
            </div>
            <div
              id="colp1"
              className={styles.collapsable}
              style={{ display: expanded[0] ? "block" : "none" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className={styles.sec} onClick={() => toggleSection(1)}>
              <span className={styles.section}>
                {expanded[1] ? "Section 2" : "Section 2"}
              </span>{" "}
              <FontAwesomeIcon
                icon={expanded[1] ? faMinus : faPlus}
                className={styles.icon}
              />
            </div>
            <div
              id="colp2"
              className={styles.collapsable}
              style={{ display: expanded[1] ? "block" : "none" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className={styles.sec} onClick={() => toggleSection(2)}>
              <span className={styles.section}>
                {expanded[2] ? "Section 3" : "Section 3"}
              </span>{" "}
              <FontAwesomeIcon
                icon={expanded[2] ? faMinus : faPlus}
                className={styles.icon}
              />
            </div>
            <div
              id="colp3"
              className={styles.collapsable}
              style={{ display: expanded[2] ? "block" : "none" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className={styles.sec} onClick={() => toggleSection(3)}>
              <span className={styles.section}>
                {expanded[3] ? "Section 4" : "Section 4"}
              </span>{" "}
              <FontAwesomeIcon
                icon={expanded[3] ? faMinus : faPlus}
                className={styles.icon}
              />
            </div>
            <div
              id="colp4"
              className={styles.collapsable}
              style={{ display: expanded[3] ? "block" : "none" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className={styles.sec} onClick={() => toggleSection(4)}>
              <span className={styles.section}>
                {expanded[4] ? "Section 5" : "Section 5"}
              </span>{" "}
              <FontAwesomeIcon
                icon={expanded[4] ? faMinus : faPlus}
                className={styles.icon}
              />
            </div>
            <div
              id="colp5"
              className={styles.collapsable}
              style={{ display: expanded[4] ? "block" : "none" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>

            <div className={styles.sec} onClick={() => toggleSection(5)}>
              <span className={styles.section}>
                {expanded[5] ? "Section 6" : "Section 6"}
              </span>{" "}
              <FontAwesomeIcon
                icon={expanded[5] ? faMinus : faPlus}
                className={styles.icon}
              />
            </div>
            <div
              id="colp6"
              className={styles.collapsable}
              style={{ display: expanded[5] ? "block" : "none" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Questions;
