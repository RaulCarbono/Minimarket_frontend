
import style from './Register.module.css';
import Button_Register from './Button_Register';
import Back from '../assets/flecha.png'
import { counterContext } from '../context/CounterContext';
import { useContext } from 'react';

const Register = () => {
const {register, setRegister} = useContext(counterContext)
const handlerBack = () => setRegister(!register)
  
  return (
    <>
    <div className={style.container_register_back}>
      <span><img className={style.img_button} src={Back} alt="" onClick={handlerBack} /></span>
    </div>
    <form action="" className={style.form_container_register}>
      
      <input className={style.inputs_register} type="text"  placeholder='Nombre'/>
      <input className={style.inputs_register} type="text" placeholder='Apellido' />
      <input className={style.inputs_register} type="text"  placeholder='Correo electronico'/>
      <input className={style.inputs_register} type="text" placeholder='Crear contraseña' />
      <input className={style.inputs_register} type="text" placeholder='Rol' />
      
    </form>
       
    <Button_Register />
    </>
  )
}

export default Register