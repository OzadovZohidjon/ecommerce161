import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Container, Flex, Image } from '../components'
import { H1, SemiSpan } from '../components/Typography'

export default function Product() {
    const { product } = useSelector((state) => state)
    const [activeAttribute, setActiveAttribute] = useState([])

    function activeAttributeHandler(attributeId, valueId) {
        let str = `${attributeId},${valueId}`
        setActiveAttribute([...activeAttribute, str])
  }
  
    console.log(activeAttribute)

    return (
        <Container>
            <Flex gap='25px'>
                <Box w='50%'>
                    <Image src={product.images[0]} />
                </Box>
                <Box w='49%' border='1px solid #E2E4EB' p='20px 25px'>
                    <H1 color='#222A46' mb='5px'>
                        {product.name_ru}
                    </H1>
                    <SemiSpan
                        dangerouslySetInnerHTML={{
                            __html: product.description_uz,
                        }}
                    ></SemiSpan>

                    <Box mt='10px'>
                        {product.attributes.map((attribute) => {
                            return (
                                <Box key={attribute.id} mb='10px'>
                                    <SemiSpan>
                                        {attribute.attribute_name_ru}
                                    </SemiSpan>
                                    <Flex flexWrap='wrap' gap='5px' mt='10px'>
                                        {attribute.values.map((value) => {
                                            return (
                                                <Box
                                                    key={value.value_id}
                                                    p='6px 10px'
                                                    border='1px solid #D0D2D7'
                                                    background={
                                                        activeAttribute.includes(
                                                            `${attribute.id},${value.value_id}`
                                                        )
                                                            ? '#0093A2'
                                                            : '#fff'
                                                    }
                                                    borderRadius='5px'
                                                    onClick={() =>
                                                        activeAttributeHandler(
                                                            attribute.id,
                                                            value.value_id
                                                        )
                                                    }
                                                >
                                                    <SemiSpan color='#353949'>
                                                        {value.value_name_ru}
                                                    </SemiSpan>
                                                </Box>
                                            )
                                        })}
                                    </Flex>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}
