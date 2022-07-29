import React from 'react'
import Footer from './components/Footer/Footer'
import { GlobalFonts } from './components/GlobalFonts'
import { GlobalStyles } from './components/GlobalStyles'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import CartModal from './components/Modal/CartModal'
import AuthModal from './components/Modal/AuthModal'

function App() {
    return (
        <>
            <GlobalStyles />
            <GlobalFonts />
            <Header />
            <Main />
            <Footer />
            <CartModal />
            <AuthModal />
        </>
    )
}

export default App
