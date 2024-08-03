// import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerNav}>
            <ul>
              <li className={styles.title}>Скачать для:</li>
              <li className={styles.list}>
                <a href="#">iOS</a>
              </li>
              <li className={styles.list}>
                <a href="#">Android</a>
              </li>
              <li className={styles.list}>
                <a href="#">MacOs</a>
              </li>
              <li className={styles.list}>
                <a href="#">Windows</a>
              </li>
            </ul>
            <ul>
              <li className={styles.title}>Навигация</li>
              <li className={styles.list}>
                <a href="#">О продукте</a>
              </li>
              <li className={styles.list}>
                <a href="#">Тарифы</a>
              </li>
              <li className={styles.list}>
                <a href="#">О компании</a>
              </li>
              <li className={styles.list}>
                <a href="#">Личный Кабинет</a>
              </li>
            </ul>
            <ul>
              <li className={styles.title}>Контакты:</li>
              <li className={styles.list}>
                <a href="#">Telegram канал</a>
              </li>
              <li className={styles.list}>
                <a href="#">Telegram-поддержка</a>
              </li>
              <li className={styles.list}>
                <a href="#">Написать письмо</a>
              </li>
            </ul>
            <ul>
              <li className={styles.title}>Юридическая информация:</li>
              <li className={styles.list}>
                <a href="#">Политика конфиденциальности</a>
              </li>
              <li className={styles.list}>
                <a href="#">Условия пользования</a>
              </li>
              <li>PROTEKTSERVICES LTD</li>
              <li>Company No. 14953888</li>
              <li>London, United Kingdom</li>
            </ul>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.connection}>
              <div className={styles.logo}>
                <Image src="/logo.png" width={61} height={61} alt="logo" />
              </div>
              <div className={styles.contacts}>
                <a href="mailto:support@protekt.app">support@protekt.app</a>
                <a href="tel:+442080580678">+442080580678</a>
              </div>
            </div>
            <div className={styles.download}>
              <ul>
                <li>
                  <a href="#">
                    <Image
                      width={25}
                      height={25}
                      src="/img/devices/windows.svg"
                      alt="svg"
                    />
                    <div className={styles.title}>
                      <span>Скачать для</span>
                      <span>Windows</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      width={25}
                      height={25}
                      src="/img/devices/apple.svg"
                      alt="svg"
                    />
                    <div className={styles.title}>
                      <span>Скачать для</span>
                      <span>Apple</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      width={25}
                      height={25}
                      src="/img/devices/google_play.svg"
                      alt="svg"
                    />
                    <div className={styles.title}>
                      <span>Скачать для</span>
                      <span>Google Play</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
