// Heading.tsx
import React from 'react';
import styles from '../Heading/Heading.module.css';

interface PropsType {
    title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
    return (
        <div className={styles.headingContainer}>
            <p className={styles.headingTitle}>{title}</p>
        </div>
    );
};

export default Heading;
