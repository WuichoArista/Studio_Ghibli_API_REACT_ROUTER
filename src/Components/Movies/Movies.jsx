import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import CardPelicula from '../CardPelicula/CardPelicula'
import './Movies.css'

const Movies = () => {

    const [pelicula , setPelicula] = useState([])

    const peticionApi = async() => {
        let url = 'https://ghibliapi.herokuapp.com/films'
        let respuesta = await axios.get(url)
        let data = respuesta.data
        console.log(data)
        setPelicula(data)
    }
    
    useEffect( () => {

        peticionApi()
    
      }, [])

    

  return (
    <div>
        <Nav />
        <h1>Movies</h1>
         

        <div className="contenedor_peliculas">
            {
            pelicula.map( (pelicula , i) => {
                return (
                    <CardPelicula data={pelicula} key={i} />
                )
            })
            }
        </div>


    </div>
  )
}

export default Movies