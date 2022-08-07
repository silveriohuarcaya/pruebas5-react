const apiUrl = 'https://rickandmortyapi.com/api'

/* creando Characters Metodo POST

export const createCharacters = async (character) => {
  try {
    const request = {
      method: 'POST,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(character)
    }
    const res = await fetch(`${apiUrl}/character`, request)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error(error)
  }
  return console.log('Bien')
}
*/

/* Leyendo Characters Metodo GET */

export const getCharacters = async () => {
  try {
    const res = await fetch(`${apiUrl}/character`)
    const data = await res.json()
    return data.results
  } catch (error) {
    console.error(error)
  }
  return console.log('Bien')
}

/* usando Promise
  export const getCharacters = () =>
  fetch(`${apiUrl}/character`)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((error) => console.log(error)) */

/* Usando Promise
  export const getIdCharacter = (id) =>
  fetch(`${apiUrl}/character/${id}`)
    .then((data) => data.json())
    .catch((error) => console.log(error)) */

// eslint-disable-next-line consistent-return
export const getIdCharacter = async (id) => {
  try {
    const dataItem = await fetch(`${apiUrl}/character/${id}`)
    return dataItem
  } catch (error) {
    console.log(error)
  }
}
