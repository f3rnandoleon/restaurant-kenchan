import React, { useEffect } from 'react'
import { useState } from 'react'
import { Inicio } from './componentes/Inicio'
import './App.css'
import { DetallesPlato } from './componentes/DetallesPlato'
import { Masinformacion } from './componentes/Masinformacion'
import { Ubicacion } from './componentes/Ubicacion'
import { Menu } from './componentes/Menu'
import { Resenas } from './componentes/Resenas'

function App() {
  const [product, setProduct] = useState([])

  async function restaurantApi(){
    const url="http://localhost:5000/results";

    const res=await fetch(url);
    const data =await res.json();

    setProduct(data);
  }
  useEffect(()=>{
    restaurantApi();
    return()=>{
      //desmontado
    }
  },[]);
  return (
    <div>
       <Inicio />
        {/* {product.map((item)=>(
          <DetallesPlato item={item}/>
        ))}  */}
      <Menu product={product}/>
      <Masinformacion />
      <Ubicacion />  
      {/* <Resenas />  */}
    </div>
   
  )
}

export default App
