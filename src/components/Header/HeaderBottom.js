import React, { useEffect, useState } from 'react'
import { Container, Flex, Dropdown } from '../index'
import { HeaderBottomStyle } from './HeaderElements'
import axios from 'axios'
import { H4, Span } from '../Typography'
import { Link } from 'react-router-dom'
import { ArrowDown } from '../icons'
import {
    getCategories,
    setCategoriesAC,
} from '../../redux/reducers/categoriesReducer'
import { useDispatch, useSelector } from 'react-redux'

function HeaderBottom() {
    const { items, loading } = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <HeaderBottomStyle>
            <Container>
                {loading ? (
                    <Span>Loading...</Span>
                ) : (
                    <Flex gap='40px'>
                        {items.map((item, i) => {
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
