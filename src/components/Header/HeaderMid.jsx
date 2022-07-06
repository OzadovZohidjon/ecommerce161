import React from 'react'
import { BagIcon, HeartIcon, SearchIcon } from '../icons'
import {Box,Flex, Container, CircleBox, Badge} from '../index'
import { SemiSpan, Span } from '../Typography'
import { HeaderMidStyle } from './HeaderElements'

function HeaderMid() {
  return (
    <HeaderMidStyle>
        <Container>
                <Flex alignItems='center' justifyContent="space-between">
                    <Box>
                        <img src='./images/logo.svg' alt='Logo'/>
                    </Box>

                    <Flex>
                        <input type="text" placeholder='Поиск по сайту'/>
                        <button>
                            <SearchIcon/>
                        </button>
                    </Flex>

                    <Flex gap="20px">
                        <CircleBox w="44" h="44" borderColor="#E2E4EB">
                            <HeartIcon/>
                        </CircleBox>
                        
                        <Flex alignItems="center" gap="15px">
                            <CircleBox w="44" h="44" borderColor="#E2E4EB">
                                <Badge>
                                    <SemiSpan color="#fff">
                                        2
                                    </SemiSpan>
                                </Badge>
                                <BagIcon/>
                            </CircleBox>

                            <Span color="#E2195B">
                                16 500 ₽
                            </Span>
                        </Flex>
                    </Flex>
                </Flex>
        </Container>
    </HeaderMidStyle>
  )
}

export default HeaderMid