// - получение всего списка товаров get запрос на "/products" 
/* Формат ответа
{
    status: "Success",
    results: [{
        id: 12,
        name: "",
        price: 1200,
        categoryId: 14
    }]
}
*/
// - получение списка товаров по заданым критериям get запрос "products?category=price"
//     критерии - без "/" - ?
//     название критерия=значение ( category = notebook)
//     критерий priceFrom=100&priceTo=10000
//     следующий критерий через &

// - получения одного товара  get запрос "/products/:id"
/**
 Успешный ответ -объект, описывающий товар
 */
// - добавление товара post запрос с телом товара на "/products"
/*
{
        name: "",
        price: 1200,
        categoryId: 14   
}
{
    status: "Success",
    results: {
        id: 45,
        name: "",
        price: 1200,
        categoryId: 14
    }
}
*/
// - редактирование товара put запрос с телом на "/products/:id"
// - удаление товара delete запрос на "/products/:id"

// пагинация:
// "/products?page=1" - каждая страница - 10 товаров
// "/products?page=2&pageToProducts=20"
