import React from 'react'
import { InputStyle, LabelStyle } from './FormStyle'

function Form() {
    return <div>Form</div>
}

export function Input({ ...props }) {
    return <InputStyle {...props} />
}

export function Label({ children, ...props }) {
    return <LabelStyle {...props}>{children}</LabelStyle>
}
export default Form
