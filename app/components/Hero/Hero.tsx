// components/Hero.js
import styles from '../Hero/Hero.module.css';


const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      
      <div className={`${styles.container} ${styles['container-lg']}`}>
        <div className={styles['hidden-lg']}></div>
        <div className={`${styles.textContainer} ${styles['textContainer-lg']}`}>
          <div className={styles.text}>
            <p className={`${styles.text} ${styles['text-sm']} ${styles['text-md']} ${styles['text-lg']}`} data-aos="zoom-in-up">
              I am
            </p>
            <p className={`${styles.text} ${styles['text-sm']} ${styles['text-md']} ${styles['text-lg']}`} data-aos="zoom-in-up">
              Sidra
            </p>
            <p className={`${styles.text} ${styles['text-sm']} ${styles['text-md']} ${styles['text-lg']}`} data-aos="zoom-in-up">
              Noman
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
