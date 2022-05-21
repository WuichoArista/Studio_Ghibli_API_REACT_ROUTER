import React from 'react'
import './CardPelicula.css'
import { Link } from 'react-router-dom'
import Info from '../Info'

const CardPelicula = ( {data}) => {


  return (
    <div>
        <div className="contenedor_carta">
            <div className="carta_imagen">
              <img className='imagen_carta' src={data.image} alt="" />
            </div>
            <div className="contenedor_info">
               <h4>Titulo:</h4>
               <p>{data.title}</p>
               <h4>Titulo Japones:</h4>
               <p>{data.original_title_romanised}</p>
               <h4>Director:</h4>
               <p> {data.director}</p>
            </div>
            <div className="contenedor_boton">
              <Link  to={`movie/${data.title}`} className="boton"   >
                <button className='boton' onClick={() => <Info data={data} />}>Mas informacion</button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default CardPelicula