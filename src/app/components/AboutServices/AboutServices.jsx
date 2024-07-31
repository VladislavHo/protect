"use client";
import React from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import styles from "./about.module.scss";
import Image from "next/image";
import AboutServicesScreen from "./AboutServicesScreen";
import useScrollObserver from "../../hook/useScrollObserver";
import ObserverSupportsServises from "./ObserverSupportsServises";

export default function AboutServices() {

  const [widthComponets, setWidthComponets] = React.useState(0);
  const ref = React.useRef(null);


  useScrollObserver(ref, setWidthComponets);

  return (
    <section className={styles.aboutServices}>
      <div className={styles.aboutServicesWrapper}>
        <div className={styles.aboutServicesWrapperObserver} ref={ref} style={{ width: `calc(80% + ${widthComponets}px)` }}>
        <div className={styles.aboutServicesContent}>
          <h2>
            <span>Проще Простого!</span>
            <span> Один Клик до Безопасности!</span>
          </h2>

          <AboutServicesScreen title="Интуитивно понятный дизайн интерфейса" />
          <div className={styles.buttonWrapper}>
            <ButtonDefault
              title="Защита, свобода? Легко! Просто Кликни!"
              colorSvg={"#F5F5F5"}
              theme={"dark"}
            />
          </div>
        <ObserverSupportsServises/>

        </div>
        </div>

      </div>
    </section>
  );
}
