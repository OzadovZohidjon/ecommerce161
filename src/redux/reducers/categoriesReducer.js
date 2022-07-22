import axios from 'axios'

const SET_CATEGORIES = 'set_categories'
const SET_LOADING = 'set_loading'

const initialState = {
    items: [],
    loading: false,
}

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            state.items = action.items
            return state

        case SET_LOADING:
            state.loading = action.loading
            return state

        default:
            return state
    }
}

export function setCategoriesAC(items) {
    return {
        type: SET_CATEGORIES,
        items: items,
    }
}

export function setLoadingAC(loading) {
    return {
        type: SET_LOADING,
        loading: loading,
    }
}

export function getCategories() {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        axios
            .get('https://ecommerce.main-gate.appx.uz/dev/v1/category/list')
            .then(function (response) {
                dispatch(setCategoriesAC(response.data.categories))
                dispatch(setLoadingAC(false))
            })
            .catch(function (error) {
                console.log(error)
                dispatch(setLoadingAC(false))
            })
    }
}

export default categoriesReducer
