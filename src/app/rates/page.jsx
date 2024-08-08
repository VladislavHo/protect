import IntroRates from "../components/IntroRates/IntroRates";
import RatesCards from "../components/RatesCards/RatesCards";
import Safety from "../components/Safety/Safety";

import styles from "./rates.module.scss";
import QA from "../components/QA/QA";
import RatesCardsWrapper from "../components/RatesCards/RatesCardsWrapper";
export default function Rates() {
  return (
    <div className={styles.rates}>
      <IntroRates />
      <RatesCards />
      <Safety />

      <QA />
    </div>
  );
}
