import React from 'react'
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container_card}>Login
      <div className='card'>
        <div className='card-left'></div>
        <div className='card-rigth'>
          <form action="">
            <input type="text" placeholder='Email' />
            <input type="text"  placeholder='Password'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login