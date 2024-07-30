import styles from './button.module.scss'
import Image from 'next/image'
export default function ButtonGreen({title}) {
  return (
    <button className={styles.buttonGreen}>
      <span>{title}</span>
      <Image src={'/svg/arrow_green.svg'} width={40} height={22} alt={'svg'}/>
      </button>
  )
}
