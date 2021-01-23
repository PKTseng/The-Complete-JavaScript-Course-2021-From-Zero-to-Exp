'use strict';

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
};

// 解構
let [main, , secondary] = restaurant.categories;
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

[secondary, main] = [main, secondary];
// console.log(secondary, main);
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

const nested = [1, 2, [5, 8]];
const [i, , j] = nested;
console.log(i, j);
