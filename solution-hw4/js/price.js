
// solution 3
const glazingPrices = {
	"Keep original": 0.0,
	"Sugar milk": 0.0,
	"Vanilla milk": 0.50,
	"Double chocolate": 1.50
};

const packPrices = {
	"1": 1, "3": 3, "6": 5, "12": 10
};

const basePrice = 2.49;
let currentGlazingPrice = 0; // keep original
let currentPackPrice = 1; // 1

/* Populate glazing options with corresponding price adaptation values */
const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
	const option = document.createElement("option");
	option.textContent = glazing;
	option.value = price;
	glazingSelect.appendChild(option);
	
}

/* Populate pack options with corresponding price adaptation values */
const packSelect = document.querySelector("select#pack-options");



for (const [pack, price] of Object.entries(packPrices)) {
	const option = document.createElement("option");
	option.textContent = pack;
	option.value = price;
	packSelect.appendChild(option);
}

/* Record the current glazing option and update the total price */
function glazingChange(element) {
	currentGlazingPrice = parseFloat(element.value);
	updateTotalPrice();
}

/* Record the current pack option and update the total price */
function packChange(element) {
	currentPackPrice = parseFloat(element.value);
	updateTotalPrice();
}

function updateTotalPrice() {
	const totalPrice = (basePrice + currentGlazingPrice) * currentPackPrice;
	const totalPriceField = document.querySelector("#add-cart span");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addToCart() {
	const packSelectValue = packSelect.options[packSelect.selectedIndex].text;
	const glazingSelectValue = glazingSelect.options[glazingSelect.selectedIndex].text;
	const baseGlazingPrice= basePrice + glazingPrices[glazingSelectValue];
    const cartItem = new Roll(rollType + " Cinnamon Roll", glazingSelectValue, packSelectValue, baseGlazingPrice);
    cart.push(cartItem);
    console.log("Cart:", cart);
}

