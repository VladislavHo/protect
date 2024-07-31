import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import useScrollObserver from "../../hook/useScrollObserver";
import ButtonDefault from "../Buttons/ButtonDefault";
export default function ObserverSupportsServises() {
  const [widthComponets, setWidthComponets] = React.useState(0);
  const ref = React.useRef(null);
  useScrollObserver(ref, setWidthComponets);
  return (
    <div className={styles.supports}>
      <div
        className={styles.supportsWrapper}
        ref={ref}
        style={{ width: `calc(80% + ${widthComponets}px)` }}
      >
        <div className={styles.textWrapperSupports}>
          <h4>Наша Поддержка всегда на связи и готова помочь!</h4>
        </div>
        <div className={styles.textWrapper}>
          <p>
            Отправьте нам сообщение с вопросом/предложением, и мы с радостью
            поможем!
          </p>
        </div>
        <div className={styles.flowBlueImg}>
          <Image
            src={"/img/flow/Flow_blue_2.png"}
            width={100}
            height={130}
            alt="phone"
          />
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonDefault
            title="Связаться с нами в Telegram"
            colorSvg={"#F5F5F5"}
            theme={"dark"}
          />
        </div>
      </div>
    </div>
  );
}
