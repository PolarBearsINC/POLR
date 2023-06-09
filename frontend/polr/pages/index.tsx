import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>POLR</h1>
        <div className={styles.description}>
          <p>
            Nick is cute
            &nbsp;
            <code className={styles.code}>POLAR BEARS</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsored By{' '}
              <Image
                src="/vlad.png"
                alt="Vlad's Pic"
                className={styles.vercelLogo}
                width={200}
                height={200}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/pb.jpg"
            alt="Next.js Logo"
            width={1000}
            height={1000}
            priority
          />
         
        </div>

        <div className={styles.grid}>
          
      

        </div>
      </main>
    </>
  )
}
