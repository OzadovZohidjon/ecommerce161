let initialState = false

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case 'open':
            return true
        case 'close':
            return false
        default:
            return state
    }
}

export default modalReducer
