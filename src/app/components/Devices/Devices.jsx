"use client";
import React from "react";
import styles from "./devices.module.scss";
import Image from "next/image";
import { cardDevice } from "../../variables/variables";
import ButtonDefault from "../Buttons/ButtonDefault";
import useScrollObserver from "../../hook/useScrollObserver";
export default function Devices() {
  const [widthComponets, setWidthComponets] = React.useState(0);
  const ref = React.useRef(null);

  useScrollObserver(ref, setWidthComponets);


  
  return (
    <div className={styles.devices}>
      <div className={styles.devicesWrapper} ref={ref} style={{ width: `calc(80% + ${widthComponets}px)` }}>
        <div className={styles.devicesTitleContent}>
          <h2 className={styles.h2}>
            <span>Независимо от устройства,</span>
            <span>Вы Защищены!</span>
          </h2>
        </div>
        <p className={styles.supTitleInfo}>
          <Image
            src="/img/flow/Flow_blue.png"
            width={147}
            height={305}
            alt="svg"
          />
          Наслаждайтесь свободой и безопасностью в Интернете на любом
          устройстве!
        </p>
        <div className={styles.iconFlowWrapper}>
          <Image
            src="/img/flow/Flow_blue_2.png"
            width={100}
            height={130}
            alt="svg"
          />
        </div>
        <div className={styles.chooseDevice}>
          <Image src="/svg/Download.svg" width={54} height={54} alt="svg" />
          <span>Выбери своё устройство!</span>
        </div>
        <div className={styles.cards}>
          {cardDevice.map((item) => (
            <div className={styles.card} key={item.id + Math.random()}>
              <div className={styles.cardInfo}>
                <Image
                  src={`/img/devices/${item.name}.${item.format}`}
                  width={63}
                  height={63}
                  alt={item.name}
                />
                <span>{item.title}</span>
              </div>
              <div className={styles.buttonWrapper1}>
                <ButtonDefault
                  title={`Скачать для ${item.title}`}
                  colorSvg={"#F5F5F5"}
                  theme={"dark"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
