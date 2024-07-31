import React from "react";
import styles from "./about_company.module.scss";
import AboutServicesScreen from "../AboutServices/AboutServicesScreen";
import ButtonDefault from "../Buttons/ButtonDefault";
export default function AboutCompany() {
  return (
    <div className={styles.aboutCompany}>
      <div className={styles.aboutCompanyWrapper}>
        <h2>Наша миссия?</h2>
        <div className={styles.screenPhone}>
          <AboutServicesScreen title="Сделать интернет безопаснее и доступнее для всех, защищая вашу приватность и свободу онлайн!" />
        </div>
        <div className={styles.buttonWrapper}>
          <ButtonDefault title="Войти в веб-мир!" colorSvg={"#F5F5F5"} theme={"dark"} />
        </div>
      </div>
    </div>
  );
}
