import styles from "./button.module.scss";

import { ArrowSvg } from "../Svg/Svg";

export default function ButtonDark({ title, colorSvg, theme }) {
  return (
    <button className={[styles.buttonDefault, styles[theme]].join(" ")}>
      <span>{title}</span>
      <ArrowSvg color={colorSvg} />
    </button>
  );
}
