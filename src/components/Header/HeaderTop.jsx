import React from 'react'
import { Link } from 'react-router-dom'
import { blackColor } from '../../utils/constants'
import { SemiSpan } from '../Typography'
import { HeaderTopStyle } from './HeaderElements'
import { Box, Container, Flex, Button } from '../index'
import { ClockIcon, InstagramIcon, PersonIcon, VKIcon } from '../icons/index'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthModalAC } from '../../redux/reducers/modalReducer'

function HeaderTop() {
    const { isLogin } = useSelector((state) => state.userState)
    const dispatch = useDispatch()

    function modalHandler() {
        dispatch(setAuthModalAC(true))
    }

    return (
        <HeaderTopStyle>
            <Container>
                <Flex justifyContent='space-between'>
                    <Flex alignItems='center'>
                        <Box mr='10px' className='workTime__icon'>
                            <ClockIcon style={{ verticalAlign: 'top' }} />
                        </Box>

                        <Box className='workTime__text'>
                            <SemiSpan color={blackColor}>
                                Пн-Сб: 8:00–20:00 Вс: 9:00–20:00
                            </SemiSpan>
                        </Box>
                    </Flex>
                    <Flex alignItems='center' style={{ gap: '15px' }}>
                        <Link to='/'>
                            <SemiSpan>Доставка</SemiSpan>
                        </Link>
                        <Link to='/'>
                            <SemiSpan>Оплата</SemiSpan>
                        </Link>
                        <Link to='/'>
                            <SemiSpan>Отзывы</SemiSpan>
                        </Link>
                        <Link to='/'>
                            <SemiSpan>Блог</SemiSpan>
                        </Link>
                        <Link to='/'>
                            <SemiSpan>Информация</SemiSpan>
                        </Link>
                        <Link to='/'>
                            <SemiSpan>Контакты</SemiSpan>
                        </Link>
                    </Flex>

                    <Flex style={{ gap: '30px' }}>
                        <Flex alignItems='center' style={{ gap: '15px' }}>
                            <Link to='/'>
                                <VKIcon />
                            </Link>
                            <Link to='/'>
                                <InstagramIcon />
                            </Link>
                        </Flex>

                        {isLogin ? (
                            <Link to='/'>
                                <Flex
                                    alignItems='center'
                                    style={{ gap: '15px' }}
                                >
                                    <PersonIcon />
                                    <SemiSpan>Мои заказы</SemiSpan>
                                </Flex>
                            </Link>
                        ) : (
                            <Button onClick={() => modalHandler()}>
                                <Flex
                                    alignItems='center'
                                    style={{ gap: '15px' }}
                                >
                                    <PersonIcon />
                                    <SemiSpan>Вход</SemiSpan>
                                </Flex>
                            </Button>
                        )}
                    </Flex>
                </Flex>
            </Container>
        </HeaderTopStyle>
    )
}

export default HeaderTop
