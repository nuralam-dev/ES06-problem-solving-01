const stockStatusCheck = (product) => {
  let filteredData = product.filter((product) => product.inStock == true);

  return filteredData;
};

let returnResult = [
  { name: "Shirt", inStock: true },
  { name: "Shoes", inStock: false },
  { name: "pant", inStock: true },
  { name: "juta", inStock: false },
];
console.log(stockStatusCheck(returnResult));

