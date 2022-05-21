import React from 'react'

const CardQuotes = ( { info } ) => {
  return (
    <div>
      <h1>
        {info.quote}
      </h1>
      <p>
        {info.author}
      </p>
      <p>
        {info.series}
      </p>
      
    </div>
  )
}

export default CardQuotes