import React from 'react'
import IntroCompany from '../components/IntroCompany/IntroCompany'
import InfoCompany from '../components/InfoCompany/InfoCompany'
import styles from './company.module.scss'
import Safety from '../components/Safety/Safety'
import QA from '../components/QA/QA'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import RatesCards from '../components/RatesCards/RatesCards'
import IntroRates from '../components/IntroRates/IntroRates'

export default function Company() {
  return (
    <div className={styles.company}>
      <IntroCompany/>
      <InfoCompany />
      <AboutCompany />
      <Safety />
      <IntroRates />
      <RatesCards />
      <QA />
    </div>
  )
}
