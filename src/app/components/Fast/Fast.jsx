import styles from "./fast.module.scss";
import Image from "next/image";
import AddresBar from "../AddresBar/AddresBar";
import { flags } from "../../variables/variables";
import ButtonGreen from "../Buttons/ButtonGreen";


export default function Fast() {
  return (
    <section className={styles.fast}>
      <div className={styles.fastLayout}>
        {/* header */}
        <AddresBar />
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

        <div className={styles.ticketName}>
          <h2>protektVPN - твой билет в мир безопасного интернета</h2>
        </div>

        <div className={styles.connections}>
          <div className={styles.connectionsWrapper}>
            <Image
              src={"/img/flow/Flow_green_1.png"}
              width={411}
              height={64}
              alt={"flow"}
            />
            <div className={styles.icon}>
              <div className={styles.iconWrapper}>
                <Image
                  src={"/svg/Shield.svg"}
                  width={35}
                  height={35}
                  alt={"flow"}
                />
              </div>

              <div className={styles.iconWrapper}>
                <Image
                  src={"/svg/Globe.svg"}
                  width={35}
                  height={35}
                  alt={"flow"}
                />
              </div>
            </div>
            <Image
              src={"/img/flow/Flow_green_2.png"}
              width={403}
              height={89}
              alt={"flow"}
              />
          </div>
          <ButtonGreen title={"Открыть веб-мир с ProtektVPN!"} />
          <Image
            src={"/img/flow/Flow_green_3.png"}
            width={439}
            height={170}
            alt={"flow"}
            className={styles.greenFlow}
          />
        </div>
      </div>
    </section>
  );
}
