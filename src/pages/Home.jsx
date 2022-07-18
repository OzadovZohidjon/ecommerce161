import React from 'react'
import { Box, Container, Title } from '../components'
import ProductList from '../components/ProductsList/ProductList'
import { addToCartAC } from '../utils/reducers/cartReducer'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
    const { products } = useSelector((state) => state)
    const dispatch = useDispatch()
    function addToCart(product) {
        dispatch(addToCartAC(product))
    }
    return (
        <>
            <Container>
                <Box>
                    <Title
                        title='Букеты цветов с доставкой'
                        path='/category/1'
                    />
                    <ProductList addToCart={addToCart} products={products} />
                </Box>
            </Container>
        </>
    )
}
