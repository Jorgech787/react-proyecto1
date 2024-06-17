import React from 'react'
import ReactPlayer from 'react-player'

export default function Creditos() {
  const video4 = 'https://youtu.be/Ga_RwPmx-N0?si=fTsNxq9QOJgsQ7Q1'
  return (
    <div>
      <p>NOMBRE COMPLETO : JORGE ABEL CHAVEZ CONDORI</p>
      <p>CI : 6988576</p>
      <p>RU : 1855788</p>
      <p> MATERIA : PROGRAMACION WEB II</p>
      <p> DOCENTE : MIGUEL ANGEL MENDOZA</p>
      
      
      <div style={{alignItems:'center'}}>
      
        <ReactPlayer style={{margin:'150px auto'}}
          url={video4} //Nos sirve para llamar a la URL
          playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
          volume={0.3}  //Es para poner el volumen por defecto en este caso al 50%
          controls      //Para que aparezcan los controles de pausa y volumen
          width='55%'
          height='290px'
        />
      </div>
    </div>
  )
}