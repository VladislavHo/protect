import React from "react";
import styles from "./intro_company.module.scss";
import AddressBar from "../AddresBar/AddresBar";
import ButtonDefault from "../Buttons/ButtonDefault";
import Image from "next/image";
import TitleObserver from "./TitleObserver";
export default function IntroCompany() {
  return (
    <section className={styles.introCompany}>
      <div className={styles.introCompanyWrapper}>
        <AddressBar theme={"blue"} />

        <TitleObserver />
        <div className={styles.introCompanyContent}>
          <div className={styles.info}>
            <h4>У нас есть ключ к безопасному интернету!</h4>
            <p>
              Ваш ключ к свободному и безопасному интернету. Мы обеспечиваем
              анонимный доступ к любым ресурсам, защищая ваши данные передовыми
              технологиями шифрования.
            </p>

            <div className={styles.bg}>
              <div className={styles.lienerWrapper}>
                {/* <Image src={"/img/flow/Flow_blue-liener.png"} width={12} height={100} alt="flow" /> */}
                <div className={styles.liener}></div>
                <div className={styles.circle}></div>
                <div className={styles.liener1}></div>
              </div>
              <div className={styles.keyWrapper}>
                <Image
                  src={"/svg/Key2.svg"}
                  width={35}
                  height={35}
                  alt="flow"
                />
              </div>
            </div>
          </div>

          <div className={styles.info}>
            <div className={styles.bg1}>
              <div className={styles.lienerWrapper}>
                <div className={styles.liener}></div>
                <div className={styles.circle}></div>
              </div>
              <div className={styles.unlockWrapper}>
                <Image
                  src={"/img/Unlock2.png"}
                  width={140}
                  height={155}
                  alt="flow"
                />
              </div>

              <div className={styles.browserWrapper}>
                <Image
                  src={"/svg/Browser_blue.svg"}
                  width={38}
                  height={38}
                  alt="flow"
                />
              </div>
            </div>
            <h4>Безопасный доступ в публичных сетях!</h4>
            <p>
              Безопасный доступ в публичных сетях!protektVPN гарантирует защиту
              вашего подключения даже при использовании общественного Wi-Fi,
              блокируя все угрозы.
            </p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonDefault
            title="Стать невидимым в мире веба"
            colorSvg={"#445be7"}
            theme={"blue"}
          />
        </div>
      </div>
    </section>
  );
}
