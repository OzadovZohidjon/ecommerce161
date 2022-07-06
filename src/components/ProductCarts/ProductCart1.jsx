import React from 'react'

function ProductCart1({product, ...props}) {
  return (
    <img src={product.images[0]} />
  )
}

export default ProductCart1
