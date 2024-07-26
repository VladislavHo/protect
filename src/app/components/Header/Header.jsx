// import React from "react"
import styles from "./header.module.scss";
import Image from "next/image";
export default function Header() {
  return (
    <haeder className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.logo}>
            <a href="">
              <Image src="/logo.png" width={40} height={40} alt="logo" />
            </a>
          </li>
          <li>
            <a href="">Тарифы</a>
          </li>
          <li>
            <a href="">О компании</a>
          </li>
          <li className={styles.authLink}>
            <a href="">
              <span>Начать пользоваться VPN</span>
              <Image src="/svg/Key.svg" width={24} height={24} alt="arrow" />
            </a>
          </li>
        </ul>
      </nav>
    </haeder>
  );
}
