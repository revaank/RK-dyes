// Cart to store added products
let cart = [];

// Function to add product to cart
function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    
    // Add the product to the cart
    cart.push(product);
    
    // Display the added product in an alert box
    alert(`${productName} has been added to your cart!`);
}

// Function to show cart items and total
function showCart() {
    let cartSummary = '';
    let total = 0;

    cart.forEach(item => {
        cartSummary += `${item.name}: $${item.price}\n`;
        total += item.price;
    });

    cartSummary += `\nTotal: $${total.toFixed(2)}`;

    // Show cart summary in alert box
    alert(`Your Cart:\n${cartSummary}\n\nProceed to Checkout?`);
    
    // Redirect to checkout if they choose to proceed
    if (confirm("Proceed to checkout?")) {
        window.location.href = 'checkout.html';
    }
}
