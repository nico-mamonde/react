import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Navbar.jsx'
import {ItemsListContainer} from './components/ItemsListContainer/ItemsListContainer.jsx'

import Navbar from './Navbar.jsx'
import logo from './assets/logo.png'
const App = () => {

  const titulo = "Bienvenidos a mi app de bebidas"
  return( <>
 

     <Navbar/>
     <ItemsListContainer greeting =  " Bienvendo a la plataforma "/>
  </>
  )

}
export default App
