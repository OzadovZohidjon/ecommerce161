import React from 'react'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'

function Header({ open, setOpen }) {
    return (
        <header className='header'>
            <HeaderTop />
            <HeaderMid open={open} setOpen={setOpen} />
        </header>
    )
}

export default Header
