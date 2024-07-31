import React from "react";
import styles from "./intro_company.module.scss";
import AddressBar from "../AddresBar/AddresBar";
import ButtonDefault from "../Buttons/ButtonDefault";
import Image from "next/image";

export default function IntroCompany() {
  return (
    <section className={styles.introCompany}>
      <div className={styles.introCompanyWrapper}>
        <AddressBar theme={"blue"} />

        <div className={styles.title}>
          <h2>
            protektVPN - <span>нас не заблокируют!</span>
          </h2>
        </div>
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
                  width={50}
                  height={50}
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
                  src={"/img/Unlock.png"}
                  width={100}
                  height={115}
                  alt="flow"
                />
              </div>

              <div className={styles.browserWrapper}>
                <Image src={"/svg/Browser_blue.svg"} width={38} height={38} alt="flow"/>
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
