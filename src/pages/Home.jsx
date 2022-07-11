import React from 'react'
import { Box, Container, Title } from '../components'
import ProductList from '../components/ProductsList/ProductList'

export default function Home({ products, dispatch }) {
    return (
        <>
            <Container>
                <Box>
                    <Title
                        title='Букеты цветов с доставкой'
                        path='/category/1'
                    />
            <ProductList dispatch={ dispatch}  products={products} />
                </Box>
            </Container>
        </>
    )
}
