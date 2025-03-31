// Task 1 : Create Customer Clas

//This class represents a regular customer
class Customer {
    
    constructor(name, email) {
        //Customer's name
        this.name = name;
         //Customer's email
        this.email = email;
    
        this.purchaseHistory = [];
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amt) => total + amt, 0);
    }
}

// Test Task 1 - Create customers and add purchases
console.log("=== Task 1 Testing ===");
let customer1 = new Customer("Neil Wu", "Neil.W@aol.com");
customer1.addPurchase(100);
customer1.addPurchase(50);
console.log(`Created customer: ${customer1.name}, Email: ${customer1.email}`);
console.log(`Total spent: $${customer1.getTotalSpent()}`);

let customer2 = new Customer("Sunny Man", "Sunny.M@hotmail.com");
customer2.addPurchase(200);
customer2.addPurchase(150);
console.log(`Created customer: ${customer2.name}, Email: ${customer2.email}`);
console.log(`Total spent: $${customer2.getTotalSpent()}`);
