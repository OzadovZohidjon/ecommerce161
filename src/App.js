import axios from 'axios'
import React from 'react'
import Footer from './components/Footer/Footer'
import { GlobalFonts } from './components/GlobalFonts'
import { GlobalStyles } from './components/GlobalStyles'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Modal from './components/Modal/Modal'

function App() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })

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
