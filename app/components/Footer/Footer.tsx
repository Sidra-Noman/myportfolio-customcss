import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from '../Footer/Footer.module.css'

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p className={styles.copyright}>@siddnom | All rights reserved 2024.</p>
        <div className={styles.iconContainer}>
          <ul className={`${styles.iconList} ${styles['iconList-sm']}`}>
            <li>
              <Link href="https://www.facebook.com/sidra.noman.73">
                <Image 
                  src="/images/Facebook_Logo_2023.png"
                  alt='facebook'
                  width={35}
                  height={35}       
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/sidra-noman-69813028b">
                <Image 
                  src="/images/circle-linkedin.png"
                  alt='linkedin'
                  width={35}
                  height={35}       
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/sidnoms_foodies?igsh=MWh0NnNkN28zdnBsbQ==">
                <Image 
                  src="/images/Instagram_icon.png"
                  alt='instagram'
                  width={35}
                  height={35}       
                />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;