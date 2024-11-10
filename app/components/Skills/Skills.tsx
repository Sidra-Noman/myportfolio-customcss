// Skills.tsx
import React from 'react';
import styles from '../Skills/Skills.module.css';

const Skills = () => {
  return (
    <div id="skills" className={styles.container}>
        <div className={styles.grid}>
            <div>
                <h2 className={styles.heading} data-aos="zoom-in-up">My Skills</h2>
                <p className={styles.description} data-aos="zoom-in-up">
                    As an SEO expert, I bring a deep understanding of the technical and strategic elements that drive successful search engine optimization. My expertise lies in optimizing websites for better visibility and ranking on search engines, while ensuring exceptional user experience. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I create well-structured, efficient, and SEO-friendly code that enhances both performance and searchability. Specializing in Next.js, I build high-performance, server-rendered web applications that not only load quickly but are also optimized for SEO from the ground up. My skills allow me to bridge the gap between modern web development and effective SEO strategies, ensuring that websites not only look great but also perform excellently in search engine rankings.
                </p>
            </div>
            <div className={styles.skillsGrid}>
                <div className={styles.skillCategory}>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
                </div>
                <div className={styles.skillCategory}>
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">JAVASCRIPT</h2>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;
