import React from 'react'
import { useState } from 'react'
import '../css/login.css'
import '../firebase/firebase.js'
import { loginUsuario, registerUsuario } from '../firebase/firebase.js'

function Login() {
    const [islogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({ email: '', password: '', username: '', error: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (islogin) {
            loginUsuario(formData.email, formData.password)
            
        } else{

            registerUsuario(formData.email, formData.password, formData.username)
        }
    }

  return (
    <div>
        {
        islogin
        ? <div className='container'>
            <div className="row">
            <div className="col-md-10">
                <div className="padre">
                <div className="card card-body" id='card1'>
                    <form>
                    <h2 className='title'>Inicio sesión Monopoly</h2>
                    <input type="email" placeholder='Ingresar correo' className='cajatexto' value={formData.email} onChange={(e) =>
                    setFormData({...formData, email: e.target.value })}/>
                    <input type="password" placeholder='Ingresar contraseña' className='cajatexto' value={formData.password} onChange={(e) =>
                    setFormData({...formData, password: e.target.value })}/>
                    <button className='btnform' type="submit" onClick={handleSubmit}>Ingresar</button>
                    <p>¿Crea una cuenta? <a className='loginLink' onClick={() => setIsLogin(!islogin)}>Registrarse</a></p>
                    </form>
                </div>
                </div>
            </div>
            </div>
            </div>
        : <div className='container'>
            <div className="row">
                <div className="col-md-7">
                    <div className="padre">
                    <div className="card card-body" id='card1'>
                        <form>
                        <h2 className='title'>Registro Monopoly</h2>
                        <input type="text" placeholder='Ingresar usuario' className='cajatexto' value={formData.username} onChange={(e) =>
                            setFormData({...formData, username: e.target.value })}/>
                        <input type="email" placeholder='Ingresar correo' className='cajatexto' value={formData.email} onChange={(e) =>
                            setFormData({...formData, email: e.target.value })}/>
                        <input type="password" placeholder='Ingresar contraseña' className='cajatexto' value={formData.password} onChange={(e) =>
                            setFormData({...formData, password: e.target.value })}/>
                        <button className='btnform' type="submit" onClick={handleSubmit}>Registrarse</button>
                        <p>¿Ya tienes una cuenta? <a className='loginLink' onClick={() => setIsLogin(!islogin)}>login</a></p>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        }      
    </div>
  )
}

export default Login