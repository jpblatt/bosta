let cart = [];
let totalPrice = 0;

// Função para adicionar produtos ao carrinho
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

// Função para atualizar o carrinho na interface
function updateCart() {
    // Atualiza o número de itens no carrinho
    document.getElementById('cart-count').textContent = cart.length;

    // Exibe os itens do carrinho
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Atualiza o valor total
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    // Exibe o carrinho
    document.getElementById('cart').style.display = 'block';
}

// Função para finalizar a compra
function checkout() {
    alert('Compra finalizada com sucesso!');
    cart = [];
    totalPrice = 0;
    updateCart();
}
