import React, { useContext } from 'react'
import { Flex, Box, Button } from '../index'
import { CloseIcon } from '../icons'
import { H3, H4, Span } from '../Typography'
import { ModalPanelMid, ModalPanelStyle, ModalStyle } from './ModalStyle'
import ProductCart2 from '../ProductCarts/ProductCart2'
import Context from '../../context/Context'
import { sumAllPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'

function Modal() {
    let store = useContext(Context)
    let { open, cartProducts } = store.getState()
    return (
        <ModalStyle open={open}>
            <ModalPanelStyle open={open}>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    p='20px'
                    borderBottom='1px solid#E2E4EB'
                >
                    <H4>Корзина</H4>
                    <button onClick={() => store.dispatch({ type: 'close' })}>
                        <CloseIcon />
                    </button>
                </Flex>

                <ModalPanelMid>
                    <Box>
                        {cartProducts.map((item, i) => {
                            return <ProductCart2 key={i} product={item} />
                        })}
                    </Box>
                </ModalPanelMid>

                <Box>
                    <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        p='20px'
                    >
                        <H3 color='#1B1C21'>Итого:</H3>
                        <H3 color='#1B1C21'>{sumAllPrice(cartProducts)} ₽</H3>
                    </Flex>

                    <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        p='20px'
                        backgroundColor='#F2F6F7'
                    >
                        <Button
                            onClick={() => store.dispatch({ type: 'close' })}
                        >
                            <Span>Продолжить покупки</Span>
                        </Button>
                        <Button
                            onClick={() => store.dispatch({ type: 'close' })}
                        >
                            <Link to='/cart'>
                                <Span>Оформить заказ</Span>
                            </Link>
                        </Button>
                    </Flex>
                </Box>
            </ModalPanelStyle>
        </ModalStyle>
    )
}

export default Modal
