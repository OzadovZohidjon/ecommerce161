import React from 'react'
import { Flex, Box } from '../index'
import { CloseIcon } from '../icons'
import { H3, H4 } from '../Typography'
import { ModalPanelMid, ModalPanelStyle, ModalStyle } from './ModalStyle'
import { products } from '../../utils/data'
import ProductCart2 from '../ProductCarts/ProductCart2'

function Modal({ open, setOpen }) {
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
                    <button onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </button>
                </Flex>

                <ModalPanelMid>
                    <Box>
                        {products.map((item, i) => {
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
                        <H3 color='#1B1C21'>18 230 ₽</H3>
                    </Flex>

                    <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        p='20px'
                        backgroundColor='#F2F6F7'
                    >
                        <button>Продолжить покупки</button>
                        <button>Оформить заказ</button>
                    </Flex>
                </Box>
            </ModalPanelStyle>
        </ModalStyle>
    )
}

export default Modal
