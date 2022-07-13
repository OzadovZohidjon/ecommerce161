import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import { GlobalFonts } from './components/GlobalFonts'
import { GlobalStyles } from './components/GlobalStyles'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Modal from './components/Modal/Modal'

function App({ store }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <GlobalStyles />
            <GlobalFonts />
            <Header open={open} setOpen={setOpen} />
            <Main products={store.getState().products} dispatch={store} />
            <Footer />
            <Modal
                dispatch={store}
                products={store.getState().cartProducts}
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default App
