import React from 'react'
import Nav from '../Nav/Nav'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Info.css'

const Info = () => {
  const { id } = useParams()

  const [pelicula , setPelicula ] = useState({})
 
  const peticionApi = async(id) => {
    let url = `https://ghibliapi.herokuapp.com/films/${id}`
    let respuesta = await axios.get(url)
    let data = respuesta.data
    setPelicula(data)
  }


  useEffect( () => {
    peticionApi(id)
  },[id])

  return (
    
    <div>
        <Nav />
        <div className="banner">
          <h1 className='titulo_pelicula'>{pelicula.title}</h1>
          <img className='imagen_banner' src={pelicula.movie_banner} alt={pelicula.title} />
        </div>
        <div className="info_pelicula">
          <div className="info_pelicula_header">
            <div className="info_pelicula_calificacion">
              <h3>Calificacion:</h3>
              <p className='puntaje'>{pelicula.rt_score}%</p>
            </div>
            <div className="titulo_ingles">
              <h3>Titulo en Ingles: </h3>
              <p>{pelicula.title}</p>
            </div>
            <div className="titulo_original">
              <h3>Titulo en Original: </h3>
              <p>{pelicula.original_title}</p>
            </div>
          </div>
          <div className="info_pelicula_detalles">
            <div className="productor">
              <h3>Productor: </h3>
              <p>{pelicula.producer}</p>
            </div>
            <div className="director">
              <h3>Director: </h3>
              <p>{pelicula.director}</p>
            </div>
            <div className="estreno">
              <h3>Año de estreno: </h3>
              <p>{pelicula.release_date}</p>
            </div>
            <div className="duracion">
              <h3>Duracion: </h3>
              <p>{pelicula.running_time} minutos</p>
            </div>
          </div>
          <div className="sinopsis">
          <h2>Sinopsis:</h2>
          <p>{pelicula.description}</p>
          </div>
        </div>
    </div>
  )
}

export default Info