"use client"

import React from "react";
import styles from "./about_company.module.scss";
import AboutServicesScreen from "../AboutServices/AboutServicesScreen";
import ButtonDefault from "../Buttons/ButtonDefault";
import useScrollObserver from "../../hook/useScrollObserver";
export default function AboutCompany() {
  const [widthComponets, setWidthComponets] = React.useState(0);
  const [widthComponets1, setWidthComponets2] = React.useState(0);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);


  useScrollObserver(ref1, setWidthComponets);
  useScrollObserver(ref2, setWidthComponets2);



  return (
    <div className={styles.aboutCompany}>
      <div className={styles.aboutCompanyWrapper} ref={ref1} style={{ width: `calc(80% + ${widthComponets}px)` }}>
        <div className={styles.aboutCompanyWrapperObserver} >
          <h2>Наша миссия?</h2>
          <div className={styles.screenPhone}>
            <div className={styles.screenPhoneWrapper} ref={ref2} style={{ width: `calc(80% + ${widthComponets1}px)` }}>

            <AboutServicesScreen title="Сделать интернет безопаснее и доступнее для всех, защищая вашу приватность и свободу онлайн!" />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <ButtonDefault
              title="Войти в веб-мир!"
              colorSvg={"#F5F5F5"}
              theme={"dark"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
