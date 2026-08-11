const couponApplier = (order) => {
  let discount = (order.total * 10) / 100;
  let discountPrice = order.total - discount;
  order.total = discountPrice;

  return order;
};
let obj = { orderId: "A1", total: 500, customer: "Mim" };
console.log(couponApplier(obj));
