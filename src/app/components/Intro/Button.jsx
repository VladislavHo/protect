"use client";
import { useEffect, useState } from "react";
import styles from "./intro.module.scss";
import ButtonDefault from "../Buttons/ButtonDefault";

export default function Button() {
  const [widthWindow, setWidthWindow] = useState(0)
  useEffect(()=>{
    setWidthWindow(window.innerWidth)
  }, [widthWindow])

  return (
    <div className={styles.linkWrapper}>
    <ButtonDefault title={widthWindow >= 768 ? "Разблокировать доступ в свободный веб-мир!": "Разблокировать веб-мир"} colorSvg={"#F5F5F5"} theme={"dark"}/>
  </div>
  )
}
