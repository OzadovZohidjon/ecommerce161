import axios from 'axios'

const SET_PRODUCT = 'set_product'
const SET_LOADING = 'set_loading'
const SET_ATTRIBUTES = 'set_attributes'

const initialState = {
    product: {},
    attributes: [],
    loading: true,
}
function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return { ...state, product: action.item }

        case SET_LOADING:
            return { ...state, loading: action.loading }

        case SET_ATTRIBUTES:
            return { ...state, attributes: action.attributes }

        default:
            return state
    }
}

export function setProductAC(item) {
    return {
        type: SET_PRODUCT,
        item,
    }
}

export function setLoadingAC(loading) {
    return {
        type: SET_LOADING,
        loading: loading,
    }
}

export function setAttributesAC(attributes) {
    return {
        type: SET_ATTRIBUTES,
        attributes: attributes,
    }
}

export function getProduct(slug) {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        axios
            .get(`https://ecommerce.main-gate.appx.uz/dev/v1/product/${slug}`)
            .then(function (response) {
                dispatch(setProductAC(response.data.product))
                dispatch(setLoadingAC(false))
            })
            .catch(function (error) {
                console.log(error)
                dispatch(setLoadingAC(false))
            })
    }
}

export function getAttributes() {
    return async function (dispatch) {
        dispatch(setLoadingAC(true))
        axios
            .get(`https://ecommerce.main-gate.appx.uz/dev/v1/attribute/list`)
            .then(function (response) {
                dispatch(setAttributesAC(response.data.attributes))
                dispatch(setLoadingAC(false))
            })
            .catch(function (error) {
                console.log(error)
                dispatch(setLoadingAC(false))
            })
    }
}
export default productReducer
