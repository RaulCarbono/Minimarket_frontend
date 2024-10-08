import React from 'react'
import style from './Register.module.css';
import Button_Register from './Button_Register';

const Register = () => {
  return (
    <>
    <form action="" className={style.form_container_register}>
      <input className={style.inputs_register} type="text"  placeholder='Nombre'/>
      <input className={style.inputs_register} type="text" placeholder='Apellido' />
      <input className={style.inputs_register} type="text"  placeholder='Correo electronico'/>
      <input className={style.inputs_register} type="text" placeholder='Crear contraseña' />
      <input className={style.inputs_register} type="text" placeholder='Repetir contraseña' />
    </form>

    <Button_Register />
    </>
  )
}

export default Register