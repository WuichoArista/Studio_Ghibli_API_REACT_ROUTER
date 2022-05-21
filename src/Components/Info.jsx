import React from 'react'
import Nav from './Nav/Nav'
import { useParams } from 'react-router-dom'

const Info = () => {
  let {params} = useParams()
  
  console.log(params)
  
  return (
    
    <div>
        <Nav />
        Info
    </div>
  )
}

export default Info