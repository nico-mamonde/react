import { useState } from "react"
export const ItemCount = () => {
 
    const [cantItems , setcantItems] = useState (0)
    
    const handlleAdd =() => {
        setcantItems(cantItems + 1)
   
 
    } 
    const handllSubs =() => {
        cantItems> 0 ?setcantItems(cantItems - 1) : alert ("No se resta")
    
    }
    return (
        
<>
<div>Contador</div>
<button onClick={handlleAdd}> + </button>
<span>{cantItems}</span>
<button onClick={handllSubs}> - </button>

</>
    )
 } 