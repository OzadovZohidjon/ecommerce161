import React from 'react'
import { CloseIcon } from '../icons'
import { Flex, Box, Image, Counter, Button } from '../index'
import { H4, SemiSpan, Span } from '../Typography'
import { ProductCart2Style } from './ProductCartStyle'

function ProductCart2({ product, dispatch, ...props }) {
    return (
        <ProductCart2Style>
            <Flex gap='10px' borderBottom='1px solid #E2E4EB' pb='24px'>
                <Box w='90px' h='90px'>
                    <Image
                        src={product.images[0]}
                        alt={product.name_uz}
                        objectFit='cover'
                        borderRadius='5px'
                    />
                </Box>

                <Box flex='1 1 auto'>
                    <Flex justifyContent='space-between' mb='5px'>
                        <Span color='#222A46'>{product.name_uz}</Span>
                        <Button
                            onClick={() =>
                                dispatch({
                                    type: 'remove_to_cart',
                                    action: { id: product.id },
                                })
                            }
                        >
                            <CloseIcon />
                        </Button>
                    </Flex>

                    <Box mb='15px'>
                        <SemiSpan color='#505567'>
                            {product.description_uz}
                        </SemiSpan>
                    </Box>

                    <Flex gap='24px'>
                        <Counter qty={product.qty} />
                        <H4>{product.price.toLocaleString()} ₽</H4>
                    </Flex>
                </Box>
            </Flex>
        </ProductCart2Style>
    )
}

export default ProductCart2
