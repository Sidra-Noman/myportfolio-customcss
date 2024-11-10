
import React from 'react';
import styles from '../About/About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.container}>
      <h2 className={`${styles.heading} ${styles['heading-md']}`} data-aos="zoom-in-up">
        About me
      </h2>
      <p className={styles.paragraph} data-aos="zoom-in-up">
        As a dedicated student at GIAIC, I am currently pursuing an advanced course in Artificial Intelligence, Web 3.0, and the Metaverse. This exciting combination allows me to explore cutting-edge technologies that are shaping the future of digital innovation. Through AI, I am mastering the skills to develop intelligent systems that can solve complex problems and transform industries. My deep dive into Web 3.0 equips me with the knowledge of decentralized technologies, empowering the next generation of the internet. Alongside this, studying the Metaverse gives me insight into the immersive virtual worlds that are redefining how we interact, work, and play. Together, these areas fuel my passion for technology and my desire to be at the forefront of tomorrow’s digital landscape.
      </p>
    </div>
  );
};
export default About