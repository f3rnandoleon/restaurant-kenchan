import React from 'react'
import { Descripcion } from './atomos/Descripcion'
import { Imagen } from './atomos/Imagen'
import { Numero } from './atomos/Numero'
import "../styles/plato.css"
function Plato({item}) {
  function question(){
    if(item.id%2!=0)
    {
      return(<div class="plato_css"><Numero item={item} /><Descripcion item={item} /><Imagen item={item} /></div>)
    }else{
      return(<div class="plato_css2"><Imagen item={item}/><Descripcion item={item}/><Numero item={item}/></div>)
    }
  }
  return (
    question()
  )
}

export {Plato}