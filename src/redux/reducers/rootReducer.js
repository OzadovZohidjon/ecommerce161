import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import categoriesReducer from './categoriesReducer'
import modalReducer from './modalReducer'
import productReducer from './productReducer'
import productsReducer from './productsReducer'

export const reducers = combineReducers({
    productsState: productsReducer,
    cartProducts: cartReducer,
    open: modalReducer,
    categories: categoriesReducer,
    product: productReducer,
})
