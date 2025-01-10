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

function renderRestaurantSelection() {
    let selectRestaurantRef = document.getElementById('restaurant_selection');
    let italianOrderSectionRef = document.getElementById(`order_box${[0]}`);
    let chineseOrderSectionRef = document.getElementById(`order_box${[1]}`);
    let steakHouseOrderSectionRef = document.getElementById(`order_box${[2]}`);
    let bagRef = document.getElementById('bag');
    let bagIconRef = document.getElementById('bag_icon');
    steakHouseOrderSectionRef.classList.add('d_none');
    italianOrderSectionRef.classList.add('d_none');
    chineseOrderSectionRef.classList.add('d_none');
    selectRestaurantRef.classList.remove('d_none');
    bagRef.classList.add('d_none');
    bagIconRef.classList.add('d_none');
    selectRestaurantRef.innerHTML = getRenderRestaurantSelectionTemplate(); 
}

function renderOrderSection() {
    let orderRestaurantRef = document.getElementById('order_section');
    orderRestaurantRef.innerHTML = "";
    for (let restaurantIndex = 0; restaurantIndex < myDishes.length; restaurantIndex++) {
        orderRestaurantRef.innerHTML += getRenderOrderRestaurantTemplate(restaurantIndex);
            
        let orderDishRef = document.getElementById(`order_dishes${restaurantIndex}`);
        orderDishRef.innerHTML = "";
        for (let dishesIndex = 0; dishesIndex < myDishes[restaurantIndex].dishes.length; dishesIndex++) {
            orderDishRef.innerHTML += getRenderDishTemplate(restaurantIndex, dishesIndex);              
        }
    }
}

function renderItalianOrderSection() {
    let italianOrderSectionRef = document.getElementById(`order_box${[0]}`);
    let chineseOrderSectionRef = document.getElementById(`order_box${[1]}`);
    let steakHouseOrderSectionRef = document.getElementById(`order_box${[2]}`);
    let selectRestaurantSection = document.getElementById('restaurant_selection');
    let bagIconRef = document.getElementById('bag_icon');
    let bagRef = document.getElementById('bag');
    italianOrderSectionRef.classList.remove('d_none');
    chineseOrderSectionRef.classList.add('d_none');
    steakHouseOrderSectionRef.classList.add('d_none');
    selectRestaurantSection.classList.add('d_none');
    bagRef.classList.remove('d_none');
    bagIconRef.classList.remove('d_none'); 
}

function renderChineseOrderSection() {
    let italianOrderSectionRef = document.getElementById(`order_box${[0]}`);
    let chineseOrderSectionRef = document.getElementById(`order_box${[1]}`);
    let steakHouseOrderSectionRef = document.getElementById(`order_box${[2]}`);
    let selectRestaurantSection = document.getElementById('restaurant_selection');
    let bagRef = document.getElementById('bag');
    let bagIconRef = document.getElementById('bag_icon');
    italianOrderSectionRef.classList.add('d_none');
    chineseOrderSectionRef.classList.remove('d_none');
    steakHouseOrderSectionRef.classList.add('d_none');
    selectRestaurantSection.classList.add('d_none');
    bagRef.classList.remove('d_none');
    bagIconRef.classList.remove('d_none');
}

function renderSteakHouseOrderSection() {
    let italianOrderSectionRef = document.getElementById(`order_box${[0]}`);
    let chineseOrderSectionRef = document.getElementById(`order_box${[1]}`);
    let steakHouseOrderSectionRef = document.getElementById(`order_box${[2]}`);
    let selectRestaurantSection = document.getElementById('restaurant_selection');
    let bagRef = document.getElementById('bag');
    let bagIconRef = document.getElementById('bag_icon');
    italianOrderSectionRef.classList.add('d_none');
    chineseOrderSectionRef.classList.add('d_none');
    steakHouseOrderSectionRef.classList.remove('d_none');
    selectRestaurantSection.classList.add('d_none');
    bagRef.classList.remove('d_none');
    bagIconRef.classList.remove('d_none');
}

function renderRespMenu() {
    let respMenuRef = document.getElementById('resp_menu');
    respMenuRef.classList.toggle('resp_menu_closed');
    respMenuRef.innerHTML = getRenderRespMenuTemplate();
}

function closeRespMenu() {
    let closeRespMenuRef = document.getElementById('resp_menu');
    closeRespMenuRef.classList.add('resp_menu_closed');
}

function renderBag() {
    let bagRef = document.getElementById('bag');
    bagRef.classList.toggle('bag_box_closed');
    let moveOrderRef = document.getElementById('order_section');
    moveOrderRef.classList.toggle('move_left_selection');
    bagRef.innerHTML = getRenderBag();
}

function closBag() {

}

