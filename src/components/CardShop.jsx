import React from 'react'
import styles from './carshop.module.css'
import Carrito from '../assets/carrito.png'

const CardShop = () => {
  return (
    < div className={styles.container_carshop}>
        
            <button type='button'>
            <img className={styles.img_carshop} src={Carrito} alt="" />
                </button>
        
    </div>
  )
}

export default CardShop