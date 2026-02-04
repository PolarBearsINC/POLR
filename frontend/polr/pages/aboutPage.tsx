import Head from 'next/head'
import Link from 'next/link'
import DrawerComp from '@/components/drawer/DrawerComp'
import { ThemeToggle } from '@/components/appBar/ThemeToggle'
import styles from '@/styles/About.module.css'

export default function About() {
    return (
        <>
            <Head>
                <title>About - POLR</title>
                <meta name="description" content="Learn more about POLR" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DrawerComp />
            <ThemeToggle />

            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1>About POLR</h1>
                        <p className={styles.tagline}>Modern polling made simple and fun</p>
                    </div>

                    <div className={styles.contentGrid}>
                        <div className={styles.card}>
                            <div className={styles.icon}>🎯</div>
                            <h2>Our Mission</h2>
                            <p>
                                We believe in the power of community feedback. POLR makes it easy for anyone to create engaging polls and gather meaningful insights from their audience.
                            </p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.icon}>✨</div>
                            <h2>Why POLR?</h2>
                            <p>
                                Whether you're gathering feedback, making decisions, or just having fun, POLR provides a simple, elegant platform for polling that's loved by users worldwide.
                            </p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.icon}>🚀</div>
                            <h2>Features</h2>
                            <ul className={styles.featureList}>
                                <li>Easy poll creation</li>
                                <li>Real-time analytics</li>
                                <li>Mobile-friendly</li>
                                <li>Secure & private</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.contentGrid}>
                        <div className={styles.card}>
                            <div className={styles.icon}>👥</div>
                            <h2>Our Team</h2>
                            <div className={styles.teamGrid}>
                                <div className={styles.teamMember}>
                                    <h3>GrubbTime</h3>
                                    <p>Internal Server Error</p>
                                </div>
                                <div className={styles.teamMember}>
                                    <h3>Fish</h3>
                                    <p>Cat</p>
                                </div>
                                <div className={styles.teamMember}>
                                    <h3>Nick</h3>
                                    <p>Cute</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.icon}>🐻</div>
                            <h2>Powered By</h2>
                            <p>
                                POLR is proudly built by the cute team at Polar Bears Inc.
                                POLR Backend = Go
                                POLR Frontend = Next.js
                                POLR Database = PlanetScale
                            </p>
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Link href="/">
                            <button className={`${styles.button} ${styles.primaryButton}`}>
                                ← Back to Home
                            </button>
                        </Link>
                        <a href="#" className={`${styles.button} ${styles.secondaryButton}`}>
                            Get Started →
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

