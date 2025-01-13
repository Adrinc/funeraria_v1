import React from 'react';
import { useStore } from "@nanostores/react";
import { isEnglish } from "../../../data/variables.js";
import FormContact from '../../react_components/FormContacto/FormContacto.jsx';
import styles from '../css/ContactoSeccion.module.css';

const ContactoSeccion = () => {
  const ingles = useStore(isEnglish);

  return (
    <>
      <div className={styles.centeredText}>
        <h1 className={`${styles.largeText} ${styles.whiteText}`}>
          {ingles 
            ? "LEAVE US YOUR INFORMATION AND WE WILL GLADLY ASSIST YOU" 
            : "DÉJENOS SUS DATOS Y CON GUSTO LE ASESORAMOS"}
        </h1>
      </div>
      <section id="contacto" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.formColumn}>
          <FormContact isEnglish={ingles} />
          </div>
        </div>
        <div className={styles.infoColumn}>
          <div className={styles.containerInfo}>
            <img src="./favicon.png" alt="Logo" className={styles.logo} />
            <h1 className={styles.title}>
              {ingles ? "Immediate Support" : "Apoyo inmediato"}
            </h1>
            <p className={styles.description}>
              {ingles ? "We are here to help you" : "Estamos para ayudarle"}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactoSeccion;