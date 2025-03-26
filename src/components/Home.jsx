import React from 'react'
import '../firebase/firebase.js'
import { onSingOut } from '../firebase/firebase.js'
import useUsuario from '../hooks/useUsuario.js'

function Home() {
    const usuario = useUsuario()
  return (
    <div> 
    <h1>Bienvenido {usuario}</h1>
    <button className='btnform' onClick={ onSingOut } >Cerrar Sesión</button>
    </div>
  )
}

export default Home
