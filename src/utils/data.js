import product_img_1 from '../assets/images/product/product_img_1.png'
import product_img_2 from '../assets/images/product/product_img_2.png'
import product_img_3 from '../assets/images/product/product_img_3.png'
import product_img_4 from '../assets/images/product/product_img_4.png'
import product_img_5 from '../assets/images/product/product_img_5.png'
import product_img_6 from '../assets/images/product/product_img_6.png'
import product_img_7 from '../assets/images/product/product_img_7.png'
import product_img_8 from '../assets/images/product/product_img_8.png'

export const images = {
    product_img_1: product_img_1,
    product_img_2: product_img_2,
    product_img_3: product_img_3,
    product_img_4: product_img_4,
    product_img_5: product_img_5,
    product_img_6: product_img_6,
    product_img_7: product_img_7,
    product_img_8: product_img_8,
}

const products = [
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
            images.product_img_5,
            images.product_img_4,
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
            images.product_img_7,
            images.product_img_8,
            images.product_img_4,
            images.product_img_3,
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
            images.product_img_5,
            images.product_img_6,
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
        ],
    },
]

const product = {
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
