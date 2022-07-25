import axios from 'axios'

const SET_CATEGORIES = 'set_categories'
const SET_LOADING = 'set_loading'

const initialState = {
    items: [],
    categoryAttributes: [],
    subCats: [],
    products: [],
    pagination: {},
    loading: false,
}

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, items: action.items }

        case SET_LOADING:
            return { ...state, loading: action.loading }

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

export function getCategorie(slug) {
    return async function (dispatch) {
        axios
            .get(`https://ecommerce.main-gate.appx.uz/dev/v1/category/${slug}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => console.log(error))
    }
}

export default categoriesReducer
