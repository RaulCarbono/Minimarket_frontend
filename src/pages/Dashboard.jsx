import React from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../components/Sidebar';
import { Appbar } from '../components/Appbar';

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
          <div className={styles.content_card}></div>
        </div>
      </div>
    </div>
  );
}