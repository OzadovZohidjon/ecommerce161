import React, { useContext } from 'react'
import { Box, Container, Flex, Title, Button } from '../components'
import ProductListColumn from '../components/ProductsList/ProductListColumn'
import { Span } from '../components/Typography'
import Context from '../context/Context'
import { removeToCartAC } from '../utils/reducers/cartReducer'

export default function Cart() {
    const store = useContext(Context)
    const { cartProducts } = store.getState()
    function removeToCart(id) {
        store.dispatch(removeToCartAC(id))
    }
    return (
        <>
            <Container>
                <Title title='Корзина' />

                <Flex alignItems='flex-start' gap='20px'>
                    <Box w='75%' border='1px solid #E3E3E8' borderRadius='10px'>
                        <Flex
                            alignItems='center'
                            justifyContent='space-between'
                            py='15px'
                            px='30px'
                        >
                            <Span color='#222A46'>Товары в корзине</Span>
                            <Button>
                                <Span color='#7D818E'>Очистить корзину</Span>
                            </Button>
                        </Flex>

                        <ProductListColumn
                            products={cartProducts}
                            removeToCart={removeToCart}
                        />
                    </Box>

                    <Box w='25%'></Box>
                </Flex>
            </Container>
        </>
    )
}
