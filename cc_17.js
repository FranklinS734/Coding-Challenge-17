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

// Task 2 - Create SalesRep Class
// This class manages sales representatives and their clients
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    // Method to add a client to the sales rep's list
    addClient(customer) {
        // Check if customer is already assigned
        if (!this.clients.includes(customer)) {
            this.clients.push(customer);
            console.log(`Added client ${customer.name} to ${this.name}'s list`);
        } else {
            console.log(`${customer.name} is already assigned to ${this.name}`);
        }
    }

    // Method to find client by name and display their total spending
    getClientTotal(name) {
        // Find client by name
        const client = this.clients.find(c => c.name === name);
        
        if (client) {
            return client.getTotalSpent();
        } else {
            console.log(`Client "${name}" not found for ${this.name}`);
            return 0;
        }
    }
}

// Test Task 2 - Create sales rep and assign clients
let salesRep1 = new SalesRep("Allie Gonzalez");
console.log(`Created sales rep: ${salesRep1.name}`);

// Assign existing customers to sales rep
salesRep1.addClient(customer1);
salesRep1.addClient(customer2);

// Check client totals
console.log(`${customer1.name}'s total: $${salesRep1.getClientTotal(customer1.name)}`);
console.log(`${customer2.name}'s total: $${salesRep1.getClientTotal(customer2.name)}`);