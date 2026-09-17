//1
class student{
   static c=0;
    constructor(roll,name,marks)
    {
       this.roll=roll
       this.name=name
       this.marks=marks;
       student.c++;
    }
    display()
    {
        console.log(this.roll,this.name,this.marks)
        if(this.marks>=30)
        {
            console.log("pass")
        }
        else
        {
            console.log("full")
        }
    }
}

let s1=new student (101,"gg",90)
let s2=new student (102,"rohit",90)
let s3=new student (101,"sachin",100)
s1.display();
s2.display();
s3.display();
console.log(student.c);
console.log("---------------------------------------------------------")
//2
class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance);
        console.log("----------------");
    }

    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("General Banking Information");
    }
}


BankAccount.bankInfo();

let a1 = new BankAccount(1001, "Garima", 5000);
let a2 = new BankAccount(1002, "Anshika", 8000);

a1.deposit(2000);
a1.withdraw(1000);
a1.displayBalance();

a2.deposit(1000);
a2.withdraw(10000);
a2.displayBalance();
console.log("---------------------------------------------------------")
//3
class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

let e1 = new Employee(101, "Rahul", 30000);
let m1 = new Manager(102, "Garima", 50000, 10000);

console.log("Employee Salary:", e1.calculateSalary());
console.log("Manager Salary:", m1.calculateSalary());
//4
class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }

    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
    }

    static compareProducts(p1, p2) {
        if (p1.price > p2.price)
            console.log(p1.productName, "has higher price");
        else
            console.log(p2.productName, "has higher price");
    }
}

class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty, "years");
    }
}

let p1 = new Product(1, "Shoes", 2000);
let p2 = new Product(2, "Watch", 5000);

console.log("Discounted Price:", p1.getDiscountedPrice(10));

Product.compareProducts(p1, p2);

let e1 = new Electronics(3, "Laptop", 60000, 2);
e1.display();
//5
class vehicle{
    constructor(vhid,dn,d)
    {
         this.vhid
    }

}