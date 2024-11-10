// Cards.tsx
import React from 'react';
import styles from '../Cards/Cards.module.css';

interface propsType {
    title: string;
    desc: string;
    tags: string[];
}

const Cards: React.FC<propsType> = ({ title, desc, tags }) => {
  return (
    <div
      className={`${styles.cardContainer} ${styles.cardContainerSm}`}
      data-aos="zoom-in-up"
    >
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardDescription}>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className={styles.tags} key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
