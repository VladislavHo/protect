"use client";
import React, {  useRef } from "react";
import styles from "./fast.module.scss";
import Image from "next/image";
import useScrollObserver from "../../hook/useScrollObserver";

export default function ObserverTitleFast() {
  const [widthComponets, setWidthComponets] = React.useState(0);


  const ref = useRef(null);

  useScrollObserver(ref, setWidthComponets);

  return (
    <div className={styles.titleServiseWrapper}>
      <div
        className={styles.titleServers}
        ref={ref}
        style={{ width: `calc(80% + ${widthComponets}px)` }}
      >
        <Image width={48} height={48} src="./svg/Browser.svg" alt="svg" />
        <h2>Надёжные сервера</h2>
      </div>
    </div>
  );
}
