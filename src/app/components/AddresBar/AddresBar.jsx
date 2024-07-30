
import styles from "./addresbar.module.scss";
import Image from "next/image";
import {LockSvg, FavoriteSvg} from "../Svg/Svg";


export default function AddresBar({ theme }) {
  return (
    <div className={styles.headerBar}>
      {/* <div className={`${styles.addressBar} ${styles[theme]}`}> */}
      <div className={[styles.addressBar, styles[theme]].join(" ")}>
        <div className={styles.leftComponents}>
          {/* <Image src={"./svg/lock.svg"} width={12} height={12} alt="svg" /> */}
          <LockSvg color={theme === "dark" ? "#27ae60" : "#5d72f3"} />
          <span className={[styles.span, styles[theme]].join(" ")}>protekt.app</span>
        </div>

        <div className={styles.favoritesLogo}>
          {/* <Image src={"./svg/favorite.svg"} width={19} height={18} alt="svg" /> */}
          <FavoriteSvg color={theme === "dark" ? "#27ae60" : "#5d72f3"} />
        </div>
      </div>
      <div className={styles.dots}>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
        <span className={styles.span}></span>
      </div>
    </div>
  );
}
