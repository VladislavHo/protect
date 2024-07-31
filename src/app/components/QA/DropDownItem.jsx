import React from "react";
import styles from "./qa.module.scss";
import Image from "next/image";
import { CrossSvg } from "../Svg/Svg";
import { useInView } from "react-intersection-observer";

export default function DropDownItem({
  item,
  index,
  openedIndex,
  toggleDropdown,
}) {
  const { ref, inView } = useInView({
    threshold: 1,

    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={styles.questionsWrapper}
      style={{
        opacity: inView ? 1 : 0,
        height: openedIndex === index ? "190px" : "84px",
        transition: "all 0.5s ease-in-out",
      }}
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
  );
}
