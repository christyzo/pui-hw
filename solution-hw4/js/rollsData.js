const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

function updateInfo(){
    for (let rollTypeItem in rolls){
        console.log(rollTypeItem, rollType);
        if (rollTypeItem == rollType) {
            const basePriceParsed = rolls[rollTypeItem].basePrice;
            const imageFileParsed = rolls[rollTypeItem].imageFile;
            banner = document.getElementById("banner");
            banner.innerHTML = rollTypeItem + " " + "Cinnamon Roll";
            const imageFileOriginal = document.querySelector(".product-image");
            imageFileOriginal.src = "products/images/" + imageFileParsed;
            console.log(imageFileOriginal);
            // everything above this works
            
        }
    }
}



function onDocLoad(){
    updateInfo();
}

// ----delete this if no work


