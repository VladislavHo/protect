"use client";
import { observer } from "mobx-react-lite";
import styles from "./header.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import state from "../../store/state";
import { useEffect, useRef, useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useScrollPosition from "../../hook/useScrollPosition";
const Header = observer(() => {
  const { activeGreenColor } = state;
  const [activeBurger, setActivBurger] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(true);
  const pathname = usePathname();
  const ref = useRef(null);
  // useScrollPosition(setIsScrollUp)
  const isScroll = useScrollPosition();

  return (
    <haeder
      className={[styles.header, isScroll ? styles.up : styles.down].join(" ")}
      ref={ref}
    >
      <nav
        className={[
          styles.nav,
          styles[pathname == "/" ? "" : "dark"],
          activeGreenColor ? styles.green : "",
        ].join(" ")}
        style={activeBurger ? { backgroundColor: "#eef0ff" } : {}}
      >
        <ul className={styles.itemsListHeader}>
          <li className={styles.logo}>
            <a href="/">
              <Image src="/logo.png" width={40} height={40} alt="logo" />
            </a>
          </li>
          <li className={styles.itemListHeader}>
            <a href="/rates">Тарифы</a>
          </li>
          <li className={styles.itemListHeader}>
            <a href="/company">О компании</a>
          </li>
          <li className={styles.authLink}>
            <a href="">
              <span>Начать пользоваться VPN</span>
              <Image src="/svg/Key.svg" width={24} height={24} alt="arrow" />
            </a>
          </li>
          <li
            className={styles.burger}
            onClick={() => setActivBurger(!activeBurger)}
          >
            <span></span>
            <span></span>
            <span></span>
          </li>
        </ul>

        <BurgerMenu activeBurger={activeBurger} />
      </nav>
    </haeder>
  );
});

export default Header;
