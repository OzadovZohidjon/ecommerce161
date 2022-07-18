import React from 'react'
import { Box, Container, Flex, Title, Button } from '../components'
import ProductListColumn from '../components/ProductsList/ProductListColumn'
import { Span } from '../components/Typography'
import { removeToCartAC } from '../utils/reducers/cartReducer'
import { useSelector, useDispatch } from 'react-redux'

export default function Cart() {
    const { cartProducts } = useSelector((state) => state)
    const dispatch = useDispatch()
    function removeToCart(id) {
        dispatch(removeToCartAC(id))
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
