import React from 'react'

export default function Carousel1() {
  return (
    <div>
        <div id="carouselExampleIndicators"  className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src="https://kathymonzon.com/wp-content/uploads/2023/04/Tortas-de-chocolate.webp"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://carlosbakery.ca/cdn/shop/products/red-velvet-cake-full_1500x.webp?v=1670856438"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn0.recetasgratis.net/es/posts/9/3/1/pie_de_limon_peruano_69139_600.jpg"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://peru21.pe/resizer/e1YMqCUrteIoE07rWrEfeyWjH1U=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/OWECBWBK35HQVNBAGJAPNAI5PE.png"  className="d-block w-100" alt="..."/>
      </div>

    <div className="carousel-item">
      <img src="https://media.ambito.com/p/b275d6fabeabe11a6c255c8ef0d14d52/adjuntos/239/imagenes/040/140/0040140221/730x0/smart/donas-glaseadasjpg.jpg"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://pqs.pe/wp-content/uploads/2021/02/rollcake-with-berries-on-platter.jpg"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://4sonrus.com/wp-content/uploads/2019/01/Vday-red-velvet-CC-1-5-1024x683.jpg"  className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/FTiaKFX_LV8/maxresdefault.jpg"  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
