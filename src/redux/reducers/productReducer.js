import { images } from '../../utils/data'

const SET_PRODUCT = 'set_product'

const initialState = {
    id: 1,
    name_ru: 'Букет малиновых роз',
    name_uz: 'Букет малиновых роз',
    description_uz:
        '<p>Высота: <strong>60 см</strong>, &nbsp;&nbsp;&nbsp;&nbsp; Ширина: <strong>35 см</strong></p>',
    description_ru:
        '<p>Высота: <strong>60 см</strong>, Ширина: <strong>35 см</strong></p>',
    slug: 'buket-malinovix-rozi',
    price: 13499,
    old_price: 15499,
    images: [
        images.product_img_1,
        images.product_img_2,
        images.product_img_3,
        images.product_img_4,
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
        {
            id: 2,
            attribute_name_uz: 'Упаковка',
            attribute_name_ru: 'Упаковка',
            values: [
                {
                    value_id: 1,
                    value_name_uz: 'Ленточка',
                    value_name_ru: 'Ленточка',
                },
                {
                    value_id: 2,
                    value_name_uz: 'Крафт (+290₽)',
                    value_name_ru: 'Крафт (+290₽)',
                },
                {
                    value_id: 3,
                    value_name_uz: 'Корейская (+390₽)',
                    value_name_ru: 'Корейская (+390₽)',
                },
            ],
        },
    ],
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCT:
            return state

        default:
            return state
    }
}

export default productReducer
