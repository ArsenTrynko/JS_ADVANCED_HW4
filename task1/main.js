class Worker {
    constructor(name, sname, rate, days) {
        this.name = name
        this.sname = sname
        this.rate = rate
        this.days = days
    }
    getSalary() {
        return `${this.rate * this.days}`
    }
}

let worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker1);
console.log(worker1.name);
console.log(worker1.sname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary());


let worker2 = new Worker('Arsen', 'Trynko', 50, 31);
console.log(worker2);
console.log(worker2.name);
console.log(worker2.sname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary());





