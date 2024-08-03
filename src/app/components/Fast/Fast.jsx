"use client";
import React, { useEffect, useRef } from "react";
import styles from "./fast.module.scss";
import Image from "next/image";
import AddresBar from "../AddresBar/AddresBar";
import { flags } from "../../variables/variables";
import ButtonDefault from "../Buttons/ButtonDefault";
import ObserverTitleFast from "./ObserverTitleFast";
import ObserverTitleVpn from "./ObserverTitleVpn";
import { observer } from "mobx-react-lite";
import { useInView } from "react-intersection-observer";
import changeHeaderPosition from "../../hook/changeHeaderPosition";
import state from "../../store/state";
const Fast = observer(() => {
  const { changeOnDarkPosition } = state;
  // changeHeaderPosition({ref, changeOnDarkPosition});

  const { ref, inView, entry } = useInView({
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

  return (
    <section className={styles.fast} ref={ref}>
      <div className={styles.fastLayout}>
        <AddresBar theme={"dark"} />
        <div className={styles.speed}>
          <div className={styles.titleWrapperFast}>
            <span className={styles.span}>Быстрый.</span>
          </div>

          <div
            className={styles.circleBg}
            style={{ backgroundImage: "url(./img/circle-bg.png)" }}
          >
            <div
              className={styles.circle}
              style={{ backgroundImage: "url(./img/circle-gradient.png)" }}
            >
              <div className={styles.interiorWrapper}>
                <div className={styles.center}>
                  {/* img */}
                  <Image
                    src={"./svg/speed_arrow.svg"}
                    width={104}
                    height={104}
                    alt="svg"
                  />
                  <span className={styles.speedName}>Мбит/сек</span>
                </div>

                <div className={styles.speedValueWrapper}>
                  <span className={styles.speedValue}>150</span>
                  <span className={styles.speedValue}>200</span>
                  <span className={styles.speedValue}>250</span>
                  <span className={styles.speedValue}>300</span>
                  <span className={styles.speedValue}>350</span>
                  <span className={styles.speedValue}>400</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.titleWrapperPowerful}>
            <span className={styles.span}>Мощный.</span>
          </div>
        </div>

        <div className={styles.servers}>
          <ObserverTitleFast />

          <div className={styles.flags}>
            <div className={styles.dottedBG}></div>
            {flags.map((flag) => (
              <div className={styles.flag}>
                <Image
                  key={flag.id}
                  src={`${flag.src}/${flag.name}.${flag.format}`}
                  width={80}
                  height={80}
                  alt="flag"
                />
              </div>
            ))}
          </div>
        </div>

        <ObserverTitleVpn />

        <div className={styles.connections}>
          <div className={styles.connectionsWrapper}>
            <Image
              src={"/img/flow/Flow_green_1.png"}
              width={411}
              height={64}
              alt={"flow"}
            />
            <div className={styles.icon}>
              <div className={styles.iconWrapper}>
                <Image
                  src={"/svg/Shield.svg"}
                  width={35}
                  height={35}
                  alt={"flow"}
                />
              </div>

              <div className={styles.iconWrapper}>
                <Image
                  src={"/svg/Globe.svg"}
                  width={35}
                  height={35}
                  alt={"flow"}
                />
              </div>
            </div>
            <Image
              src={"/img/flow/Flow_green_2.png"}
              width={403}
              height={89}
              alt={"flow"}
            />
          </div>
          <div className={styles.wrapperButton}>
            <ButtonDefault
              title={"Открыть веб-мир с ProtektVPN!"}
              colorSvg={"#ABFFCF"}
              theme={"green"}
            />
          </div>
          <Image
            src={"/img/flow/Flow_green_3.png"}
            width={439}
            height={170}
            alt={"flow"}
            className={styles.greenFlow}
          />
        </div>
      </div>
    </section>
  );
});
export default Fast;
