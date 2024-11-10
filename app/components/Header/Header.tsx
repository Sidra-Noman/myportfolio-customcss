import styles from '../Header/Header.module.css'
import React from 'react'
import Link from 'next/link'


const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={`${styles.title} ${styles['title-md']}`}>Siddnom</h1>
          
          <nav>
            <ul className={`${styles.navList} ${styles['navList-md']} ${styles['navList-lg']}`}>
              <li className={styles.menuLink}>
                <Link href="#hero">Home</Link>
              </li>
              <li className={styles.menuLink}>
                <Link href="#about">About</Link>
              </li>
              <li className={styles.menuLink}>
                <Link href="#project">Project</Link>
              </li>
              <li className={styles.menuLink}>
                <Link href="#skills">Skills</Link>
              </li>
              <li className={styles.menuLink}>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;

