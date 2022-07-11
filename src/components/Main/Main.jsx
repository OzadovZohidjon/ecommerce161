import React from 'react'
import { routes } from '../../utils/routes'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'

function Main({ products, dispatch }) {
    return (
        <main className='main'>
            <Routes>
                {routes.map((item) => {
                    return (
                        <Route
                            key={item.id}
                            path={item.path}
                            element={item.component}
                        />
                    )
                })}
                <Route
                    path='/'
                    element={<Home products={products} dispatch={dispatch} />}
                />
            </Routes>
        </main>
    )
}

export default Main
