import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './utils/data'
import Context from './context/Context'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))

function reRender() {
    root.render(
        <BrowserRouter>
            <Context.Provider value={store}>
                <App />
            </Context.Provider>
        </BrowserRouter>
    )
}

reRender()

store.subscribe(reRender)
