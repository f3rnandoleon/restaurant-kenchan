import React from 'react'
import { Encabezado } from './Encabezado'
import { Opinion } from './Opinion'
import "../styles/opinion.css"
function Resenas() {
  return (
    <main>
        <Encabezado />
        <div class ="opinar">Escriba Su experiencia</div>
        <Opinion />
        <Opinion />
        <Opinion />
    </main>
  )
}

export {Resenas}