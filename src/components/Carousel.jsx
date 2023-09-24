import React from 'react'
import imagen1 from '../assets/almendroflor.jpg'
import imagen2 from '../assets/almendraarbol.jpg'
import imagen3 from '../assets/almendrasgrupo.jpg'
import '../css/Carousel.css'


const Carousel = () => {
    return (
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container-carousel">
          <div className="carousel-item active">
            <img src={imagen1} className="d-block img-fluid w-100 h-100" alt="flor almendro" />
            <div className="carousel-caption text-dark p-3 bg-dark-subtle text-emphasis-dark rounded">
              <h5>Primavera en su Máxima Expresión</h5>
              <p>Un hermoso almendro en plena floración, un regalo de la primavera.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen2} className="d-block img-fluid w-100 h-100" alt="almendras en árbol" />
            <div className="carousel-caption text-dark p-3 bg-dark-subtle text-emphasis-dark rounded">
              <h5>Cosecha a la Vista</h5>
              <p>Una almendra madura se aferra al árbol, lista para ser recolectada en su mejor momento.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={imagen3} className="d-block img-fluid w-100 h-100" alt="almendras agrupadas" />
            <div className="carousel-caption text-dark p-3 bg-dark-subtle text-emphasis-dark rounded">
              <h5>Abundancia Natural</h5>
              <p>Una impresionante montaña de almendras recién recolectadas, la recompensa de una temporada de cosecha exitosa.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
  
  

export default Carousel