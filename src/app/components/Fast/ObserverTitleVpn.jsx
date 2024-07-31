"use client";
import { useRef } from "react";

import React from 'react'
import styles from './fast.module.scss'
import useScrollObserver from "../../hook/useScrollObserver";


export default function ObserverTitleVpn() {
  const [widthComponets, setWidthComponets] = React.useState(0);

  const ref = useRef(null);

  useScrollObserver(ref, setWidthComponets);


  return (
    <div className={styles.ticketNameWrapper}>
      <div className={styles.ticketName} ref={ref} style={{ width: `calc(80% + ${widthComponets}px)` }}>
        <h2>protektVPN - твой билет в мир безопасного интернета</h2>
      </div>
    </div>
  )
}
