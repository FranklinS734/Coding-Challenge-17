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

// Task 3 :  Create a VIPCustomer Class (extends Customer)
// This class represents VIP customers who get a 10% bonus
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        // Call parent class constructor
        super(name, email);
        
        // Set VIP level (Gold or Platinum)
        this.vipLevel = vipLevel;
    }

    // Override getTotalSpent to add 10% bonus
    getTotalSpent() {
        // Get base total from parent class
        const baseTotal = super.getTotalSpent();
        
        // Add 10% bonus for VIP customers
        return baseTotal * 1.1;
    }
}

// Test Task 3 - Create VIP customers
let vipCustomer1 = new VIPCustomer("Adam Smith", "Adam.S@gmail.com", "Platinum");
vipCustomer1.addPurchase(500);
vipCustomer1.addPurchase(300);
console.log(`Created VIP customer: ${vipCustomer1.name}, Level: ${vipCustomer1.vipLevel}`);
console.log(`Total with 10% bonus: $${vipCustomer1.getTotalSpent().toFixed(2)}`);

let vipCustomer2 = new VIPCustomer("Mark Eve", "Mark.E@outlook.com", "Gold");
vipCustomer2.addPurchase(1000);
console.log(`Created VIP customer: ${vipCustomer2.name}, Level: ${vipCustomer2.vipLevel}`);
console.log(`Total with 10% bonus: $${vipCustomer2.getTotalSpent().toFixed(2)}`);

// Task 4 - Build Client Report System

// Add VIP customers to sales rep
salesRep1.addClient(vipCustomer1);
salesRep1.addClient(vipCustomer2);

// Combine all customers into one array
const allCustomers = [customer1, customer2, vipCustomer1, vipCustomer2];

// Calculate total revenue from all customers
const totalRevenue = allCustomers.reduce((sum, customer) => sum + customer.getTotalSpent(), 0);
console.log(`Total Revenue from all customers: $${totalRevenue.toFixed(2)}`);

// Find high-spending customers (over $500)
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log("High-spending customers (>$500):");
highSpenders.forEach(customer => {
    console.log(`- ${customer.name}: $${customer.getTotalSpent().toFixed(2)}`);
});

//Creates a summary with each customer's name and total spent (rounded)
const customerSummary = allCustomers.map(c => (
    {name: c.name, totalSpent: Math.round(c.getTotalSpent()) }
));
console.log("Customer Summary:", customerSummary);