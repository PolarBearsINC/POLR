import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Drawer.module.css'

export default function DrawerComp() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className={styles.drawerButton} onClick={toggleDrawer}>
        ☰
      </button>

      {isOpen && <div className={styles.overlay} onClick={closeDrawer} />}

      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
            <Image
                src="/POLRBear_transparent.png"
                alt="POLRBear Pic"
                className={styles.vercelLogo}
                width={50}
                height={50}
                priority
            
            />
            <h2>POLR</h2>
          <button className={styles.closeButton} onClick={closeDrawer}>
            ✕
          </button>
        </div>
        
        <nav className={styles.drawerNav}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/Polls">Polls</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </>
  )
}
