import React from 'react'
import styles from './intro_company.module.scss'
import AddressBar from "../AddresBar/AddresBar";
export default function IntroCompany() {
  return (
    <section className={styles.introCompany}>
      <div className={styles.introCompanyWrapper}>
        <AddressBar theme={"blue"}/>

        <div className={styles.title}>
          <h2>protektVPN - <span>нас не заблокируют!</span></h2>
        </div>
      </div>
    </section>
  )
}
