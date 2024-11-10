
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import styles from '../Contact/Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.gridContainer}>
        <div className="space-y-8">
          <h2 className={styles.title} data-aos="zoom-in-up">
            Let's Connect and Elevate Your Digital Presence
          </h2>
          <p className={styles.description} data-aos="zoom-in-up">
            Feel free to shoot me a message, give me a call, or fill out the form to get in touch—I'm just a click away!
          </p>
          <div className={styles.contactItem} data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> xyz@gmail.com
          </div>
          <div className={styles.contactItem} data-aos="zoom-in-up">
            <BsTelephone size={30} /> (021-000-0000)
          </div>
        </div>
        <div className="space-y-8">
          <div className={styles.formField} data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input type="text" className={styles.input} id="name" />
          </div>
          <div className={styles.formField} data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input type="text" className={styles.input} id="email" />
          </div>
          <div className={styles.formField} data-aos="zoom-in-up">
            <label htmlFor="msg">Message</label>
            <textarea className={styles.textarea} id="msg" rows={8}></textarea>
          </div>
          <button className={styles.button} data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
