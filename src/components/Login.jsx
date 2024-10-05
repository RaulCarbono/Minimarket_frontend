import React from 'react'
import styles from './login.module.css';
import HomeAnimation from '../assets/animations/HomeAnimation';

const Login = () => {
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <HomeAnimation />
        </div>
        <div className={styles.card_right}>
          <form action="" className={styles.form_login}>
            <input type="text" className={styles.input_email} placeholder='Email' />
            <input type="text" className={styles.password_email}  placeholder='Password'/>
            <button>Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login