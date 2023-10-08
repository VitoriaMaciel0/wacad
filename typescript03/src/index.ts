
interface Product {
    modelo: string;
    fabricante: string;
    valor: number;
    detalhes: string;
}
class CartItem<T extends Product> {
    constructor(public product: T, public quantity: number) {}
}

class ShoppingCart<T extends Product> {
    private items: CartItem<T>[] = [];
    constructor() {}
    public addToCart(item: CartItem<T>) {
        this.items.push(item);
    }
    public removeFromCart(item: CartItem<T>) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    public getItems(): CartItem<T>[] {
        return this.items;
    }
    public calculateTotal(): number {
        return this.items.reduce((total, item) => total + item.product.valor * item.quantity, 0);
    }
}
function addToCart() {
    const productModel = (document.getElementById('product-model') as HTMLInputElement).value;
    const productManufacturer = (document.getElementById('product-manufacturer') as HTMLInputElement).value;
    const productValue = parseFloat((document.getElementById('product-value') as HTMLInputElement).value);
    const productDetails = (document.getElementById('product-details') as HTMLInputElement).value;
    const quantity = parseInt((document.getElementById('product-quantity') as HTMLInputElement).value);
    const product: Product = {
        modelo: productModel,
        fabricante: productManufacturer,
        valor: productValue,
        detalhes: productDetails,
    };
    const cartItem = new CartItem(product, quantity);

    cart.addToCart(cartItem);

    updateCartDisplay();
    (document.getElementById('product-model') as HTMLInputElement).value = '';
    (document.getElementById('product-manufacturer') as HTMLInputElement).value = '';
    (document.getElementById('product-value') as HTMLInputElement).value = '';
    (document.getElementById('product-details') as HTMLInputElement).value = '';
    (document.getElementById('product-quantity') as HTMLInputElement).value = '1';
}

function removeFromCart(index: number) {
    cart.removeFromCart(cart.getItems()[index]);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items') as HTMLUListElement;
    const cartTotal = document.getElementById('cart-total') as HTMLSpanElement;

    cartItems.innerHTML = '';
    const cartItemsArray = cart.getItems();
    let totalValue = 0;
    cartItemsArray.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.product.modelo} - Quantidade: ${item.quantity} x R$ ${item.product.valor.toFixed(2)} - ${item.product.detalhes}
            <button onclick="removeFromCart(${index})">Remover</button>`;
        cartItems.appendChild(li);

        totalValue += item.product.valor * item.quantity;
    });
    cartTotal.textContent = `R$ ${totalValue.toFixed(2)}`;
}

const cart = new ShoppingCart<Product>();
const addButton = document.getElementById('add-product') as HTMLButtonElement;
addButton.addEventListener('click', addToCart);
function updateFieldsBasedOnProductType() {
    const productType = (document.getElementById('product-type') as HTMLSelectElement).value;
    const productSpecificFields = document.getElementById('product-specific-fields')!;

    
    productSpecificFields.innerHTML = '';

    if (productType === 'TV') {
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

      
        productSpecificFields.appendChild(resolutionLabel);
        productSpecificFields.appendChild(resolutionInput);
        productSpecificFields.appendChild(document.createElement('br'));
        productSpecificFields.appendChild(sizeLabel);
        productSpecificFields.appendChild(sizeInput);
    
    } else if (productType === 'Celular') {
        const memoryLabel = document.createElement('label');
        memoryLabel.textContent = 'Memória:';
        const memoryInput = document.createElement('input');
        memoryInput.type = 'text';
        memoryInput.id = 'product-memory';
        productSpecificFields.appendChild(memoryLabel);
        productSpecificFields.appendChild(memoryInput);
    
    } else if (productType === 'Bicicleta') {
        const wheelSizeLabel = document.createElement('label');
        wheelSizeLabel.textContent = 'Tamanho do Aro:';
        const wheelSizeInput = document.createElement('input');
        wheelSizeInput.type = 'number';
        wheelSizeInput.id = 'product-wheel-size';
        productSpecificFields.appendChild(wheelSizeLabel);
        productSpecificFields.appendChild(wheelSizeInput);
    }
}


const productTypeSelect = document.getElementById('product-type') as HTMLSelectElement;
productTypeSelect.addEventListener('change', updateFieldsBasedOnProductType);
