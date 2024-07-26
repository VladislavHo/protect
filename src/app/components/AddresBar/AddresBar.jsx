import styles from "./addresbar.module.css";
import Image from "next/image";
export default function AddresBar() {
  return (
    <div className={styles.headerBar}>
      <div className={styles.addressBar}>
        <div className={styles.leftComponents}>
          <Image src={"./svg/lock.svg"} width={12} height={12} alt="svg" />
          <span className={styles.span}>protekt.app</span>
        </div>

        <div className={styles.favoritesLogo}>
          <Image src={"./svg/favorite.svg"} width={19} height={18} alt="svg" />
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
