const priceItems = document.querySelectorAll('.price-item');

priceItems.forEach(item => {
  item.addEventListener('click', () => {
    
    priceItems.forEach(item => {
      item.classList.remove('selected');
    });

    
    item.classList.add('selected');
  });
});


const decreaseButton = document.querySelector('.decrease-quantity');
const increaseButton = document.querySelector('.increase-quantity');
const quantityField = document.querySelector('.quantity');

// Valor inicial da quantidade
let quantidade = 1;


decreaseButton.addEventListener('click', () => {
  
  if (quantidade > 1) {
    quantidade--;
    updateQuantity();
  }
});

increaseButton.addEventListener('click', () => {
  
  quantidade++;
  updateQuantity();
});


function updateQuantity() {
  quantityField.textContent = quantidade;
}
