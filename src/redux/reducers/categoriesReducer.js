const SET_CATEGORIES = 'set_categories'

const initialState = []

function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            state = action.items
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

// export function getCategories() {
//     setLoading(true)
//     axios
//         .get('https://ecommerce.main-gate.appx.uz/dev/v1/category/list')
//         .then(function (response) {
//             dispatch(setCategoriesAC(response.data.categories))
//             setLoading(false)
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }

export default categoriesReducer
