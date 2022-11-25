import React from 'react'
import { Encabezado } from './Encabezado'
import { Plato } from './Plato'

function Menu({product}) {
  return (
    <main>
        
          {/* <Encabezado item={item}/> */}
       
       {product.map((item)=>(
          <Plato item={item}/>
        ))} 
        
    </main>
  )
}

export {Menu}