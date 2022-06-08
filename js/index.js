// ITERATION 1

const { TestWatcher } = require("jest");

function updateSubtotal(product) {
  debugger
  let priceElement = product.querySelector('.price span');
  let quantityElement = product.querySelector('.quantity input');
  

  let price =  Number(priceElement.innerText);
  let quantity = Number(quantityElement.value);

  let subTotal = price * quantity;
  let subTotalElement = product.querySelector('.subtotal span');

  console.log(price)
  subTotalElement.innerText = subTotal;
  return subTotal;
}
// NO ME FUNCIONA EL TEST !!!!!!!!!!!!!

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const productsElements = document.querySelectorAll('.product');
  let sumatorio = 0;
  productsElements.forEach((item) =>{
    sumatorio += updateSubtotal(item)});
  // end of test
  
  // ITERATION 3
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
