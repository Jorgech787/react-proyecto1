import React from 'react'
import ReactPlayer from 'react-player'

export default function Videos() {
    const video1 = 'https://youtu.be/ixIbi8dD6lE?si=rlNwdHHH25nU_Z5Z'
    const video2 = 'https://youtu.be/Iva7YlPn2Ao?si=3vpLndMZ8wir9_Tv'
    const video3 = 'https://youtu.be/s3sw5wn10-A?si=bRjcAw1H2gTPiBfr'
  return (
    <div>
        <div style={{alignItems:'center'}}>
            <p>BIZCOCHO DE ZANAHORIA</p>
            <ReactPlayer style={{margin:'5px auto'}}
                url={video1} //Nos sirve para llamar a la URL
                playing={true} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
                volume={0}  //Es para poner el volumen por defecto en este caso al 50%
                controls      //Para que aparezcan los controles de pausa y volumen
                width='55%'
                height='290px'
            />
        </div>
        <div style={{alignItems:'center'}}>
            <p>CUPCAKES DE CHOCOLATE</p>
            <ReactPlayer style={{margin:'5px auto'}}
                url={video2} //Nos sirve para llamar a la URL
                playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
                volume={0.3}  //Es para poner el volumen por defecto en este caso al 50%
                controls      //Para que aparezcan los controles de pausa y volumen
                width='55%'
                height='290px'
            />
        </div>

        <div style={{alignItems:'center'}}>
            <p>TORTA SELVA NEGRA</p>
            <ReactPlayer style={{margin:'5px auto'}}
                url={video3} //Nos sirve para llamar a la URL
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
