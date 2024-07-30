
import styles from "./addresbar.module.scss";
import {LockSvg, FavoriteSvg} from "../Svg/Svg";


export default function AddresBar({ theme }) {
  const themeColor = (theme)=>{
    switch (theme) {
      case "white":
        return "#5d72f3";
      case "dark":
        return "#27ae60";
      default:
        return "#c3cbff";
    }
  }
  return (
    <div className={styles.headerBar}>
      <div className={[styles.addressBar, styles[theme]].join(" ")}>
        <div className={styles.leftComponents}>
          <LockSvg color={themeColor(theme)} />
          <span className={[styles.span, styles[theme]].join(" ")}>protekt.app</span>
        </div>
        <div className={styles.favoritesLogo}>
          <FavoriteSvg color={themeColor(theme)} />
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
