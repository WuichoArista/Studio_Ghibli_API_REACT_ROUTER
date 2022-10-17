import React from 'react'
import './CardPelicula.css'
import { Link } from 'react-router-dom'

const CardPelicula = ( {data}) => {


  return (
    <div>
        <div className="contenedor_carta">
            <div className="carta_imagen">
              <img className='imagen_carta' src={data.image} alt="" />
            </div>
            <div className="contenedor_info">
               <h4>Titulo:</h4>
               <p className='card.titulo'>{data.title}</p>
               <h4>Sinopsis:</h4>
               <p className='card_descripcion'>{data.description.substring(0,85)}...</p>
            </div>
            <div className="contenedor_boton">
              <Link  to={`/${data.id}`}>
                <button className='boton'  >Mas informacion</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default CardPelicula