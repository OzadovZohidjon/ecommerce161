import React from 'react'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'

function Header() {
    return (
        <header className='header'>
            <HeaderTop />
            <HeaderMid />
        </header>
    )
}

export default Header
