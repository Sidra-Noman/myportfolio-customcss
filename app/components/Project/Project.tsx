
import React from 'react';
import Heading from '../Heading/Heading';
import Cards from '../Cards/Cards';
import styles from '../Project/Project.module.css';

const data = [
    {
        id: 0,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Weather Widget",
        desc: "A Next.js and Typescript based tool for fetching and displaying real-time weather data.",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Static and Dynamic Resume",
        desc: "A Typescript-based interactive resume allowing users to showcase their skills dynamically.",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
];

const Project = () => {
    return (
        <div id="project" className={styles.container}>
            <Heading title="My Projects" />
            <div className={styles.grid}>
                {data.map((el) => (
                    <Cards
                        key={el.id}
                        title={el.title}
                        desc={el.desc}
                        tags={el.tags}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project;
