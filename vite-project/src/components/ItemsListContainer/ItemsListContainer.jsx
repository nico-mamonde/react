
import styles from './ItemListContainer.module.css'

export const ItemsListContainer = (props) => {
    console.log(props)
    const greeting = " Como estas? , Bienvenido"
    const titulo = "Bienvenidos a mi app de bebidas"
  return (
    <main>
    
    <h1>{titulo}</h1>
    <h3>Pagina que va tener control de bebidas</h3>
    <div>
    <p>
      Es una tienda dedicada a la benta de bebida y buen servicio
      </p>
    </div>
   
    <footer>pie de Pagina</footer>
  
    </main>
  )
}



