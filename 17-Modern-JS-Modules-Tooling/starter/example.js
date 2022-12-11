// export const shippingCost = 10;
// export let cart = [];
// console.log('example');
// export const arr = function (val) {
//   cart.push(val);
// };
// arr(20);
// arr(10);
// arr(0);
// arr(10);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastpost = getLastPost();
const lastpost1 = lastpost.then(res => console.log(res));
