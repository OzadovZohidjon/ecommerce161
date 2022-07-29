import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../components'
import { setUserAC } from '../redux/reducers/userReducer'

function Profile() {
    const { userState } = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('accessToken'))
            axios
                .get(
                    'https://ecommerce.main-gate.appx.uz/dev/v1/user/profile',
                    {
                        headers: {
                            Authorization:
                                'Bearer ' + localStorage.getItem('accessToken'),
                        },
                    }
                )
                .then(function (response) {
                    if (response.data.user) {
                        dispatch(setUserAC(response.data.user))
                        console.log(response)
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })
    }, [])

    return (
        <Container>
            <div>{userState.user.email}</div>
        </Container>
    )
}

export default Profile
