import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from '../Button'
import { H5 } from '../Typography'
import { CounterStyle } from './CounterStyle'

function Counter({ qty, ...props }) {
    const [count, setCount] = useState(1)
    function Increment() {
        setCount(count + 1)
    }

    function Decrement() {
        if (count === 1) {
            setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    useEffect(() => {
        setCount(qty)
    }, [qty])

    return (
        <CounterStyle>
            <Button
                color='#7D818E'
                fontSize='20px'
                borderWidth='0'
                onClick={() => Decrement()}
            >
                -
            </Button>
            <H5>{count}</H5>
            <Button
                color='#7D818E'
                fontSize='20px'
                borderWidth='0'
                onClick={() => Increment()}
            >
                +
            </Button>
        </CounterStyle>
    )
}

export default Counter
