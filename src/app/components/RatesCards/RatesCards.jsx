import React from "react";
import { ratesCard } from "../../variables/variables";
import styles from "./rates_cards.module.scss";
import ButtonDark from "../Buttons/ButtonDark";
export default function RatesCards() {
  return (
    <section className={styles.ratesCards}>
      <div className={styles.ratesCardsWrapper}>
        <h2>
          Собрали для вас самые выгодные тарифы, выбери <span>подходящий!</span>
        </h2>
        <div className={styles.cards}>
          {ratesCard.map((item) => (
            <>
              <div className={[styles.card, styles[item.themeColor]].join(" ")}>
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
                    className={[styles.includeList, styles[item.themeColor]].join(
                      " "
                    )}
                  >
                    {item.included.map((item) => (
                      <li>✓ {item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.btnWrapper}>
                    <ButtonDark title={"Подключить тариф"} colorSvg={"#F5F5F5"} theme={"dark"}/>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

//
//
//
