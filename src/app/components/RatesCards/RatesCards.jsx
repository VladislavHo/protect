import React from "react";
import { ratesCard } from "../../variables/variables";
import styles from "./rates_cards.module.scss";
import ButtonDefault from "../Buttons/ButtonDefault";
import RatesCardsWrapper from "./RatesCardsWrapper";

export default function RatesCards() {
  function ChangeColor(theme) {
    switch (theme) {
      case "white":
        return styles.white;
      case "blue":
        return styles.blue;
      case "dark":
        return styles.dark;
      default:
        return "";
    }
  }

  return (
    <section className={styles.ratesCards}>
      <div className={styles.ratesCardsWrapper}>
        <h2>
          Собрали для вас самые выгодные тарифы, выбери <span>подходящий!</span>
        </h2>
        <RatesCardsWrapper />
      </div>
    </section>
  );
}

//
//
//
