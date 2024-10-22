import React from 'react'
import styles from './Appbar.module.css'
import CardShop from './CardShop'

export const Appbar = () => {
  return (
    <div className={styles.container_appbar}>
      <div>Logo</div>
      <div>mi perfil</div>
      <div><input type="text" /></div>
        <CardShop />
    </div>
  )
}
