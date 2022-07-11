import styled from 'styled-components'
import { border, color, fontSize, space } from 'styled-system'

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid black;
    cursor: pointer;
    font-size: 16px;

    ${(props) => props.size}

    ${color};
    ${border};
    ${fontSize};
    ${space}
`
