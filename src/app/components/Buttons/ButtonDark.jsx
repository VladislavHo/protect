import styles from "./button.module.scss";
import Image from "next/image";
import { ArrowSvg } from "../Svg/Svg";
export default function ButtonDark({ title, colorSvg, theme }) {
  console.log(colorSvg)
  return (
    <button className={styles.buttonDark}>
      <span>{title}</span>
      {/* <Image src={'/svg/arrow-white.svg'} width={40} height={22} alt={'svg'}/> */}

      <ArrowSvg color={colorSvg} />
    </button>
  );
}
