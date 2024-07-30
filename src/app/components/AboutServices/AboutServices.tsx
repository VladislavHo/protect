import ButtonDark from "../Buttons/ButtonDark";
import styles from "./about.module.scss";
import Image from "next/image";


export default function AboutServices() {
  return (
    <section className={styles.aboutServices}>
      <div className={styles.aboutServicesWrapper}>
        <div className={styles.aboutServicesContent}>
          <h2>
            <span>Проще Простого!</span>
            <span> Один Клик до Безопасности!</span>
          </h2>

          <div className={styles.screenPhone}>
            <h4>Интуитивно понятный дизайн интерфейса</h4>
            <Image src={"/img/PhoneScreen.png"} width={531} height={610} alt="phone" />
          </div>
          <ButtonDark title="Защита, свобода? Легко! Просто Кликни!" colorSvg={"#F5F5F5"} theme={"dark"}/>

          <div className={styles.supports}>
            <h4>Наша Поддержка всегда на связи и готова помочь!</h4>
            <div className={styles.textWrapper}>

              <p>Отправьте нам сообщение с вопросом/предложением, и мы с радостью поможем!</p>
            </div>
            <div className={styles.flowBlueImg}>
              <Image src={"/img/flow/Flow_blue_2.png"} width={100} height={130} alt="phone" />

            </div>
            <div className={styles.buttonContainer}>

              <ButtonDark title="Связаться с нами в Telegram" colorSvg={"#F5F5F5"} theme={"dark"}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
