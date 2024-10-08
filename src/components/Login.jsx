import React from 'react'
import styles from './login.module.css';
import HomeAnimation from '../assets/animations/HomeAnimation';
import Google from '../assets/google.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'
import Minimarket from '../assets/ciudad.svg'
import Register from './Register';


const Login = () => {
  return (
    <div className={styles.container_card}>
      <div className={styles.card}>
        <div className={styles.card_left}>
          <HomeAnimation />
        </div>
        <div className={styles.container_card_right}>
        
        <div className={styles.title_Card}> Minimarket</div>
         <div className={styles.container_options}>
         <img src={Minimarket} alt="" />
       </div> 
       <Register />
        {/* <div className={styles.card_right}>    */}
          
          {/* <h3 className={styles.title_form}>Welcome</h3> */}
          {/* <form action="" className={styles.form_login}>
            <input type="text" className={styles.input_email} placeholder='Email' />
            <input type="text" className={styles.password_email}  placeholder='Password'/>
            <div className={styles.container_button}>
            <button className={styles.button_ingresar} type='button'>Ingresar</button>
              </div> 
              <div className={styles.external_button_container}>
                  <div className=''><a href=""><img src={Google} className={styles.icons} /></a></div>
                  <div><a href=""><img src={Facebook} alt="" className={styles.icons} /></a></div>
                  <div><a href=""><img src={Linkedin} alt="" className={styles.icons} /></a></div>
              
              </div>
          </form> */}
        
        </div>
        </div>
      </div>
    // </div>
  )
}

export default Login