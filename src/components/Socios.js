import React from 'react'
import '../Socios.css'


export default function Socios() {
  return (
  <div >
    <p class="heading">SOCIOS</p>
    <div class="gallery-image">
      <div class="img-box">
        <a href="https://delizia.bo" target='blank'>
          <img src="https://delizia.bo/wp-content/uploads/2021/12/Quienes-somos-4.webp" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>DELIZIA</p>
              <p class="opacity-low">crema pastelera</p>
            </div>
          </div> 
        </a>  
      </div>
      <div class="img-box">
        <a href="https://elceibo.com/" target='blank'>
          <img src="https://pbs.twimg.com/profile_images/920680517271539714/uHvOzKQE_400x400.jpg" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>ELCEIBO</p>
              <p class="opacity-low">Chocolates para adorno</p>
            </div>
          </div>
        </a> 
      </div>
      <div class="img-box">
        <a href="https://www.nestle.com.bo/es/brands/brandlistingcafe/brandscafesoriginal" target='blank'>
          <img src="data:image/jpeg;base64,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f4HzM3+Hcd3Z2VvrO3rDuKrG92eoHixPbex313ktEahuuLI6ZW9tdx5CysaBRmXa73xYA6Zd+xnP/wBHsfzPM4N+bn5fN/K8ze+flb4ct9969e/rJWI0br4srDAqwBUggg9wQexBEj8HoVFL80ViwBC83dxWp9VrDEhB6enxJOJU2iqfD2OtgdUb6W5LWXc1I/8AeWonip9fQe87a8NF83S685iz+vdioUn+Sj+U6Ik0u2vHoVEStBpEVVUfCqNAfyEj7ugUMta8XTyuXBqnsRwGO2Xmp3xJ9vsPiSkS6Tbm6fgV0IUpUIhZm0N/mbuTMZHTqrLKbXQNZQWNbH1UsNNr9p1RJoctnT62NrMgY3VrW/LuGrXlpSPTX1t/OcmN4eoR0cK7vWxKNbZZYU2CvFSzHQ0T2/T4krEaXdRFPhvGVlIRtI6uil7ClbKdjy0J0n6D9PSS8RLpNkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/2Q==" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>NESTLE</p>
              <p class="opacity-low">Cafe</p>
            </div>
          </div>
        </a> 
      </div>
      <div class="img-box">
        <a href="https://www.osterlatinamerica.com/" target='blank'>
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/e84684172369761.Y3JvcCw4MDgsNjMyLDAsNDI0.jpg" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>Oster</p>
              <p class="opacity-low">Electrodomesticos</p>
            </div>
          </div> 
        </a> 
      </div>
      <div class="img-box">
        <a href="https://global.tramontina.com/es" target='blank'>
          <img src="https://www.redline.mu/cdn/shop/products/Tramontinalogowebsite-02_535314a1-9161-4b5f-a5ed-5aae4bf54eeb_800x.jpg?v=1652094072" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>TRAMONTINA</p>
              <p class="opacity-low">Moldes y Utensilios</p>
            </div>
          </div> 
        </a> 
      </div>
      <div class="img-box">
        <a href="https://www.pedidosya.com.bo/" target='blank'>
          <img src="https://seeklogo.com/images/P/pedidosya-logo-A90F6F004F-seeklogo.com.png" alt="" />
          <div class="transparent-box">
            <div class="caption">
              <p>PEDIDOSYA</p>
              <p class="opacity-low">Delivery</p>
            </div>
          </div> 
        </a> 
      </div>
    </div>
  </div>
  )
}
