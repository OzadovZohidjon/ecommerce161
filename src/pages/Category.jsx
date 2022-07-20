import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Category() {
    // const location = useLocation()

    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://ecommerce.main-gate.appx.uz/dev/v1/category/${
    //                 location.pathname.split('/')[2]
    //             }`
    //         )
    //         .then((response) => {
    //             console.log(response.data)
    //         })
    //         .catch((error) => console.log(error))
    // }, [location])
    return <div>Category</div>
}
