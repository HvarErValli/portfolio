import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.description}>
        Welcome 
      </header>
      <h2 className={styles.description}>
        This is my online portfolio. It details my projects, both school and personal as well as my skills and experience.
      </h2>

    </main>
  )
}
