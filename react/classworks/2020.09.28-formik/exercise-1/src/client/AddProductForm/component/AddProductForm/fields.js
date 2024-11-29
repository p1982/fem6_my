export const fields = {
     name: {
         type: 'text',
         name: 'name',
         placeholder: 'Enter product name',
         required: true
     },
     code: {
        type: 'text',
        name: 'code',
        placeholder: 'Enter product code',
        required: true
    },
    price: {
        type: 'text',
        name: 'price',
        placeholder: 'Enter product price',
        required: true
    },
    category: {
        name: 'category',
        options: [{
            value: 'notebooks',
            text: 'notebooks',
        },
        {
            value: 'tablets',
            text: 'tablets'
        },
        {
            value: 'phones',
            text: 'phones'
        }
    ]
    },
    discount: {
        type: 'radio',
        name: 'discount',
        required: true
    },   
    delivery: {
        type: 'checkbox',
        name: 'delivery'
    },
    description: {
        name: 'description',
        placeholder: 'Enter product description',
        row: '5',
        required: true
    },
    submit: {
        type: 'submit',
        name: 'submit'
    }
}