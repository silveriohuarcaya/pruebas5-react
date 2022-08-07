import React, { useState, useEffect } from 'react'
import { getCharacters } from './services/Characters'
import './App.css'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCharacters()
        setCharacters(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()

    /* usando Promise
    getCharacters()
      .then((data) => setCharacters(data))
      .catch((error) => console.log(error)) */
  }, [])

  return (
    <div className="App">
      <h1>DB - Characters</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>
            {character.name} - {character.status}
          </p>
        </div>
      ))}
    </div>
  )
}
export default App
