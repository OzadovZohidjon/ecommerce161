import cartReducer from './reducers/cartReducer'
import modalReducer from './reducers/modalReducer'

export const store = {
    _state: {
        products: [
            {
                id: 1,
                name_ru: 'Букет малиновых роз',
                name_uz: 'Букет малиновых роз',
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'buket-malinovix-rozi',
                price: 13499,
                old_price: 15499,
                images: [
                    './images/product/product_img_1.png',
                    './images/product/product_img_2.png',
                    './images/product/product_img_3.png',
                    './images/product/product_img_4.png',
                ],
                attributes: [
                    {
                        id: 1,
                        attribute_name_uz: 'Длина',
                        attribute_name_ru: 'Длина',
                        values: [
                            {
                                value_id: 1,
                                value_name_uz: '40 sm',
                                value_name_ru: '40 см',
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name_ru: 'Букет малиновых роз',
                name_uz: 'Букет малиновых роз',
                price: 13499,
                old_price: 15499,
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'buket-malinovix-rozi',
                images: [
                    './images/product/product_img_3.png',
                    './images/product/product_img_4.png',
                    './images/product/product_img_3.png',
                    './images/product/product_img_4.png',
                ],
                attributes: [
                    {
                        id: 1,
                        attribute_name_uz: 'Длина',
                        attribute_name_ru: 'Длина',
                        values: [
                            {
                                value_id: 1,
                                value_name_uz: '40 sm',
                                value_name_ru: '40 см',
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name_ru: 'Букет малиновых роз',
                name_uz: 'Букет малиновых роз',
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'buket-malinovix-rozi',
                price: 13499,
                old_price: 15499,
                images: [
                    './images/product/product_img_7.png',
                    './images/product/product_img_8.png',
                    './images/product/product_img_3.png',
                    './images/product/product_img_4.png',
                ],
                attributes: [
                    {
                        id: 1,
                        attribute_name_uz: 'Длина',
                        attribute_name_ru: 'Длина',
                        values: [
                            {
                                value_id: 1,
                                value_name_uz: '40 sm',
                                value_name_ru: '40 см',
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name_ru: 'Букет малиновых роз',
                name_uz: 'Букет малиновых роз',
                description_uz: 'Высота: 60 см, Ширина: 35 см',
                description_ru: 'Высота: 60 см, Ширина: 35 см',
                slug: 'buket-malinovix-rozi',
                price: 13499,
                old_price: 15499,
                images: [
                    './images/product/product_img_5.png',
                    './images/product/product_img_6.png',
                    './images/product/product_img_3.png',
                    './images/product/product_img_4.png',
                ],
                attributes: [
                    {
                        id: 1,
                        attribute_name_uz: 'Длина',
                        attribute_name_ru: 'Длина',
                        values: [
                            {
                                value_id: 1,
                                value_name_uz: '40 sm',
                                value_name_ru: '40 см',
                            },
                        ],
                    },
                ],
            },
        ],
        cartProducts: [],
        open: false,
    },

    _render() {
        console.log('render')
    },
    
    getState() {
        return this._state
    },

    dispatch(action) {
        console.log(this._state)

        this._state.cartProducts = cartReducer(this._state.cartProducts, action)
        this._state.open = modalReducer(this._state.open, action)
        this._render()
    },
    subscribe(observer) {
        this._render = observer
    },
}
