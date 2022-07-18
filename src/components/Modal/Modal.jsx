import React, { useContext } from 'react'
import { Flex, Box, Button } from '../index'
import { CloseIcon } from '../icons'
import { H3, H4, Span } from '../Typography'
import { ModalPanelMid, ModalPanelStyle, ModalStyle } from './ModalStyle'
import ProductCart2 from '../ProductCarts/ProductCart2'
import Context from '../../context/Context'
import { sumAllPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeToCartAC } from '../../utils/reducers/cartReducer'
function Modal() {
    const { open, cartProducts } = useSelector((state) => state)
    const dispatch = useDispatch()
    function modalHandler() {
        dispatch({ type: 'close' })
    }

    function removeToCart(id) {
        dispatch(removeToCartAC(id))
    }
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
                    <button onClick={() => modalHandler()}>
                        <CloseIcon />
                    </button>
                </Flex>

                <ModalPanelMid>
                    <Box>
                        {cartProducts.map((item, i) => {
                            return (
                                <ProductCart2
                                    key={i}
                                    product={item}
                                    removeToCart={removeToCart}
                                />
                            )
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
                        <Button onClick={() => modalHandler()}>
                            <Span>Продолжить покупки</Span>
                        </Button>
                        <Button onClick={() => modalHandler()}>
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
