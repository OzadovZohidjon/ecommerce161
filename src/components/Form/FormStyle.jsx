import styled from 'styled-components'

export const InputStyle = styled.input`
    background: #ffffff;
    border: 1px solid #d0d2d7;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 138%;
    color: #1b1c21;

    &::placeholder {
        color: #828388;
    }
`

export const LabelStyle = styled.label`
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #353949;
    margin-bottom: 5px;
`
