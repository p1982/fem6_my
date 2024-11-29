const category = 'category'
const product = {
    name: "Lenovo",
    "full name": "Lenovo IdeaPad",
    fullName: "Lenovo",
    full_Name: "Lenovo",
    category: "laptops",
    price: 1000,
    // makeDiscount: function (dValue) {
    //     return this.price *(1 - dValue/100);
    // },
    getInfo:() =>{
        console.log(this)
    },
    makeDiscount (dValue) {
        return this.price *(1 - dValue/100);
    }
};
product.getInfo()