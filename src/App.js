import './App.css';
import React from 'react'
//import CardQuotes from './Components/CardQuotes';


function App() {

  /* const [quote , setquote] = useState({})

  const getQuotes = async () => {

    const url = 'https://breakingbadapi.com/api/quote/random'
    const respuesta = await axios.get(url)
    setquote(respuesta.data[0])

    console.log(quote)
  }

  useEffect( () => {

    getQuotes()

  }, [])
  
  
 */

  return (
    <div className="App">
{/* 
      <header className='App-header '>
        
        <CardQuotes info={quote} />

        <button onClick={ () => { getQuotes() } }>
          otra frase
        </button>

      

      </header> */}
      <header className='App-header '>
        
      </header>
    </div>
  );
}

export default App;
