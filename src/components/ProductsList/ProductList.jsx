import React from 'react'
import { Flex } from '../Flex'
import ProductCart1 from '../ProductCarts/ProductCart1'

function ProductList({ products, dispatch, ...props }) {
    return (
        <Flex gap='20px'>
            {products.map((item, i) => {
                return <ProductCart1 store={dispatch} key={i} product={item} />
            })}
        </Flex>
    )
}

export default ProductList
