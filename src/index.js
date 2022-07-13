import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './utils/data'
import Context from './context/Context'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))

function reRender() {
    root.render(
        <Context.Provider value={store}>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </Context.Provider>
    )
}

reRender()

store.subscribe(reRender)
