import React from 'react'
import { Link } from 'react-router-dom'
import { sumAllPrice, sumQuantity } from '../../utils/helpers'
import { BagIcon, HeartIcon, SearchIcon } from '../icons'
import { Box, Flex, Container, CircleBox, Badge, Button } from '../index'
import { Span } from '../Typography'
import { HeaderMidStyle } from './HeaderElements'
import { useSelector, useDispatch } from 'react-redux'

function HeaderMid() {
    const { cartProducts } = useSelector((state) => state)
    const dispatch = useDispatch()
    function modalHandler() {
        dispatch({ type: 'open' })
    }
    return (
        <HeaderMidStyle>
            <Container>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Box>
                        <Link to='/'>
                            <img src='./images/logo.svg' alt='Logo' />
                        </Link>
                    </Box>

                    <Flex>
                        <input type='text' placeholder='Поиск по сайту' />
                        <button>
                            <SearchIcon />
                        </button>
                    </Flex>

                    <Flex gap='20px'>
                        <CircleBox w='44px' h='44px' borderColor='#E2E4EB'>
                            <HeartIcon />
                        </CircleBox>

                        <Button onClick={() => modalHandler()}>
                            <Flex alignItems='center' gap='15px'>
                                <CircleBox
                                    w='44px'
                                    h='44px'
                                    borderColor='#E2E4EB'
                                >
                                    {cartProducts.length > 0 ? (
                                        <Badge
                                            qty={sumQuantity(cartProducts)}
                                        />
                                    ) : null}
                                    <BagIcon />
                                </CircleBox>
                                {cartProducts.length > 0 ? (
                                    <Span color='#E2195B'>
                                        {sumAllPrice(cartProducts)}₽
                                    </Span>
                                ) : null}
                            </Flex>
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </HeaderMidStyle>
    )
}

export default HeaderMid
