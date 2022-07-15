import React, { useContext } from 'react'
import { Box, Container, Title } from '../components'
import ProductList from '../components/ProductsList/ProductList'
import Context from '../context/Context'
import { addToCartAC } from '../utils/reducers/cartReducer'

export default function Home() {
    const store = useContext(Context)
    const { products } = store.getState()
    function addToCart(product) {
        store.dispatch(addToCartAC(product))
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
