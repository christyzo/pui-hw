// let productPrice = document.querySelector('dropdown-list');
const basePrice = 2.49;
let glazingOptions = 'Keep original';
let defaultPack = 1;

let glazingPrices =     
    {
        'Keep original': 0.00,
        'Sugar milk': 0.00,
        'Vanilla milk': 0.50,
        'Double chocolate': 1.50
    };

let priceOptions =     
{
    '1': 1, '3': 3, '6': 5, '12': 10
};


const glazingSelect = document.querySelector("select#glazing-options");

for (const [glazing, price] of Object.entries(glazingPrices)) {
	const option = document.createElement("option");
	option.textContent = glazing;
	option.value = price;
	console.log(typeof(option.value));
	glazingSelect.appendChild(option);
}

function glazingChange(element) {
    glazingPrice = parseFloat(element.value);
    updatePrice();

}

for (const [pack, price] of Object.entries(priceOptions)) {
	const option = document.createElement("option");
	option.textContent = pack;
	option.value = price;
	packSelect.appendChild(option);
}

function updatePrice() {
    const glazingPrice = glazingPrices[glazingOption];
    const packPrice = priceOptions[packOption];
    const totalPrice = (basePrice + glazingPrice) * packPrice;
	const totalPriceField = document.querySelector("#product-price span");
	totalPriceField.textContent = "$" + totalPrice.toFixed(2);
}

