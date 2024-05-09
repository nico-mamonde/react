import "./Navbar.css";
import logo from './assets/logo.png'
import CartWidget from './components/ItemsListContainer/CartWidget/CartWidget.jsx'
const Navbar =()=>{
    return ( 
      <header className={StyleSheet.header}>
        <img src = {logo} alt =""/>
    <nav>


  <ul>
  <li>Inicio </li>
  <li>Servicios </li>
  <li>Nosotros </li>
  <li>Contactos </li>
  </ul>

    </nav>   
    <CartWidget/>
    </header>
  ) 
  

}

export default Navbar


