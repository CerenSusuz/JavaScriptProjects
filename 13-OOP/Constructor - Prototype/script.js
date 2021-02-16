function Employee(name, salary) {
    if (!this instanceof Employee) {
        return new Employee(name, salary);
    }
    this.name = name;
    this.salary = salary;
}
Employee.prototype.calculateSalary = function() {
    var month = new Date().getMonth() + 1;
    var tax = 0;
    total = this.salary * month;

    if (total <= 20000) {
        tax = total * 0.2;
    } else if (total > 20000 && total <= 30000) {
        tax = total * 0.25;
    } else {
        tax = total * 0.3;
    }

    return {
        tax: tax,
        paid: total - tax
    }
}

var emp1 = new Employee('ceren', 15000);
console.log(emp1);
console.log(emp1.calculateSalary());

var emp2 = new Employee('aybike', 1000);
console.log(emp2);
console.log(emp2.calculateSalary());