import React from 'react'
import { Box, Container, Title } from '../components'
import ProductList from '../components/ProductsList/ProductList'
import { products } from '../utils/data'

export default function Home() {
  return (
    <>
        <Container>
            <Box>
                <Title title='Букеты цветов с доставкой' path="/category/1"/>
                <ProductList products={products}/>
            </Box>
        </Container>
    </>
  )
}
