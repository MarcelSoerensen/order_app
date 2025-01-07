let myDishes = [
    {
        "restaurant": "Casa della Pasta",
        "subtitel": "Italienisches Restaurant",
        "image": './assets/img/ai-generated-8714508_1920.jpg',
        "symbol": './assets/icons/pizza-svgrepo-com.svg',
        "dishes": [
            {
                "name": "Spaghetti Carbonara",
                "description": "Cremige Pasta mit Speck und Parmesan",
                "price": 12.99
            },
            {
                "name": "Pollo alla Cacciatora",
                "description": "Hähnchen in Tomaten-Oliven-Sauce mit frischen Kräutern",
                "price": 17.00
            },
            {
                "name": "Melanzane alla Parmigiana",
                "description": "Auberginenauflauf mit Tomatensauce, Mozzarella und Parmesan",
                "price": 14.50
            },
            {
                "name": "Pesce al Forno",
                "description": "Ofengebackener Fisch des Tages mit Kräutern und Olivenöl",
                "price": 18.00
            },
        ]
    },
    {
        "restaurant": "Drachenpalast",
        "subtitel": "Chinesisches Restaurant",
        "image": './assets/img/chinese-food-8119421_1920.jpg',
        "symbol": './assets/icons/noodles-svgrepo-com.svg',
        "dishes": [
            {
                "name": "Hühnerfleisch mit Cashewkernen",
                "description": "Hühnerbrustfilet in einer würzigen Sauce mit Cashews",
                "price": 13.50
            },
            {
                "name": "Peking-Ente",
                "description": "Knusprige Ente mit Pfannkuchen, Frühlingszwiebeln und Hoisinsauce",
                "price": 18.90
            },
            {
                "name": "Rindfleisch in schwarzer Bohnensauce",
                "description": "Zartes Rindfleisch in einer aromatischen schwarzen Bohnensauce",
                "price": 14.50
            },
            {
                "name": "Schweinefleisch süß-sauer",
                "description": "Schweinefleisch in einer süß-sauren Sauce mit Paprika und Ananas",
                "price": 12.90
            }
        ]
    },
    {
        "restaurant": "Die Steakschmiede",
        "subtitel": "Steak House",
        "image": './assets/img/meat-6222139_1920.jpg',
        "symbol": './assets/icons/steak-svgrepo-com.svg',
        "dishes": [
            {
                "name": "Filetsteak (200 g)",
                "description": "Zartes Filetsteak, gegrillt nach Wunsch",
                "price": 21.00
            },
            {
                "name": "Ribeye Steak (300 g)",
                "description": "Saftiges Ribeye mit ausgeprägtem Geschmack",
                "price": 24.00
            },
            {
                "name": "New York Strip (250 g)",
                "description": "Mageres, aber intensives Steak mit feiner Marmorierung",
                "price": 22.00
            },
            {
                "name": "T-Bone Steak (500 g)",
                "description": "Klassisches T-Bone mit Filet und Strip",
                "price": 28.00
            },
            {
                "name": "Tomahawk Steak (700 g))",
                "description": "Großes, markantes Steak mit Knochen",
                "price": 34.00
            }
        ]
    },
];

function renderOrderBox() {
    let orderRestaurantRef = document.getElementById('order_selection');
    orderRestaurantRef.innerHTML = "";
    for (let restaurantIndex = 0; restaurantIndex < myDishes.length; restaurantIndex++) {
        orderRestaurantRef.innerHTML += getRenderOrderrestaurantTemplate(restaurantIndex);
            
        let orderDishRef = document.getElementById(`order_dishes${restaurantIndex}`)
        for (let dishesIndex = 0; dishesIndex < myDishes[restaurantIndex].dishes.length; dishesIndex++) {
            orderDishRef.innerHTML += getRenderDishTemplate(restaurantIndex, dishesIndex);          
        }
    }
}

