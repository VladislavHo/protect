import styles from "./fast.module.scss";
import Image from "next/image";
import AddresBar from "../AddresBar/AddresBar";
import { flags } from "../../variables/variables";
export default function Fast() {
  return (
    <section className={styles.fast}>
      <div className={styles.fastLayout}>
      {/* header */}
          <AddresBar/>
        <div className={styles.speed}>
          <div className={styles.titleWrapperFast}>
            <span className={styles.span}>Быстрый.</span>
          </div>

          <div
            className={styles.circleBg}
            style={{ backgroundImage: "url(./img/circle-bg.png)" }}
          >
            <div
              className={styles.circle}
              style={{ backgroundImage: "url(./img/circle-gradient.png)" }}
            >
              <div className={styles.interiorWrapper}>
                <div className={styles.center}>
                  {/* img */}
                  <Image
                    src={"./svg/speed_arrow.svg"}
                    width={104}
                    height={104}
                    alt="svg"
                  />
                  <span className={styles.speedName}>Мбит/сек</span>
                </div>

                <div className={styles.speedValueWrapper}>
                  <span className={styles.speedValue}>150</span>
                  <span className={styles.speedValue}>200</span>
                  <span className={styles.speedValue}>250</span>
                  <span className={styles.speedValue}>300</span>
                  <span className={styles.speedValue}>350</span>
                  <span className={styles.speedValue}>400</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.titleWrapperPowerful}>
            <span className={styles.span}>Мощный.</span>
          </div>
        </div>

        <div className={styles.servers}>
          <div className={styles.titleServers}>
            <Image width={48} height={48} src="./svg/Browser.svg" alt="svg" />
            <h2>Надёжные сервера</h2>
          </div>

          <div className={styles.flags}>
            <div className={styles.dottedBG}></div>
            {flags.map((flag) => (
              <div className={styles.flag}>
                <Image
                  key={flag.id}
                  src={`${flag.src}/${flag.name}.${flag.format}`}
                  width={80}
                  height={80}
                  alt="flag"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ticketName">
          <h2>protektVPN - твой билет в мир безопасного интернета</h2>
        </div>
      </div>
    </section>
  );
}
