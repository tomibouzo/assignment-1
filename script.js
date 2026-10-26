console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["milanesa", "empanada", "asado", "pastel de papa", "polenta", "fideos caseros"];

// 2. Loop through the list and print: "One of my favorite foods is ______."
for (let index = 0; index < favoriteFoods.length; index++) {
  console.log("One of my favorite foods is " + favoriteFoods[index] + ".");
}

// 3. Print out the rating for each food with a ranking like:
// "My #1 favorite food is Ramen" (copy/paste for all items)
// "My #2 favorite food is Sushi"
// ...etc.
for (let index = 0; index < favoriteFoods.length; index++) {
  console.log("My #" + (index + 1) + " favorite food is " + favoriteFoods[index]);
}

// 4a. Create a function printFoodRecommendation(foodName) that prints out the following for the foodName provided
// "Have you ever tried ____?"
// "I always recommend ____ to friends."
// "Trust me — ____ is delicious."
function printFoodRecommendation(foodName) {
  console.log("Have you ever tried " + foodName + "?");
  console.log("I always recommend " + foodName + " to friends.");
  console.log("Trust me — " + foodName + " is delicious.");
}




// 4b. Call the function at least 3 times
printFoodRecommendation("milanesa");
printFoodRecommendation("asado");
printFoodRecommendation("empanada");



// Here's a list of 50 friends' favorite foods:
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
  ];

// 5. Print out only foods that have an "a" in the name. For example, "Pizza" is included, but "Donuts" is not.
let foodsWithA = [];
for (let index = 0; index < friendFavorites.length; index++) {
  let food = friendFavorites[index];
  if (food.toLowerCase().includes("a")) {
    console.log(food);
    foodsWithA.push(food);
  }
}

// 6. Store the result in an array called foodsWithA. Print out the array.
console.log(foodsWithA);

// 7. Create a new array longFoodNames for foods with names longer than 6 characters.
let longFoodNames = [];

// 8. Create another array shortFoodNames for foods 6 characters or shorter.
let shortFoodNames = [];
for (let index = 0; index < friendFavorites.length; index++) {
  let food = friendFavorites[index];
  if (food.length > 6) {
    longFoodNames.push(food);
  } else {
    shortFoodNames.push(food);
  }
}

// 9. Print both arrays and compare:
// "There are more long-named foods." OR "There are more short-named foods."
console.log(longFoodNames);
console.log(shortFoodNames);
if (longFoodNames.length > shortFoodNames.length) {
  console.log("There are more long-named foods.");
} else {
  console.log("There are more short-named foods.");
}

// 10. STRETCH: Find the longest food name and print:
// "The longest food name in the list is ______ with ___ characters."
let longestFoodName = friendFavorites[0];
for (let index = 1; index < friendFavorites.length; index++) {
  if (friendFavorites[index].length > longestFoodName.length) {
    longestFoodName = friendFavorites[index];
  }
}
console.log("The longest food name in the list is " + longestFoodName + " with " + longestFoodName.length + " characters.");
