import React, { useState, useEffect } from 'react'
import Product from './components/examples/Product'
import { getAllProducts } from './services/Products'
import './App.css'

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const myData = await getAllProducts()
        setProducts(myData)
      } catch (error) {
        console.log('error')
      }
    }
    getData()
  }, [])

  return (
    <div className="App">
      <h1>DB - Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
export default App
