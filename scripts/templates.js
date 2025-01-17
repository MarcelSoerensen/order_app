function getRenderRestaurantSelectionTemplate() {
    return /*html*/`
        <div class="restaurant_selection_section">   
            <h1>Wo möchtest du bestellen..?</h1>
            <div class="restaurant_selection_box">
                <div class="restaurant_selection_button">
                    <img class="restaurant_selection_symbol" onclick="renderItalianOrderSection(), closeRespMenu()" src="${myDishes[0].symbol}" alt="">
                    <div>
                        <h2>${myDishes[0].restaurant}</h2>
                        <p>${myDishes[0].subtitel}</p> 
                    </div>  
                </div>
                <div class="restaurant_selection_button">
                    <img class="restaurant_selection_symbol" onclick="renderChineseOrderSection(), closeRespMenu()" src="${myDishes[1].symbol}" alt="">
                    <div>
                        <h2>${myDishes[1].restaurant}</h2>
                        <p>${myDishes[1].subtitel}</p> 
                    </div>  
                </div>
                <div class="restaurant_selection_button">
                    <img class="restaurant_selection_symbol" onclick="renderSteakHouseOrderSection(), closeRespMenu()" src="${myDishes[2].symbol}" alt="">
                    <div>
                        <h2>${myDishes[2].restaurant}</h2>
                        <p>${myDishes[2].subtitel}</p> 
                    </div>
                </div>  
            </div>
        </div>
    `;
}

function getRenderOrderRestaurantTemplate(restaurantIndex) {
    return /*html*/`
        <div class="order_box d_none" id="order_box${restaurantIndex}">
            <div class="order_restaurant">
                <img class="restaurant_img" src="${myDishes[restaurantIndex].image}" alt="">
                <div class="restaurant_symbol_background">
                    <img class="restaurant_symbol" src="${myDishes[restaurantIndex].symbol}" alt="">
                </div>
                    <div class="restaurant_name">
                    <div>
                        <h2>${myDishes[restaurantIndex].restaurant}</h2>
                        <p>${myDishes[restaurantIndex].subtitel}</p>   
                    </div>
                    <div></div>
                </div>
            </div>  
            <div id="order_dishes${restaurantIndex}"></div>  
            <div class="bottom_space"></div>
        </div>
    `;    
}

function getRenderDishTemplate(restaurantIndex, dishesIndex) {
    return /*html*/`
        <div class="order_dishes">
            <div class="order_dishes_content">
                <h3>${myDishes[restaurantIndex].dishes[dishesIndex].name}</h3>
                <p>${myDishes[restaurantIndex].dishes[dishesIndex].description}</p>
                <h3 class="price" >${myDishes[restaurantIndex].dishes[dishesIndex].price.toFixed(2) + " €"}</h3>
            </div>
            <div class="order_add_button">
                <img onclick="addDish(${restaurantIndex}, ${dishesIndex})" src="./assets/icons/add-svgrepo-com.svg" alt="">
            </div>
        </div>
    `;
}

function getRenderEmptyBasketTemplate() {
    return /*html*/`
        <div class="basket_head">
            <h2>Warenkorb</h2>
        </div>
        <div class="basket_border">
            <div id="basket_content" class="basket_content">
                <div id="basket_empty" class="basket_empty">
                    <p>dein Warenkorb ist noch leer</p>
                </div>
            </div>
            <div>
                <div id="calculated_sum" class="basket_bottom">
                </div>
            </div>
        </div> 
    `;
}

function getRenderBasketTemplate(restaurantIndex, dishesIndex) {
    return /*html*/`
        <div id="basket_dish${dishesIndex}" class="basket_dish">
            <p class="basket_dish_title" >${myDishes[restaurantIndex].dishes[dishesIndex].name}</p>
            <div class="basket_dish_edit">
                <div class="basket_dish_counter">
                    <img class="basket_buttons" onclick="subDish(${restaurantIndex}, ${dishesIndex})" src="assets/icons/minus-svgrepo-com.svg" alt="">
                    <div id="counter${dishesIndex}">${myDishes[restaurantIndex].dishes[dishesIndex].amount}</div>
                    <img class="basket_buttons" onclick="addDish(${restaurantIndex}, ${dishesIndex})" src="./assets/icons/add-svgrepo-com.svg" alt=""> 
                </div>
                    <div class="basket_dish_result">
                    <div id="price_result${dishesIndex}"></div>
                    <img onclick="deleteDish(${restaurantIndex}, ${dishesIndex})" class="basket_buttons" src="assets/icons/trash-svgrepo-com.svg" alt="">
                </div>
            </div>
        </div>
    `;
} 

function getRenderCalculatedSumTemplate(calculatedSum) {
    return /*html*/`
    <div class="basket_sum">
        <p>Zwischensumme</p>
        <div>
            ${calculatedSum.toFixed(2)} €
        </div>
    </div>
    <div class="basket_sum">
        <p>Lieferkosten</p>
        <div>
            <p>0 €</p>
        </div>
    </div>
    <div class="basket_sum">
        <p>Gesamtsumme</p>
        <div>
            <p class="price">${calculatedSum.toFixed(2)} €</p>
        </div>
    </div>
`;
}

function getRenderRespMenuTemplate() {
    return /*html*/`
        <div class="resp_menu_our_restaurants">
            <h2>Unsere Restaurants</h2>
            <div class="logo">
                <img src="./assets/icons/apple-touch-icon.png" alt="">
            </div>
        </div>
        <div class="resp_menu_separator">
            <h3 onclick="renderItalianOrderSection(), closeRespMenu()">${myDishes[0].restaurant}</h3>
            <h3 onclick="renderChineseOrderSection(), closeRespMenu()">${myDishes[1].restaurant}</h3>
            <h3 onclick="renderSteakHouseOrderSection(), closeRespMenu()">${myDishes[2].restaurant}</h3>
        </div>
        <div class="resp_menu_separator">
            <h3 onclick="renderRestaurantSelection()">Übersicht</h3>  
        </div>
    `;
}



