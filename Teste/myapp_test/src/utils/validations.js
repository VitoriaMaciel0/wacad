//src/utils/validation.js
/**
 * Extracts the first name from a full name string.
 *
 * @param {string} fullName - The full user name separated by blank spaces.
 * @returns {string} - The first name extracted from the full name, or the name itself if no blank space is found.
 */
function firstName(fullName) {
  const trimmedFullName = fullName.trim(); // Remove espaços em branco do início e do final

  const blankSpace = trimmedFullName.indexOf(' ');

  if (blankSpace === -1) return trimmedFullName;
  else return trimmedFullName.slice(0, blankSpace);
}

/**
 * Verifies the availability of a product in stock based on its type and desired quantity.
 *
 * @param {string} productType - The type of the product to check for availability.
 * @param {number} qty - The desired quantity of the product to check.
 * @returns {boolean} - Returns true if the desired quantity of the specified product type is available in stock,
 *                      otherwise returns false.
 */
function verifyStockAvailability(productType, qty) {
  const stock = {
    laptop: 10,
    smartphone: 20,
    headphone: 5,
    tablet: 15,
    book: 0,
  };

  return stock[productType] >= qty;
}


/**
 * Calculates the total price of an array of products in an e-commerce application.
 *
 * @param {Array} products - An array of product objects, each containing 'price' and 'quantity' properties.
 * @returns {number} - The total price obtained by multiplying the price of each product by its quantity
 *                    and summing up the individual product prices.
 *
 * Example of products array:
 *   [
 *     { name: 'Product 1', price: 10, quantity: 2 },
 *     { name: 'Product 2', price: 15, quantity: 2 },
 *     { name: 'Product 3', price: 20, quantity: 1 }
 *   ]
 */
function calculateTotalPrice(products) {
  if (!Array.isArray(products)) {
    throw new Error('Products must be an array.');
  }

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    
    if (!product.price || !product.quantity) {
      throw new Error(`Product at index ${i} is missing price or quantity.`);
    }

    total += product.price * product.quantity;
  }

  return total;
}



module.exports = { firstName, verifyStockAvailability, calculateTotalPrice };

