import React, { useState, useEffect } from 'react'
import './App.css'
import { getAllProducts } from './services/products'
import Product from './components/examples/Product'

// console.log('🚀 ~ file: App.jsx ~ line 4 ~ DB', DB)

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch()
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
