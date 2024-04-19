
import styles from './ItemListContainer.module.css'

export const ItemsListContainer = (props) => {
    console.log(props)
    const greeting = " Como estas? , Bienvenido"
    const titulo = "Bienvenidos a mi app de bebidas"
  return (
    <div>
    <h1>{titulo}</h1>
    <h3>Pagina que va tener control de bebidas</h3>
 
    <footer>pie de Pagina</footer>
    </div>
  )
}



