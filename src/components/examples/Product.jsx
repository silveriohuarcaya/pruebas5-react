import React from 'react'

const Product = ({ product }) => (
  <div>
    <div>
      <img src={product.image} alt={product.name} />
    </div>
    <div>
      <p>{product.name}</p>
      <p>
        <small>$</small>
        <b>{product.price}</b>
      </p>
      <p>{product.description}</p>
    </div>
  </div>
)
export default Product
