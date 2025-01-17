function renderRestaurantSelection() {
    let selectRestaurantRef = document.getElementById('restaurant_selection');
    let italianOrderSectionRef = document.getElementById(`order_box${[0]}`);
    let chineseOrderSectionRef = document.getElementById(`order_box${[1]}`);
    let steakHouseOrderSectionRef = document.getElementById(`order_box${[2]}`);
    let basketRef = document.getElementById('basket');
    let basketIconRef = document.getElementById('basket_icon');
    steakHouseOrderSectionRef.classList.add('d_none');
    italianOrderSectionRef.classList.add('d_none');
    chineseOrderSectionRef.classList.add('d_none');
    selectRestaurantRef.classList.remove('d_none');
    basketRef.classList.add('d_none');
    basketIconRef.classList.add('d_none');
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
    let basketIconRef = document.getElementById('basket_icon');
    let basketRef = document.getElementById('basket');
    italianOrderSectionRef.classList.remove('d_none');
    chineseOrderSectionRef.classList.add('d_none');
    steakHouseOrderSectionRef.classList.add('d_none');
    selectRestaurantSection.classList.add('d_none');
    basketRef.classList.remove('d_none');
    basketIconRef.classList.remove('d_none'); 
}

function renderChineseOrderSection() {
    let italianOrderSectionRef = document.getElementById(`order_box${[0]}`);
    let chineseOrderSectionRef = document.getElementById(`order_box${[1]}`);
    let steakHouseOrderSectionRef = document.getElementById(`order_box${[2]}`);
    let selectRestaurantSection = document.getElementById('restaurant_selection');
    let basketRef = document.getElementById('basket');
    let basketIconRef = document.getElementById('basket_icon');
    italianOrderSectionRef.classList.add('d_none');
    chineseOrderSectionRef.classList.remove('d_none');
    steakHouseOrderSectionRef.classList.add('d_none');
    selectRestaurantSection.classList.add('d_none');
    basketRef.classList.remove('d_none');
    basketIconRef.classList.remove('d_none');
}

function renderSteakHouseOrderSection() {
    let italianOrderSectionRef = document.getElementById(`order_box${[0]}`);
    let chineseOrderSectionRef = document.getElementById(`order_box${[1]}`);
    let steakHouseOrderSectionRef = document.getElementById(`order_box${[2]}`);
    let selectRestaurantSection = document.getElementById('restaurant_selection');
    let basketRef = document.getElementById('basket');
    let basketIconRef = document.getElementById('basket_icon');
    italianOrderSectionRef.classList.add('d_none');
    chineseOrderSectionRef.classList.add('d_none');
    steakHouseOrderSectionRef.classList.remove('d_none');
    selectRestaurantSection.classList.add('d_none');
    basketRef.classList.remove('d_none');
    basketIconRef.classList.remove('d_none');
}

function addDish(restaurantIndex, dishesIndex) {
    myDishes[restaurantIndex].dishes[dishesIndex].amount++;
    let basketContentRef = document.getElementById('basket_content');
    let deleteEmptyBasketRef = document.getElementById('basket_empty');

        if (myDishes[restaurantIndex].dishes[dishesIndex].amount == 1) {
            deleteEmptyBasketRef.classList.add('d_none');
            basketContentRef.innerHTML += getRenderBasketTemplate(restaurantIndex, dishesIndex);
        }

    renderCounter(restaurantIndex, dishesIndex);
    renderCalculatedPrice(restaurantIndex, dishesIndex);
    renderCalculatedSum();
    console.log(myDishes[restaurantIndex].dishes[dishesIndex].name);
    console.log(myDishes[restaurantIndex].dishes[dishesIndex].amount);
    console.log(myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice);
}

function subDish(restaurantIndex, dishesIndex) {
    let basketContentRef = document.getElementById(`basket_dish${dishesIndex}`);
    let counterRef = document.getElementById(`counter${dishesIndex}`);
    let calculatedPriceRef = document.getElementById(`price_result${dishesIndex}`);

        if (myDishes[restaurantIndex].dishes[dishesIndex].amount >= 1) {
            myDishes[restaurantIndex].dishes[dishesIndex].amount--;
        }
        if (myDishes[restaurantIndex].dishes[dishesIndex].amount === 0) {
            myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice = 0;
            basketContentRef.remove() && counterRef.remove() && calculatedPriceRef.remove();
        }
    
    counterRef.innerHTML = myDishes[restaurantIndex].dishes[dishesIndex].amount;
    getRenderBasketTemplate(restaurantIndex, dishesIndex);
    renderCalculatedPrice(restaurantIndex, dishesIndex);
    renderCalculatedSum();
    
    
    
    console.log(myDishes[restaurantIndex].dishes[dishesIndex].name);
    console.log(myDishes[restaurantIndex].dishes[dishesIndex].amount);
    console.log(myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice);
}

function deleteDish(restaurantIndex, dishesIndex) {
    let basketContentRef = document.getElementById(`basket_dish${dishesIndex}`);
    let counterRef = document.getElementById(`counter${dishesIndex}`);
    
    if (myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice !== 0) {
        myDishes[restaurantIndex].dishes[dishesIndex].amount = 0;
        myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice = 0;
    }

    console.log(myDishes[restaurantIndex].dishes[dishesIndex].amount);
    console.log(myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice);
    basketContentRef.remove();
    counterRef.remove();
    
    renderCalculatedSum();
}

function renderCounter(restaurantIndex, dishesIndex) {
    let counterRef = document.getElementById(`counter${dishesIndex}`);   
    counterRef.innerHTML = myDishes[restaurantIndex].dishes[dishesIndex].amount;
    getRenderBasketTemplate(restaurantIndex, dishesIndex);
}

function renderCalculatedPrice(restaurantIndex, dishesIndex) {
    let resultRef = document.getElementById(`price_result${dishesIndex}`);
    let amountRef = myDishes[restaurantIndex].dishes[dishesIndex].amount;
    let priceRef = myDishes[restaurantIndex].dishes[dishesIndex].price;
    
    if (resultRef !== null) {
        myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice = priceRef * amountRef;
        resultRef.innerHTML = myDishes[restaurantIndex].dishes[dishesIndex].calculatedPrice.toFixed(2) + " €"; 
    }

    renderCalculatedSum();
}

function renderCalculatedSum() {
    let calculatedSum = 0;
    let calculatedSumRef = document.getElementById('calculated_sum');
    for (let sumRestaurantIndex = 0; sumRestaurantIndex < myDishes.length; sumRestaurantIndex++) {
        for (let sumDishesIndex = 0; sumDishesIndex < myDishes[sumRestaurantIndex].dishes.length; sumDishesIndex++) {
            let dish = myDishes[sumRestaurantIndex].dishes[sumDishesIndex]  
            if (dish.calculatedPrice >= 1) {
                calculatedSum += dish.calculatedPrice;
                calculatedSumRef.innerHTML = getRenderCalculatedSumTemplate(calculatedSum)
            }
        }
    } 
}

function renderEmptyBasket() {
    let emptyBasketRef = document.getElementById('basket');
    emptyBasketRef.innerHTML = getRenderEmptyBasketTemplate();
}

function toggleBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.classList.toggle('basket_box_closed');
    let moveOrderRef = document.getElementById('order_section');
    moveOrderRef.classList.toggle('move_order_section');
}

function toggleRespMenu() {
    let respMenuRef = document.getElementById('resp_menu');
    respMenuRef.classList.toggle('resp_menu_closed');
    respMenuRef.innerHTML = getRenderRespMenuTemplate();
}

function closeRespMenu() {
    let closeRespMenuRef = document.getElementById('resp_menu');
    closeRespMenuRef.classList.add('resp_menu_closed');
}

