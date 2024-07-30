import React from 'react'
import IntroCompany from '../components/IntroCompany/IntroCompany'
import styles from './company.module.scss'
import Safety from '../components/Safety/Safety'
import QA from '../components/QA/QA'


export default function Company() {
  return (
    <div className={styles.company}>
      <IntroCompany/>
      {/* <AboutServicesScreen title="Сделать интернет безопаснее и доступнее для всех, защищая вашу приватность и свободу онлайн!"/> */}
      <Safety />
      <QA />
    </div>
  )
}
