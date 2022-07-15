import React from 'react'
import { SemiSpan } from '../Typography'
import { BadgeStyle } from './BadgeStyle'

export default function Badge({ qty }) {
    return (
        <BadgeStyle>
            <SemiSpan color='#fff'>{qty}</SemiSpan>
        </BadgeStyle>
    )
}
