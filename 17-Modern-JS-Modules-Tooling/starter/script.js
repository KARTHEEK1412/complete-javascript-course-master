//import { shippingCost, arr, cart } from './example.js';
// import * as exp from './example.js';
// console.log('');
// console.log(exp.cart);
// Top-Level await (ES2022)

// console.log(exm);

// modulepattern
// function EmployeeDetails() {
//     const name : "Mayank";
//     const age : 30;
//     const designation : "Developer",
//     const salary : 10000;

//     return {
//       name: name,
//       age: age,
//       designation: designation
//     }
//   }

//   const newEmployee = EmployeeDetails();
//   const  userName = newEmployee.salary;
//   console.log(userName)

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   // only mentioned objects in the return are acessable by the outside of the function scope
//   return {
//     addToCart,
//     //cart,
//     totalPrice,
//     totalQuantity,
//     shippingCost,
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.cart);
//es6 modulesexapmle
// mod1.js
// const mod1Function = () => console.log('Mod1 is alive!')
// const mod1Function2 = () => console.log('Mod1 is rolling, baby!')

// export { mod1Function, mod1Function2 }
// import * as imported from './example'

// commonJS modules used at nodejs server side.not works at browser .works with nodejs
// exports.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//   );
// };
// const { addToCart } = require('<exported code filename>');
/******/
// importing lodash library files to js
