//src/utils/test/validation.test.js

const {
    firstName,
    verifyStockAvailability,
    calculateTotalPrice,
  } = require("../validations");
  
  describe("Validation Utils", () => {
    describe("firstName()", () => {
      it("should return the first name when the full name is given", () => {
        const fullName = "John Doe Etc";
        const result = firstName(fullName);
        expect(result).toBe("John");
      });
  
      it("should return the same when no blank space is found", () => {
        const name = "Alice";
        const result = firstName(name);
        expect(result).toBe(name);
      });
  
      it("should return the first name correctly when there's blank space in the start", () => {
        const name = " Alice Test";
        const result = firstName(name);
        expect(result).toBe("Alice");
      });
  
      it("should return the first name correctly when there's blank space in the end", () => {
        const name = "Alice Test ";
        const result = firstName(name);
        expect(result).toBe("Alice");
      });
    });
  
    describe("verifyStockAvailability()", () => {
      it("should return true when there is available stock", () => {
        const productType = "laptop";
        const qty = 5;
        const result = verifyStockAvailability(productType, qty);
        expect(result).toBe(true);
      });
  
      it("should return false when there is no available stock", () => {
        const productType = "book";
        const qty = 1;
        const result = verifyStockAvailability(productType, qty);
        expect(result).toBe(false);
      });
    });
  
    describe("calculateTotalPrice()", () => {
        it("should calculate the total price of products", () => {
            const products = [
              { name: "Product 1", price: 10, quantity: 2 },
              { name: "Product 2", price: 15, quantity: 2 },
              { name: "Product 3", price: 20, quantity: 1 }
            ];
            const expectedResult = 70; 
            const result = calculateTotalPrice(products);
            console.log("Input Products:", products); 
            console.log("Actual Result:", result); 
            expect(result).toBe(expectedResult);
          });
          
          
    });
  });
  

