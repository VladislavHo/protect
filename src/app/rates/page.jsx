import RatesIntro from "../components/RatesIntro/RatesIntro";
import RatesCards from "../components/RatesCards/RatesCards";
import Safety from "../components/Safety/Safety";

import styles from "./rates.module.scss";
import QA from "../components/QA/QA";
export default function Rates() {
  return (
    <div className={styles.rates}>
      <RatesIntro />
      <RatesCards />
      <Safety />
      <QA />
    </div>
  );
}
