// import React from 'react'
"use client";
import React, { useEffect, useRef } from "react";
import styles from "./safety.module.scss";
import AddresBar from "../AddresBar/AddresBar";
import Image from "next/image";
import ButtonDefault from "../Buttons/ButtonDefault";
import useScrollObserver from "../../hook/useScrollObserver";
import { observer } from "mobx-react-lite";
import state from "../../store/state";

import changeHeaderPosition from "../../hook/changeHeaderPosition";
import { InView, useInView } from "react-intersection-observer";

const Safety = observer(() => {
  const [widthComponets, setWidthComponets] = React.useState(0);
  const { changeOnDarkPosition } = state;
  const ref = useRef(null);

  const {
    ref: refSection,
    inView,
    entry,
  } = useInView({
    rootMargin: "0px",
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });

  useEffect(() => {
    console.log(inView);
    if (inView && entry?.boundingClientRect.top <= 200) {
      state.changeOnDarkPosition(true);
    } else {
      state.changeOnDarkPosition(false);
    }
  }, [inView, entry]);

  // const refSection = useRef(null);

  useScrollObserver(ref, setWidthComponets);
  // changeHeaderPosition({ ref: refSection, changeOnDarkPosition });
  return (
    <section className={styles.safety} ref={refSection}>
      <div className={styles.safetyWrapper}>
        <div className={styles.safetyContent}>
          <AddresBar theme={"dark"} />
          <div className={styles.titleWrapper}>
            <div
              className={styles.title}
              ref={ref}
              style={{ width: `calc(80% + ${widthComponets}px)` }}
            >
              <h2>
                <span>Безопасность, которой Вы можете</span>
                <span>Доверять!</span>
              </h2>
            </div>
          </div>

          <div className={styles.personalInfo}>
            <div className={styles.card}>
              <h4>Защита Личной Информации</h4>

              <p>
                C ProtektVPN ваши личные данные, пароли и финансовая информация
                остаютсяв безопасности от хакеров и слежки.
              </p>

              <div className={styles.bg}>
                <Image
                  className={styles.flowLiener}
                  src={"/img/flow/Flow_liener_green.png"}
                  width={227}
                  height={17}
                  alt="svg"
                />
                <div className={styles.logo}>
                  <Image
                    src={"/svg/Touch ID.svg"}
                    width={43}
                    height={43}
                    alt="svg"
                  />
                </div>
                <Image
                  className={styles.flowLienerDashed}
                  src={"/img/flow/Flow_dashed_green.png"}
                  width={17}
                  height={132}
                  alt="svg"
                />
              </div>
            </div>

            <div className={styles.card}>
              <h4>Безопасный Доступ в Публичных Сетях</h4>

              <p>
                ProtektVPN гарантирует защиту вашего подключения даже при
                использовании общественного Wi-Fi, блокируя все угрозы
              </p>
              <div className={styles.bg2}>
                <Image
                  className={styles.flowLienerBig}
                  src={"/img/flow/Flow_dashed_big_liener.png"}
                  width={317}
                  height={17}
                  alt="svg"
                />
                <div className={styles.logoUnlockWrapper}>
                  <Image
                    className={styles.unlockLogo}
                    src={"/img/Unlock.png"}
                    width={110}
                    height={110}
                    alt="unlock"
                  />
                </div>
                <Image
                  className={styles.flowLienerDark}
                  src={"/img/flow/Flow_liener_dark.png"}
                  width={17}
                  height={117}
                  alt="svg"
                />
              </div>
            </div>
          </div>

          <div className={styles.anonymity}>
            <div className={styles.info}>
              <h4>Анонимность и Конфиденциальность</h4>
              <p>
                Обеспечивает полную анонимность в Интернете, скрывая ваш
                IP-адрес и личную информацию от посторонних глаз
              </p>
            </div>
            <div className={styles.comment}>
              <span>Shh...</span>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonDefault
              title={"Стать невидимым в мире веба"}
              colorSvg={"#F5F5F5"}
              theme={"green"}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Safety;
