import React from "react";
import ButtonDefault from "../Buttons/ButtonDefault";
import styles from "./info_company.module.scss";
import Image from "next/image";
export default function InfoCompany() {
  return (
    <div className={styles.infoCompany}>
      <div className={styles.infoCompanyWrapper}>
        <div className={styles.header}>
          <div className={styles.headerContenet}>
            <span className={styles.flag}>
              <Image
                width={39}
                height={35}
                src={"/img/flags/Flag United Kingdom.png"}
                alt="flag"
              />
            </span>
            <span>
              {" "}
              <p>в чём секрет???</p>
            </span>
            <span>
              <p>ответ на главный вопрос...</p>
            </span>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Так почему же нас не заблокируют?</h4>
            <p>
              В protektVPN мы гордимся тем, что предлагаем нашим пользователям
              стабильный и надежный VPN-сервис,
              <span>
                зарегистрированный в Лондоне и защищенный законодательством
                Англии.
              </span>{" "}
            </p>
          </div>

          <div className={styles.card}>
            <h4>Наши сервера постоянно обновляются</h4>
            <p>
              <span>Мы постоянно обновляем и расширяем нашу сеть серверов</span>
              , чтобы гарантировать вам стабильное и быстрое подключение. Это
              обеспечивает надежный доступ к интернету без ограничений, в любой
              точке мира.
            </p>
          </div>
          <ButtonDefault
            title="Стать невидимым в мире веба"
            colorSvg={"#445be7"}
            theme={"blue"}
          />
        </div>
      </div>
    </div>
  );
}
