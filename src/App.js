import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import { GlobalFonts } from './components/GlobalFonts'
import { GlobalStyles } from './components/GlobalStyles'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Modal from './components/Modal/Modal'

function App() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <GlobalStyles />
            <GlobalFonts />
            <Header open={open} setOpen={setOpen} />
            <Main />
            <Footer />
            <Modal open={open} setOpen={setOpen} />
        </>
    )
}

export default App
