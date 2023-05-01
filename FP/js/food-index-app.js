var itemData = [
    {src:"assets/items/Appetizer-Condiment-OliveOil.png", name: "Olive Oil", description: "olive oil has a high carbon footprint.It takes around 4.5 kg CO2e to produce 1 kilogram or 2.2 pounds of olive oil", score: 5, category: "Condiment"},
    {src:"assets/items/Appetizer-Condiment-Honey.png",name: "Honey", description: "California is the second largest producer of honey in the country. Beekeepers truck 1.5 million bee colonies around the state annually to help pollinate 760,000 acres of almonds and other nut and fruit orchards. In 2010, California bees produced more than 27 million pounds of honey.", score: 6, category: "Condiment"},
    {src:"assets/items/Appetizer-Condiment-Jam.png", name: "Jam", description: "The carbon footprint of jam does depend on its ingredients and components. However, it is usually low for example, strawberry jam has a benchmark climate footprint of 1.5 kg CO2e/kg.", score: 1, category: "Condiment"},
    {src:"assets/items/Appetizer-Dairy-Feta.png", name: "Feta", description: "Soft cheeses require less milk to produce. One kilogram of soft cheese takes around five to eight liters of milk to produce, whereas hard cheese takes around ten liters. Already this means the hard cheese is contributing significantly more emissions than the soft cheese on a per-kilo basis.", score: 7, category: "Dairy"},
    {src:"assets/items/Appetizer-Dairy-Gouda.png", name: "Gouda", description: "Gouda has a high carbon footprint compared to other foods. It takes 5,060 liters of water to produce 1 kilogram of cheese / 606 gallons of water to produce 1 pound of cheese. cheese production is relatively destructive, land usage for pasture, grain and forage, solid waste (excrement/manure) runoff into soil and freshwater, deforestation for feed crops", score: 7, category: "Dairy"},
    {src:"assets/items/Appetizer-Dairy-Mozzarella.png", name: "Mozzarella", description: "Soft cheeses require less milk to produce. One kilogram of soft cheese takes around five to eight liters of milk to produce, whereas hard cheese takes around ten liters. Already this means the hard cheese is contributing significantly more emissions than the soft cheese on a per-kilo basis.", score: 6, category: "Dairy"},
    {src:"assets/items/Appetizer-Dairy-Parmesan.png", name: "Parmesan", description: "It takes around 13.5 CO2e to produce 1 kilogram or 2.2 pounds of cheese, a car driving equivalent of 31 miles or 50 kilometers.It takes 5,060 liters of water to produce one kilogram of cheese / 606 gallons of water to produce one pound of cheese. Hard cheeses also tend to be aged for longer, which requires continuous refrigeration and contributes even more emissions.", score: 7, category: "Dairy"},
    {src:"assets/items/Appetizer-Protein-Ham.png", name: "Ham", description: "It takes around 13.5 CO2e to produce 1 kilogram or 2.2 pounds of cheese, a car driving equivalent of 31 miles or 50 kilometers.It takes 5,060 liters of water to produce one kilogram of cheese / 606 gallons of water to produce one pound of cheese. Hard cheeses also tend to be aged for longer, which requires continuous refrigeration and contributes even more emissions.", score: 7, category: "Protein"},
    {src:"assets/items/Appetizer-Protein-Nuts.png", name: "Nuts", description: "Nuts and other plant-based protein sources, such as tofu and beans, have a far lower GHG emission count compared to animal-based food products. Though nuts have a much lower carbon footprint than animal-based products, not all nuts are created equal when it comes to sustainability. Almonds are often considered less environmentally friendly because they require a lot of water to reach maturity.", score: 6, category: "Protein"},
    {src:"assets/items/Appetizer-Protein-Salami.png", name: "Salami", description: "Salami has a relatively low carbon footprint compared to other foods. It takes around 7.9 kg CO2e to produce 1 kilogram or 2.2 pounds of pig meat, a car driving equivalent of 18.25 miles or 29.5 kilometers.Salami production is relatively unsustainable. A 2018 Oxford University study – which is the most comprehensive analysis to date of the damage farming does to the planet – found that ‘avoiding meat and dairy is the single biggest way to reduce your impact on Earth’ as animal farming provides just 18% of calories but takes up 83% of our farmland.", score: 7, category: "Protein"},
    {src:"assets/items/Appetizer-Protein-Proschuito.png", name: "Proschuito", description: "Prosciutto has a high carbon footprint. It takes around 7.9 kg CO2e to produce 1 kilogram or 2.2 pounds of pig meat, a car driving equivalent of 18.25 miles or 29.5 kilometers.", score: 6, category: "Protein"},
    {src:"assets/items/Main-Grain-Bread.png", name: "Bread", description: "The carbon footprint results range from 977 to 1,244 g CO2 eq. per loaf of bread. Wholemeal thick-sliced bread packaged in plastic bags has the lowest carbon footprint and white medium-sliced bread in paper bag the highest.", score: 7, category: "Grain"},
    {src:"assets/items/Main-Grain-Corn.png", name: "Corn", description: "Corn farmers produce corn that requires, on average, 164 grams of CO2 per kilogram of grain. The U.S. average is 371 grams, according to studies from Argonne National Laboratory.", score: 2, category: "Grain"},
    {src:"assets/items/Main-Grain-Pasta.png", name: "Pasta", description: "Pasta is a staple food of traditional Italian cuisine, popular worldwide owing to its convenience, versatility and nutritional value. Pasta has a relatively low carbon footprint compared to other foods. It takes around 1.24 kg CO2e to produce 1 kilogram or 2.2 pounds of various pasta.", score: 2, category: "Grain"},
    {src:"assets/items/Main-Grain-Rice.png", name: "Rice", description: "Rice, one of the most abundant crops grown and consumed globally, makes up 12% of global methane emissions – and a staggering 1.5% of total greenhouse gas emissions.", score: 4, category: "Grain"},
    {src: "assets/items/Main-Protein-Salmon.png", name: "Salmon", description: "Farmed salmon is a healthy source of protein, with a low environmental impact and one of the lowest greenhouse gas profiles of all animal protein sources, offering an eco-friendly alternative to meat. However, carbon footprint values ranging from 4 kg to 540 kg have been reported for wild seafood products (per kg protein), compared to a range of 4 to 75 for aquaculture (also per kg protein).", score: 6, category: "Protein"},
    {src:"assets/items/Main-Protein-Shrimp.png", name: "Shrimp", description: "Over the average 5-year life span of a farm, a farmer will typically harvest about 1659 kilograms of shrimp. So a 100-gram shrimp cocktail represents an 'astonishing' 198 kilograms of carbon dioxide from the loss of the mangrove, Kauffman said, the equivalent of burning 90 liters of gasoline.", score: 1, category: "Protein"},
    {src: "assets/items/Main-Protein-Steak.png", name: "Steak", description: "Steak has a huge carbon footprint, producing 1kg of beef emits 60kg of greenhouse gases (CO2-equivalents). Beef produces the most greenhouse gas emissions, which include methane. A global average of 110lb (50kg) of greenhouse gases is released per 3.5oz of protein.", score: 10, category: "Protein"},
    {src: "assets/items/Main-Protein-Tofu.png", name: "Tofu", description: "The Carbon Footprint of Tofu is 0.70 kg CO2e per 1/2 cup. The greenhouse gas emissions of Tofu are 12.5 times lower than a beef burger. Eating tofu once or twice a week contributes 12kg to your annual greenhouse gas emissions", score: 2, category: "Protein"},
    {src: "assets/items/Main-Vegetables-Asparagus.png", name: "Asparagus", description: "Asparagus has a low carbon footprint. It takes around 0.88 kg CO2e to produce 1 kilogram or 2.2 pounds of asparagus, a car driving equivalent of 2.25 miles or 3.5 kilometers.", score: 2, category: "Vegetable"},
    {src:"assets/items/Main-Vegetables-Broccoli.png", name: "Broccoli", description: "Broccoli has a low carbon footprint. It takes around 2.0 CO2e to produce 1 kilogram or 2.2 pounds of broccoli, a car driving equivalent of 4.75 miles or 7.75 kilometers.", score: 6, category: "Vegetable"},
    {src:"assets/items/Main-Vegetables-Carrot.png", name: "Carrot", description: "Carrots have a low carbon footprint compared to other foods. What is the carbon footprint of carrots? It takes around 0.11 kg CO2e to produce 1 kilogram or 2.2 pounds of carrots, a car driving equivalent of 0.25 miles or 0.5 kilometers.", score: 1, category: "Vegetable"},
    {src:"assets/items/Main-Vegetables-Lettuce.png", name: "Lettuce", description: "Lettuce has a relatively low carbon footprint compared to other foods. It takes around 0.92 kg CO2e to produce 1 kilogram or 2.2 pounds of romaine lettuce, a car driving equivalent of 2.5 miles or 3.5 kilometers.", score: 1, category: "Vegetable"},
    {src: "assets/items/Dessert-Fruits-Apple.png", name: "Apple", description: "The environmental footprint of an apple orchard is both positive and negative. Some CO2 is released to the atmosphere in the production of the crop (making and using fuel, fertilizers, and pesticides), but we estimate that an acre of orchard fixes about 20 tons of CO2 from the air each season, releases 15 tons of oxygen, and provides over 5 billion BTUs of cooling power. In addition, some carbon is sequestered in the new wood and roots of the trees", score: 1, category: "Fruit"},
    {src: "assets/items/Dessert-Fruits-Banana.png", name: "Banana", description: "Bananas are a great food for anyone who cares about their carbon footprint. For just 80g of CO2e you get a whole lot of nutrition: 140 calories as well as stacks of vitamin C, vitamin B6, potassium and dietary fibre. All in all, a fantastic component of a low-carbon diet.", score: 1, category: "Fruit"},
    {src: "assets/items/Dessert-Fruits-Orange.png", name: "Orange", description: "One orange (average size) is equivalent to 0.03m3 of CO2 Gas.", score: 1, category: "Fruit"},
    {src: "assets/items/Dessert-Fruits-Strawberry.png", name: "Strawberry", description: "It takes around 0.27 kg CO2e to produce 1 kilogram or 2.2 pounds of fresh strawberries, a car driving equivalent of 0.75 miles or 1.25 kilometers.", score: 1, category: "Fruit"},
    {src: "assets/items/Dessert-Sweets-Caramel.png", name: "Caramel", description: "Caramel likely has a high carbon footprint. It takes around 3.93 kg CO2e to produce 1 kilogram or 2.2 pounds of processed, refined cane sugar.", score: 5, category: "Sweets"},
    {src: "assets/items/Dessert-Sweets-Dark Chocolate.png", name: "Dark Chocolate", description: "an average 40-gram bar of chocolate will carry a carbon footprint of approximately 200 grams or five kilograms of carbon per kilogram of chocolate. This increases to 300 grams for a bar of dark chocolate as a result of its greater cacao content.", score: 9, category: "Sweets"},
    {src: "assets/items/Dessert-Sweets-Whipped Cream.png", name: "Whipped Cream", description: "Two cans of whipped cream have a carbon footprint of 8.7 kg CO2e. Adding whipped cream to millions of Starbucks Corp. drinks emits 50 times as much greenhouse gas as the company's private jet.", score: 4, category: "Sweets"},
    {src: "assets/items/Dessert-Sweets-White Chocolate.png", name: "White Chocolate", description: "Gouda has a high carbon footprint compared to other foods. It takes 5,060 liters of water to produce 1 kilogram of cheese. Cheese production is relatively destructive, land usage for pasture, grain and forage, solid waste (excrement/manure) runoff into soil and freshwater, deforestation for feed crops", score: 8, category: "Sweets"}
]
var itemName = [];


$(document).ready(function() {
  console.log("jQuery is working!"); // log a message to the console
  // 
  $.each(itemData, function(index, value) {
    var itemImg = $("<img>", {src: value.src});
    var itemName = value.name;
    var item = $("<div>", {class: "grid-item","data-name": itemName, "data-index": index}).append(itemImg);
    $(".grid").append(item);


    // hover function
    $(".grid-item").hover(function() {
      $(this).css({"background-color":"rgba(0,0,255,0.3"});
    },
      function() {
        $(this).css({"background-color":"white"});
    });
  });


  // toggle click
  $(".grid-item").click(function() {
    var $overlay = $(".overlay");
    $overlay.toggle();
    
    if ($overlay.is(":visible")) {
      // dynamically generate overlay content
      var index = $(this).data("index");
      var image = itemData[index];
      console.log(image);
      var $overlayContent = $("<div>", { class: "overlay-content" });
      $overlayContent.append($("<img>", {src:"assets/x.png", id:"x"}).css({"width":"30px", "height":"30px"}));
      var $overlayContentText = $("<div>", { class: "overlay-text" });
      $overlayContent.css({"padding":"20px", "margin":"20px"});
      $overlayContent.append($("<img>", { src: image.src }).css({
      "width":"40%", 
      "margin":"10px 10px 10px 0px"
      }));
      $overlayContentText.append($("<p>", { text: "score: " + image.score }).css({
        "padding-top":"4rem",
        "font-size":"40px",
        "font-weight":"bold",
        "color":"#c2282a"
        
      }));
      $overlayContentText.append($("<p>", { text: image.description }).css({
        "font-family":"Courier",
        "font-size":"15px",
        "padding-top":"2rem",
        "color":"blue"
      }));
      $overlayContentText.append($("<p>", { text: image.category }).css({
        "padding":".5rem 1rem",
        "border":"1px #c2282a solid",
        "border-radius":"20px",
        "color":"#c2282a"
        
        


    
        
      }));
      $overlayContentText.append($("<p>", { text: image.name }).css({ 
        "font-size":"36px", 
        "color":"#c2282a", 
        "font-style":"italic",
        // "padding-bottom":"1rem",
        "margin-right":"1.5rem"
        }));
      
      
     
      
     
      $overlayContent.append($overlayContentText);
      $overlayContent.css({"justify-content":"space-between"})
      // $overlayContentText.css({"display":"block", "background-color":"blue"})
      
      $overlay.html($overlayContent);
    }

  });

    
     
  
  


 
    

   

  
});

function generateOverlayContent(itemData) {
  var image = itemData;
  var content = $('<div class="overlay-content">');
  var overlayImage = $(".overlay-image").attr("src", image.path);
  var overlayName = $(".overlay-name").text(image.name);
  var overlayCategory = $(".overlay-category").text(image.category);
  var overlayDescription = $(".overlay-description").text(image.description);
  var overlayScore = $("overlay-score").text("Score: " + image.score);
  content.append(overlayImage, overlayName, overlayCategory, overlayDescription, overlayScore);
  return content;

}


// $('.grid-item').click(function() {
//   // var index = $(this).data("index");
//   // var image = itemData[index];
//   var index = $(this).data("index");
//   var content = generateOverlayContent(itemData[index]);
//   $('.overlay').toggleClass('active');
//   $('.overlay-content').html(content);
// });

// $('.overlay-close').click(function() {
//   $('.overlay').removeClass('active');
// });