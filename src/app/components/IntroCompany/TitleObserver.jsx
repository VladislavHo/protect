"use client";
import React, { useRef, useEffect } from "react";
import styles from "./intro_company.module.scss";

export default function TitleObserver() {
  const [widthComponets, setWidthComponets] = React.useState(0);
  const ref = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const position = ref.current.getBoundingClientRect();
      console.log(ref.current.offsetTop);
      if (ref.current.offsetTop >= Math.abs(position.top)) {
        setWidthComponets((ref.current.offsetTop - position.top) * 0.15);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.titleWrapperCompany}>
      <div ref={ref} className={styles.title} style={{ width: `calc(85% + ${widthComponets}px)` }}>
        <h2>
          protektVPN - <span>нас не заблокируют!</span>
        </h2>
      </div>
    </div>
  );
}
