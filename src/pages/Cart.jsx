import React from 'react'
import { Box, Container, Flex, Title, Button } from '../components'
import ProductListColumn from '../components/ProductsList/ProductListColumn'
import { H3, Span } from '../components/Typography'
import { removeToCartAC } from '../utils/reducers/cartReducer'
import { useSelector, useDispatch } from 'react-redux'
import { sumAllPrice, sumQuantity } from '../utils/helpers'
import { Link } from 'react-router-dom'

export default function Cart() {
    const { cartProducts } = useSelector((state) => state)
    const dispatch = useDispatch()
    function removeToCart(id) {
        dispatch(removeToCartAC(id))
    }
    return (
        <Container>
            <Title title='Корзина' />

            {cartProducts.length > 0 ? (
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

                        <Box py='15px' px='30px'>
                            <ProductListColumn
                                products={cartProducts}
                                removeToCart={removeToCart}
                            />
                        </Box>
                    </Box>

                    <Box
                        w='25%'
                        backgroundColor='#FFFFFF'
                        border='1px solid #F2F6F7'
                        borderRadius='10px'
                    >
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                            p='10px 25px'
                            borderBottom='1px solid #F2F3F5'
                        >
                            <H3>Итого:</H3>
                            <H3>{sumAllPrice(cartProducts)} ₽</H3>
                        </Flex>

                        <Box p='10px 25px'>
                            <Flex
                                justifyContent='space-between'
                                alignItems='center'
                                mb='10px'
                            >
                                <Span fontSize='18px'>
                                    {sumQuantity(cartProducts)} товара:
                                </Span>
                                <H3>{sumAllPrice(cartProducts)} ₽</H3>
                            </Flex>
                            <Flex
                                justifyContent='space-between'
                                alignItems='center'
                                mb='10px'
                            >
                                <Span fontSize='18px'>Скидка:</Span>
                                <H3 color='#E2195B'>0 ₽</H3>
                            </Flex>
                            <Flex
                                justifyContent='space-between'
                                alignItems='center'
                                mb='10px'
                            >
                                <Span fontSize='18px'>Доставка</Span>
                                <H3>бесплатно</H3>
                            </Flex>
                        </Box>

                        <Box p='10px 25px'>
                            <Button
                                p='13px 0'
                                backgroundColor='#0093A2'
                                borderRadius='5px'
                                style={{ display: 'block', width: '100%' }}
                            >
                                <Span color='#fff'>Оформить заказ</Span>
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            ) : (
                <Flex alignItems='center' justifyContent='center' pt='150px'>
                    <Box>
                        <Span>Ничего не найдено.</Span>
                        <Button
                            mt='10px'
                            p='13px 0'
                            backgroundColor='#0093A2'
                            borderRadius='5px'
                            style={{ display: 'block', width: '100%' }}
                        >
                            <Link to='/'>
                                <Span color='#fff'>Вернуться домой</Span>
                            </Link>
                        </Button>
                    </Box>
                </Flex>
            )}
        </Container>
    )
}
