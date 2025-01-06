let myDishes = [
    {
        "category": "Italienische Küche",
        "image": './assets/img/ai-generated-8714508_1920.jpg',
        "symbol": './assets/icons/pizza-svgrepo-com.svg',
        "dishes": [
            {
                "name": "Spaghetti Carbonara",
                "price": 12.99,
                "description": "Cremige Pasta mit Speck und Parmesan"
            },
            {
                "name": "Spaghetti Carbonara 1",
                "price": 12.99,
                "description": "Cremige Pasta mit Speck und Parmesan"
            }
        ]
    },
    {
        "category": "Chinesische Küche",
        "image": './assets/img/chinese-food-8119421_1920.jpg',
        "symbol": './assets/icons/noodles-svgrepo-com.svg'
    },
    {
        "category": "Vom Grill",
        "image": './assets/img/meat-6222139_1920.jpg',
        "symbol": './assets/icons/steak-svgrepo-com.svg'
    },
];

function render() {
    let orderContainer = document.getElementById('order_section');
    orderContainer.innerHTML = /*html*/`
        <div class="restaurant_preview">
            <img class="category_img" src="${myDishes[0].image}" alt="">
        <div class="category_symbol_bg">
            <img class="category_symbol" src="${myDishes[0].symbol}" alt="">
        </div>
        <div class="category_headline">
            <h3>${myDishes[0].category}</h3>
            <div></div>
        </div>
    `
}