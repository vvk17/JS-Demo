'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({starterIndex = 1,
     mainIndex = 1,
     time = '21:00',
     address}) {
    console.log(`Order received ${this.starterMenu[starterIndex]} \
and ${this.mainMenu[mainIndex]} \
to be delivered at ${time} to ${address}.`);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`You have ordered past with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, 
    ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    }
};

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name: rname,
  openingHours: roH,
  categories: tags
} = restaurant;
console.log(rname, roH, tags);

const {menu = [], starterMenu: sM =[]} = restaurant;
console.log(menu,sM);

const [first, second] = restaurant.categories;
console.log(first, second);

let [main,,secondary] = restaurant.categories;
console.log(main,secondary,restaurant.categories);

const temp = main;
main = secondary;
secondary = temp;
console.log(main,secondary,restaurant.categories);

console.log(restaurant.order(2, 1));

const books = ['1','2','3'];
let [firstBook, secondBook] = books;
let [,,thirdBook] = books
console.log(firstBook, secondBook, thirdBook);

const ratings = [['rating', 4.19],['ratingsCount', 144584]];
let [[,rating],[,ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

const arr = [7,8,9];
const newArr = [1,2, ... arr];

console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(...newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
const mixMatch = [...restaurant.starterMenu,...restaurant.mainMenu];

console.log(...mainMenuCopy);
console.log(...mixMatch);

const myStr = 'Valery';
const myLetters = [...myStr,' ','K.'];
console.log(myLetters);
console.log(...myLetters);

restaurant.orderPasta('Cheese','Salami','Ananas');

const ingredients = [
  prompt('Let\'s make pasta! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?')
];

restaurant.orderPasta(...ingredients);

const newRestaurant = {
  founder: 'Myself',
  ...restaurant,
  foundedIn :1988
}

console.log(newRestaurant);

const [pizza,,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(pizza,risotto,...otherFood);

//REST for functions

const add = function(...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
}

console.log(add(2,3));
console.log(add(5,7,9,21));

const x = [1,2,3,4,5,6,7,8,9,10];
console.log(add(...x));

restaurant.orderPizza('mushrooms','onion','olives','spinach');
restaurant.orderPizza('salami');