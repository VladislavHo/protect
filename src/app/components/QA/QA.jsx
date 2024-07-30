"use client";
import React, { useState } from "react";
import styles from "./qa.module.scss";
import { qaList } from "../../variables/variables";
import ButtonDefault from "../Buttons/ButtonDefault";
import Image from "next/image";
import { CrossSvg } from "../Svg/Svg";
export default function QA() {
  const [openedIndex, setOpenedIndex] = useState(-1);

  const toggleDropdown = (index) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
  };
  return (
    <div className={styles.qa}>
      <div className={styles.qaWrapper}>
        <h2>Частозадаваемые вопросы</h2>

        <div className={styles.questionsList}>
          {qaList.map((item, index) => (

              <div
                // key={(item.id + Math.random()).toString()}
                className={styles.questionsWrapper}
                style={{ height: openedIndex === index ? "190px" : "84px", transition: "height 0.3s ease-in-out" }}
                onClick={() => toggleDropdown(index)}
              >
                <button className={styles.question}>
                  <div className={styles.questionWrapper}>
                    <div className={styles.iconLogo}>
                      <Image
                        src={`/svg/${item.logo.name}.${item.logo.format}`}
                        width={40}
                        height={40}
                        alt={item.logo.name}
                      />
                    </div>
                    <span>{item.question}</span>
                  </div>
                  <div
                    className={`${styles.icon} ${
                      openedIndex === index ? styles.active : ""
                    }`}
                  >
                    <CrossSvg />
                  </div>
                </button>
                <p>{item.answer}</p>
              </div>

          ))}
        </div>
        <div className={styles.buttonWrapper}>
        <ButtonDefault
          title={"Разблокировать доступ в свободный веб-мир!"}
          colorSvg={"#F5F5F5"}
          theme={"dark"}
        />
        </div>

      </div>
    </div>
  );
}
