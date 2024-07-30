import React from "react";
import AddresBar from "../AddresBar/AddresBar";
// import styles from './ratesintro.module.css'
import styles from "./rates_intro.module.scss";
export default function RatesIntro() {
  return (
    <section className={styles.ratesIntro}>
      <div className={styles.ratesIntroWrapper}>
        <AddresBar theme="white" />

        <div className={styles.title}>
          <p className={styles.text}>В отличие от других...</p>
          <h2>
            <span>Наш VPN никогда</span>
            <span>не заблокируют!</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
