import React from 'react'
import { CloseIcon } from '../icons'
import { Flex, Box, Image } from '../index'
import { Span } from '../Typography'
import { ProductCart2Style } from './ProductCartStyle'

function ProductCart2({ product, ...props }) {
    return (
        <ProductCart2Style>
            <Flex gap='10px'>
                <Box w='90px' h='90px'>
                    <Image
                        src={product.images[0]}
                        alt={product.name_uz}
                        objectFit='cover'
                        borderRadius='5px'
                    />
                </Box>

                <Box flex='1 1 auto'>
                    <Flex justifyContent='space-between'>
                        <Span color='#222A46'>{product.name_uz}</Span>
                        <button>
                            <CloseIcon />
                        </button>
                    </Flex>
                </Box>
            </Flex>
        </ProductCart2Style>
    )
}

export default ProductCart2
