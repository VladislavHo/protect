"use client"
import React, { useState } from 'react'
import styles from './qa.module.scss'
import { qaList } from '../../variables/variables'
import ButtonDark from '../Buttons/ButtonDark';
import Image from 'next/image';
export default function QA() {
  const [openedIndex, setOpenedIndex] = useState(-1);

  const toggleDropdown = (index) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
  };
  return (
    <div className={styles.qa}>
      <div className={styles.qaWrapper}>
        <h2>Частозадаваемые вопросы</h2>

        <div className={styles.questionsList}>
          {qaList.map((item, index) => (
            <div
             className={`${styles.questionsWrapper} ${openedIndex === index ? styles.active : ''}`}
              onClick={() => toggleDropdown(index)}>
              <button
               className={styles.question}>
                <div className={styles.questionWrapper}>
                  <div className={styles.iconLogo}>
                    <Image src={`/svg/${item.logo.name}.${item.logo.format}`} width={40} height={40} alt={item.name}/>
                  </div>
                <span>{item.question}</span>
                </div>
                <div className={`${styles.icon} ${openedIndex === index ? styles.active : ''}`}>
                <svg role="presentation" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="2px" fill="none" fill-rule="evenodd" stroke-linecap="square"><g transform="translate(1.000000, 1.000000)" stroke="#c3cbff"><path d="M0,11 L22,11"></path><path d="M11,0 L11,22"></path></g></g></svg>
                </div>
              </button>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
        <ButtonDark title={"Разблокировать доступ в свободный веб-мир!"} colorSvg={"#F5F5F5"}/>
      </div>
    </div>
  )
}
