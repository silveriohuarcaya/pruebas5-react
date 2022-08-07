import React, { useState, useEffect } from 'react'
import './App.css'

// eslint-disable-next-line no-unused-vars
const getPost = async () => {
  const url = new URL('https://jsonplaceholder.typicode.com/posts')
  const headers = new Headers({
    'Content-type': 'application/json',
    Authorization: 'Basic TXBp0mFwaQ==',
  })
  const req = new Request(url, { method: 'GET', headers })
  const res = await fetch(req)
  const data = await res.json()
  console.log('🚀 ~ file: App.jsx ~ line 11 ~ getPost ~ data', data)
}

// eslint-disable-next-line no-unused-vars
const createPost = async (post) => {
  const url = new URL('https://jsonplaceholder.typicode.com/posts')
  const headers = new Headers({
    'Content-type': 'application/json',
    Authorization: 'Basic TXBp0mFwaQ==',
  })
  const req = new Request(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(post),
  })
  const res = await fetch(req)
  const data = await res.json()
  console.log('🚀 ~ file: App.jsx ~ line 11 ~ getPost ~ data', data)
}

// eslint-disable-next-line no-unused-vars
const modifyPost = async (post) => {
  const url = new URL('https://jsonplaceholder.typicode.com/posts/1')
  const headers = new Headers({
    'Content-type': 'application/json',
  })
  const req = new Request(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post),
  })
  const res = await fetch(req)
  const data = await res.json()
  console.log('🚀 ~ file: App.jsx ~ line 11 ~ getPost ~ data', data)
}

const deletePost = async () => {
  const url = new URL('https://jsonplaceholder.typicode.com/posts/1')
  const headers = new Headers({
    'Content-type': 'application/json',
  })
  const req = new Request(url, {
    method: 'DELETE',
    headers,
  })
  const res = await fetch(req)
  const data = await res.json()
  console.log('🚀 ~ file: App.jsx ~ line 11 ~ getPost ~ data', data)
}

const getAxiosPost = async () => {
  const url = URL('https://jsonplaceholder.typicode.com/posts')
  const response = await axios.get(url)
  console.log(
    '🚀 ~ file: App.jsx ~ line 67 ~ getAxiosPost ~ response',
    response.data
  )
}

const createAxiosPost = async (post) => {
  const url = URL('https://jsonplaceholder.typicode.com/posts')
  const { data } = await axios.post(url, post)
  console.log('🚀 ~ file: App.jsx ~ line 77 ~ createAxiosPost ~ data', data)
}

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([])

  const post = {
    title: 'foo',
    body: 'bar baz',
    userId: 1,
  }

  useEffect(() => {
    // getAxiosPost()
    // createAxiosPost(post)
    // getPost()
    // createPost(post)
    // modifyPost(post)
    deletePost(post)
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
