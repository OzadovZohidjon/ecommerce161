import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import modalReducer from './modalReducer'
import productsReducer from './productsReducer'

export const reducers = combineReducers({
    products: productsReducer,
    cartProducts: cartReducer,
    open: modalReducer,
})
