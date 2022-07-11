import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './utils/data'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))

export function reRender() {
    root.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
    )
}

reRender()
