// Select the "Add to Cart" buttons and attach a click event listener
const addToCartButtons = document.querySelectorAll('.product-list button');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product details
    const product = button.parentElement;
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));

    // Create a new item in the cart
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <h3>${productName}</h3>
      <p>Price: $${productPrice.toFixed(2)}</p>
      <p>Quantity: 1</p>
      <button>Remove</button>
    `;

    // Select the cart and the total price element
    const cart = document.querySelector('.cart ul');
    const totalPrice = document.querySelector('.cart h3');

    // Add the new item to the cart
    cart.appendChild(cartItem);

    // Update the total price
    const currentTotalPrice = parseFloat(totalPrice.textContent.replace('Total: $', ''));
    const newTotalPrice = currentTotalPrice + productPrice;
    totalPrice.textContent = `Total: $${newTotalPrice.toFixed(2)}`;

    // Select the "Remove" buttons in the cart and attach a click event listener
    const removeButtons = cart.querySelectorAll('button');
    removeButtons.forEach(removeButton => {
      removeButton.addEventListener('click', () => {
        // Remove the item from the cart
        const removedItem = removeButton.parentElement;
        const removedPrice = parseFloat(removedItem.querySelector('p').textContent.replace('Price: $', ''));
        cart.removeChild(removedItem);

        // Update the total price
        const updatedTotalPrice = newTotalPrice - removedPrice;
        totalPrice.textContent = `Total: $${updatedTotalPrice.toFixed(2)}`;
      });
    });
  });
});
