import React, { useEffect, useState } from 'react'
import { Container, Flex, Dropdown } from '../index'
import { HeaderBottomStyle } from './HeaderElements'
import axios from 'axios'
import { H4, Span } from '../Typography'
import { Link } from 'react-router-dom'
import { ArrowDown } from '../icons'
import { setCategoriesAC } from '../../redux/reducers/categoriesReducer'
import { useDispatch, useSelector } from 'react-redux'

function HeaderBottom() {
    const [loading, setLoading] = useState(false)
    const { categories } = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        axios
            .get('https://ecommerce.main-gate.appx.uz/dev/v1/category/list')
            .then(function (response) {
                dispatch(setCategoriesAC(response.data.categories))
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
            })
        axios
            .get('https://ecommerce.main-gate.appx.uz/dev/v1/product/list')
            .then(function (response) {
                console.log(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    return (
        <HeaderBottomStyle>
            <Container>
                {loading ? (
                    <Span>Loading...</Span>
                ) : (
                    <Flex gap='40px'>
                        {categories.map((item, i) => {
                            return (
                                <Link key={i} to={`/category/${item.slug}`}>
                                    {item.children.length > 0 ? (
                                        <Dropdown
                                            title={item.name_ru}
                                            items={item.children}
                                        />
                                    ) : (
                                        <H4 color=' #1B1C21'>{item.name_ru}</H4>
                                    )}
                                </Link>
                            )
                        })}
                    </Flex>
                )}
            </Container>
        </HeaderBottomStyle>
    )
}

export default HeaderBottom
