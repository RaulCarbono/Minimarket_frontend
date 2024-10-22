import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../components/Sidebar';
import { Appbar } from '../components/Appbar';
import Productos from '../assets/productos.png'

export const Dashboard = () => {
  return (
    <div className={styles.container_dashboard}>
      <div className={styles.appbar}>
        <Appbar />
      </div>

      <div className={styles.main}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        
        <div className={styles.content}>
         <div>
          <h1>Contenido principal</h1>
          </div>
          <div className={styles.content_card}>
            <div>
              <h3>Titulo</h3>
              </div>
            <img className={styles.img_product} src={Productos} alt="" />
            <div>
            <span><p>price</p></span>
            <button>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}