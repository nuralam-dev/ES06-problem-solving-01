// function discount(prices) {
//   let updatePrice = [];
//   for (let i = 0; i < prices.length; i++) {
//     let discountPrice = prices[i] - 5;
//     updatePrice.push(discountPrice);
//   }
//   let total = 0;
//   for (let i = 0; i < updatePrice.length; i++) {
//     total += updatePrice[i];
//   }
//   return total;
// }
// let prices = [100, 250, 80];
// console.log(discount(prices));
//                      ES06
const discountCalculate = (prices) => {
  let updatePrice = prices.map((p) => p - 5);
  let total = updatePrice.reduce((sum, price) => sum + price, 0);
  return total;
};
let prices = [100, 250, 80];
console.log(discountCalculate(prices));
