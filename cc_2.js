 // Task 1: Working with Arrays
// Store Inventory
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
products.push("Webcam"); // Adding a new product
products.pop(); // Removing the last product
console.log("Updated Product List:", products);

// Task 2: Accessing and Modifying Arrays
// Student Scores
let scores = [85, 90, 78, 92, 88];
scores[1] = 95; // Updating the second score
let totalScore = scores.reduce((acc, curr) => acc + curr, 0);
let averageScore = totalScore / scores.length;
console.log("Updated Scores:", scores);
console.log("Average Score:", averageScore);

// Task 3: Working with Objects
// Employee Records
let employee = {
    name: "Jenny Tran",
    age: 30,
    department: "HR",
    isActive: true
};
employee.department = "Finance"; // Updating department
employee.position = "Manager"; // Adding a new property
console.log("Updated Employee Record:", employee);

// Task 4: Array of Objects
// Customer Database
let customers = [
    { name: "Jaden", email: "jaden@email.com", purchaseAmount: 200 },
    { name: "Krystal", email: "krystal@email.com", purchaseAmount: 150 },
    { name: "Kyle", email: "kyle@email.com", purchaseAmount: 300 }
];
customers.push({ name: "Chloe", email: "chloe@email.com", purchaseAmount: 250 });
console.log("Customer List:", customers);

// Task 5: Object Methods
// Order Processing System
let order = {
    orderId: 101,
    customerName: "Bill",
    amount: 500,
    calculateTax: function () {
        return this.amount * 0.1;
    }
};
console.log("Order Details:", order);
console.log("Tax Amount:", order.calculateTax());