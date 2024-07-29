import styles from './button.module.scss'
import Image from 'next/image'
export default function ButtonDark({title}) {
  return (
    <button className={styles.buttonDark}>
      <span>{title}</span>
      <Image src={'/svg/arrow-white.svg'} width={40} height={22} alt={'svg'}/>
      </button>
  )
}
