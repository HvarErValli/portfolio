import './globals.css'
import Link from 'next/link'
import styles from './page.module.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
      <div className={styles.topnav}>
          <div className={styles.topnavcentered}>
            <Link href="/" className={styles.nav}>Home</Link>
            <Link href="/about" className={styles.nav}>About</Link>      
          </div>
      </div> 
      {children}
      </body>
    </html>
  )
}
