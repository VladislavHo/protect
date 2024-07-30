import React from 'react'
import styles from "./rates_cards.module.scss";
import { ratesCard } from '../../variables/variables';
import ButtonDefault from '../Buttons/ButtonDefault';
export default function RatesCardsWrapper() {
  return (
    <div className={styles.cards}>
    {ratesCard.map((item) => (
      <>
        <div
          key={item.id + Math.random()}
          className={[styles.card, styles[item.themeColor]].join(" ")}
        >
          <div className={styles.header}>
            <div
              className={[styles.title, styles[item.themeColor]].join(
                " "
              )}
            >
              <h4>{item.title}</h4>
              <div className={styles.supList}>
                {item.supTitle.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>

            <span
              className={[styles.duration, styles[item.themeColor]].join(
                " "
              )}
            >
              в месяц
            </span>
          </div>
          <div
            className={[styles.description, styles[item.themeColor]].join(
              " "
            )}
          >
            {item.description}
          </div>
          <div
            className={[
              styles.priceContent,
              styles[item.themeColor],
            ].join(" ")}
          >
            <span className={styles.discount}>-{item.discount}%</span>
            <span className={styles.price}>{item.price}₽</span>
          </div>

          <div className={styles.include}>
            <ul
              className={[
                styles.includeList,
                styles[item.themeColor],
              ].join(" ")}
            >
              {item.included.map((item) => (
                <li>✓ {item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.btnWrapper}>
            <ButtonDefault
              title={"Подключить тариф"}
              colorSvg={
                item.themeColor === "dark" ? "#abffcf" : item.themeColor
              }
              theme={
                item.themeColor === "dark" ? "green" : item.themeColor
              }
            />
          </div>
        </div>
      </>
    ))}
  </div>
  )
}
