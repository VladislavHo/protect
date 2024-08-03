import React from "react";
import Image from "next/image";
import styles from "./burger_menu.module.scss";
export default function BurgerMenu({activeBurger}) {
  return (
    <div className={[styles.navBurgerMenu, !activeBurger ? styles.active : ""].join(' ')}>
      <div className={styles.burgerListWrapper}>
      <ul className={styles.burgerList}>
        <li className={styles.burgerListItem}>
          <a href="/rates">Тарифы</a>
        </li>
        <li className={styles.burgerListItem}>
          <a href="/company">О компании</a>
        </li>
        <li className={styles.authLinkBurger}>
          <a href="#">
            <span>Начать пользоваться VPN</span>
            <Image src="/svg/Key.svg" width={24} height={24} alt="arrow" />
          </a>
        </li>
      </ul>
      </div>

    </div>
  );
}
