"use client";
import { observer } from "mobx-react-lite";
import styles from "./header.module.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
import state from "../../store/state";
import { useEffect } from "react";

const Header = observer(() => {
  const { activeGreenColor } = state;

  useEffect(() => {
    // console.log(activeGreenColor, "header");
  }, [activeGreenColor]);

  const pathname = usePathname();
  return (
    <haeder className={styles.header}>
      <nav
        className={[styles.nav, styles[pathname == "/" ? "" : "dark"], activeGreenColor ? styles.green : ""].join(
          " "
        )}
      >
        <ul>
          <li className={styles.logo}>
            <a href="/">
              <Image src="/logo.png" width={40} height={40} alt="logo" />
            </a>
          </li>
          <li>
            <a href="/rates">Тарифы</a>
          </li>
          <li>
            <a href="/company">О компании</a>
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
});

export default Header;
