import { setLocaleStorage } from '../../utils/helpers'

const SET_USER = 'set_user'

// const initialState = {
//     isLogin: localStorage.getItem('userState').isLogin || false,
//     user: localStorage.getItem('userState').isLogin || {},
// }

const initialState = {
    isLogin: false,
    user: {},
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return setLocaleStorage('userState', {
                isLogin: true,
                user: action.user,
            })
        default:
            return state
    }
}

export function setUserAC(user) {
    return {
        type: SET_USER,
        user,
    }
}

export default userReducer
