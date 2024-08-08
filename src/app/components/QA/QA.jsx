"use client";
import React, { useState } from "react";
import styles from "./qa.module.scss";
import { qaList } from "../../variables/variables";
import ButtonDefault from "../Buttons/ButtonDefault";
import { useInView } from "react-intersection-observer";
import DropDownItem from "./DropDownItem";
export default function QA() {
  const [openedIndex, setOpenedIndex] = useState(-1);
  const toggleDropdown = (index) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
  };


 const { ref, inView } = useInView({
    threshold: 0.5,
 })



  return (
    <div className={styles.qa}>
      <div className={styles.qaWrapper}>
        <h2>Часто задаваемые вопросы</h2>

        <div className={styles.questionsList}>
          {qaList.map((item, index) => (

            <DropDownItem
              key={item.id}
              item={item}
              index={index}
              openedIndex={openedIndex}
              toggleDropdown={toggleDropdown}
            />

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
