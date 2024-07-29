// import React from "react";
import Image from "next/image";
import styles from "./intro.module.scss";
import ButtonDark from "../Buttons/ButtonDark";
export default function Intro() {
  return (
    <>
      <div className={styles.intro}>
        <div className={styles.title}>
          <div className={styles.flowIntroLeft}>
            <Image src={"/img/flow/Flow-2.png"} width={75} height={169} alt="flow"/>
            <div className={styles.text}>
              <span className={styles.span}>Блокировки</span>

              <span className={styles.span}>Ограничения</span>
            </div>
            <Image src="/img/flow/Flow-1.png" width={75} height={169} alt="flow"/>

          </div>
          <div className={styles.flowIntroRight}>
          <Image src="/img/flow/Flow.png" width={196} height={200} alt="flow"/>
          </div>
          <h1 className={styles.h1}>
            <span className={styles.span}>VPN, который</span>
            <span className={styles.span}>не заблокируют!</span>
          </h1>
          <p className={styles.subTitle}>
            Блокировки? Какие блокировки? Откройте мир свободного веба с
            protektVPN!
          </p>
        </div>

        <div className={styles.linkWrapper}>
          {/* <a className={styles.link} href="#">
            <span>Разблокировать доступ в свободный веб-мир!</span>
            <Image src="/svg/arrow-white.svg" width={50} height={50} alt="arrow"/>
          </a> */}
          <ButtonDark title="Разблокировать доступ в свободный веб-мир!" />
        </div>
      </div>
    </>
  );
}
