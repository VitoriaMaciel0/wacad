"use strict";
// Classe para representar um item no carrinho
class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}
// Classe genérica para representar um carrinho de compras
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    // Método para adicionar um produto ao carrinho
    addToCart(item) {
        this.items.push(item);
    }
    // Método para remover um produto do carrinho
    removeFromCart(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    // Método para obter todos os itens no carrinho
    getItems() {
        return this.items;
    }
    // Método para calcular o valor total do carrinho
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.product.valor * item.quantity, 0);
    }
}
// Função para adicionar um produto ao carrinho
function addToCart() {
    const productModel = document.getElementById('product-model').value;
    const productManufacturer = document.getElementById('product-manufacturer').value;
    const productValue = parseFloat(document.getElementById('product-value').value);
    const productDetails = document.getElementById('product-details').value;
    const quantity = parseInt(document.getElementById('product-quantity').value);
    // Crie um objeto de produto com base nos valores do formulário
    const product = {
        modelo: productModel,
        fabricante: productManufacturer,
        valor: productValue,
        detalhes: productDetails,
    };
    // Crie um objeto de item de carrinho com o produto e a quantidade
    const cartItem = new CartItem(product, quantity);
    // Adicione o item ao carrinho
    cart.addToCart(cartItem);
    // Atualize a exibição do carrinho
    updateCartDisplay();
    // Limpe os campos do formulário após adicionar o produto
    document.getElementById('product-model').value = '';
    document.getElementById('product-manufacturer').value = '';
    document.getElementById('product-value').value = '';
    document.getElementById('product-details').value = '';
    document.getElementById('product-quantity').value = '1';
}
// Função para remover um produto do carrinho
function removeFromCart(index) {
    // Remova o produto do carrinho com base no índice
    cart.removeFromCart(cart.getItems()[index]);
    // Atualize a exibição do carrinho após a remoção
    updateCartDisplay();
}
// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    // Limpe o conteúdo atual do carrinho
    cartItems.innerHTML = '';
    // Percorra os itens no carrinho e adicione-os à exibição
    const cartItemsArray = cart.getItems();
    let totalValue = 0;
    cartItemsArray.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.product.modelo} - Quantidade: ${item.quantity} x R$ ${item.product.valor.toFixed(2)} - ${item.product.detalhes}
                        <button onclick="removeFromCart(${index})">Remover</button>`;
        cartItems.appendChild(li);
        // Calcule o valor total
        totalValue += item.product.valor * item.quantity;
    });
    // Exiba o valor total formatado
    cartTotal.textContent = `R$ ${totalValue.toFixed(2)}`;
}
// Crie uma instância de carrinho
const cart = new ShoppingCart();
// Event listener para o botão "Adicionar Produto"
const addButton = document.getElementById('add-product');
addButton.addEventListener('click', addToCart);
//codigo funcionando
// Função para atualizar os campos do formulário com base no tipo de produto selecionado
function updateFieldsBasedOnProductType() {
    const productType = document.getElementById('product-type').value;
    const productSpecificFields = document.getElementById('product-specific-fields');
    // Limpe os campos específicos do produto
    productSpecificFields.innerHTML = '';
    if (productType === 'TV') {
        // Se o tipo de produto for TV, adicione campos específicos para TV
        // Por exemplo, resolução e tamanho em polegadas
        const resolutionLabel = document.createElement('label');
        resolutionLabel.textContent = 'Resolução:';
        const resolutionInput = document.createElement('input');
        resolutionInput.type = 'text';
        resolutionInput.id = 'product-resolution';
        const sizeLabel = document.createElement('label');
        sizeLabel.textContent = 'Tamanho em Polegadas:';
        const sizeInput = document.createElement('input');
        sizeInput.type = 'number';
        sizeInput.id = 'product-size';
        // Adicione os campos ao formulário
        productSpecificFields.appendChild(resolutionLabel);
        productSpecificFields.appendChild(resolutionInput);
        productSpecificFields.appendChild(document.createElement('br'));
        productSpecificFields.appendChild(sizeLabel);
        productSpecificFields.appendChild(sizeInput);
    }
    else if (productType === 'Celular') {
        // Se o tipo de produto for Celular, adicione campos específicos para Celular
        // Por exemplo, memória
        const memoryLabel = document.createElement('label');
        memoryLabel.textContent = 'Memória:';
        const memoryInput = document.createElement('input');
        memoryInput.type = 'text';
        memoryInput.id = 'product-memory';
        // Adicione o campo ao formulário
        productSpecificFields.appendChild(memoryLabel);
        productSpecificFields.appendChild(memoryInput);
    }
    else if (productType === 'Bicicleta') {
        // Se o tipo de produto for Bicicleta, adicione campos específicos para Bicicleta
        // Por exemplo, tamanho do aro
        const wheelSizeLabel = document.createElement('label');
        wheelSizeLabel.textContent = 'Tamanho do Aro:';
        const wheelSizeInput = document.createElement('input');
        wheelSizeInput.type = 'number';
        wheelSizeInput.id = 'product-wheel-size';
        // Adicione o campo ao formulário
        productSpecificFields.appendChild(wheelSizeLabel);
        productSpecificFields.appendChild(wheelSizeInput);
    }
}
// Adicione um ouvinte de evento para o campo 'product-type' para chamar a função acima
const productTypeSelect = document.getElementById('product-type');
productTypeSelect.addEventListener('change', updateFieldsBasedOnProductType);
