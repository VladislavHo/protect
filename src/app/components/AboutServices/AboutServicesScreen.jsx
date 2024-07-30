import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";
export default function AboutServicesScreen({title}) {
  return (
    <div className={styles.screenPhone}>
      <h4>{title}</h4>
      <Image
        src={"/img/PhoneScreen.png"}
        width={531}
        height={610}
        alt="phone"
      />
    </div>
  );
}
