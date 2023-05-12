let discount = prompt("Какая скидка?");

let totalSale = Number;

let total = 0;

let max = Object;

let min = Object;

let average = Number;

let arr = [
  {
    name: "Milk",

    price: 3.25,
  },

  {
    name: "Coffee",

    price: 1.5,
  },

  {
    name: "Ice Cream",

    price: 7.85,
  },

  {
    name: "Tomatos",

    price: 4.14,
  },

  {
    name: "Onion",

    price: 2.25,
  },
];

let arr_sale = [];

// 1. Сохранить самый дорогой товар в переменную`max`*

// 2. Сохранить самый дешевый товар в переменную`min`*

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции setup()*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

const setup = () => {
  //! 1
  max = arr.reduce((a, b) => (a.price > b.price ? a : b));
  //console.log(max);
  //! 2
  min = arr.reduce((a, b) => (a.price > b.price ? b : a));
  //console.log(min);
  //! 3
  for (let i of arr) {
    total += i.price;
  };
  //console.log(total);
  //! 4
  let res;
  for (let i of arr) {
    res = (i.price / 100) * discount;
  };
  //console.log(res);
  //! 5
  arr_sale += res;
  //console.log(arr_sale);
  //! 6
  average = total / arr.length;
  //console.log(average);
};

setup();
