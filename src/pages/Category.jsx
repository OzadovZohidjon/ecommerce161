import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
    Container,
    Flex,
    Box,
    Title,
    Dropdown,
    ProductsList,
} from '../components/index'
import { H3, SemiSpan } from '../components/Typography'
import { getCategorie } from '../redux/reducers/categoriesReducer'

export default function Category() {
    const { products } = useSelector((state) => state)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategorie(location.pathname.split('/')[2]))
    }, [location])

    const items = [
        {
            id: 1,
            name_ru: 'По алфавиту',
            slug: '/category/1',
        },
        {
            id: 2,
            name_ru: 'По популярности',
            slug: '/category/1',
        },
        {
            id: 3,
            name_ru: 'По убыванию цены',
            slug: '/category/1',
        },
        {
            id: 4,
            name_ru: 'По возрастанию цены',
            slug: '/category/1',
        },
    ]
    return (
        <Container>
            <Flex gap='20px'>
                <Box
                    w='25%'
                    background='#fff'
                    border='1px solid #F2F3F5'
                    borderRadius='5px'
                    p='20px'
                >
                    <H3>Sidebar</H3>
                </Box>

                <Box w='75%'>
                    <Flex justifyContent='space-between'>
                        <Title title='Букеты из роз' />
                        <Flex alignItems='center' gap='15px'>
                            <SemiSpan>Сортировать:</SemiSpan>
                            <Box
                                p='8px'
                                border='1px solid #D0D2D7'
                                borderRadius='5px'
                            >
                                <Dropdown
                                    title='По популярности'
                                    items={items}
                                />
                            </Box>
                        </Flex>
                    </Flex>

                    <Box>
                        {/* <ProductsList products={products} col={3} /> */}
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}
