import React from 'react'
import { routes } from '../../utils/routes'
import { Routes, Route } from 'react-router-dom'

function Main() {
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
            </Routes>
        </main>
    )
}

export default Main
