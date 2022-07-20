import React from 'react'
import Footer from './components/Footer/Footer'
import { GlobalFonts } from './components/GlobalFonts'
import { GlobalStyles } from './components/GlobalStyles'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Modal from './components/Modal/Modal'

function App() {
    

    return (
        <>
            <GlobalStyles />
            <GlobalFonts />
            <Header />
            <Main />
            <Footer />
            <Modal />
        </>
    )
}

export default App
