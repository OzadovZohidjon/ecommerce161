function cartReducer(state, action) {
    switch (action.type) {
        case 'add_to_cart':
            return [...state, { ...action.action.product, qty: 1 }]
        case 'remove_to_cart':
            return (state = state.filter(
                (item) => item.id !== action.action.id
            ))
        default:
            return state
    }
}

export default cartReducer
