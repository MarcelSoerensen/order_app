function getRenderOrderrestaurantTemplate(restaurantIndex) {
    return /*html*/`
    <div class="order_box">
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
    </div>
    `    
}

function getRenderDishTemplate(restaurantIndex, dishesIndex) {
    return /*html*/`
        <div class="order_dishes">
            <div class="order_dishes_description">
                <h3>${myDishes[restaurantIndex].dishes[dishesIndex].name}</h3>
                <p>${myDishes[restaurantIndex].dishes[dishesIndex].description}</p>
                <h3 class="price" >${myDishes[restaurantIndex].dishes[dishesIndex].price.toFixed(2) + " €"}</h3>
            </div>
            <div class="add_button">
                <img  src="./assets/icons/add-svgrepo-com.svg" alt="">
            </div>

        </div>
    `
}
