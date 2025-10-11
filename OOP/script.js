'use strict';
/*
const Person =function(firstName, birthYear){
console.log(this);
//property of instance
this.Name = firstName;
this.Year = birthYear;
// never do this
/*
this.calcAge = function(){
    console.log(2037 - this.Year);
};
};
const jonas = new Person('jonas',1991);
console.log(jonas);
//1, new empty{} object is created
//2, function is called , this {}
//3, { linked to prototype}
//4, function automatically return {} empty
const matila = new Person('Matila',2017);
const jack = new Person('jack', 1975);
console.log(matila,jack);
console.log(jonas instanceof Person)

Person.prototype.calcAge = function(){
    console.log(2037- this.Year);
}
jonas.calcAge(); 
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matila));
Person.prototype.species = 'home sapiens';
console.log(jonas.species);
console.log(jonas.hasOwnProperty('Name'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function(){
    return [...new Set(this)];
}
console.log(arr.unique());
const h1 = document.querySelector('h1');

const Car = function(make ,speed){
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} Km/hr`);
};
Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/hr`);
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();

bmw.break();
bmw.break();

mercedes.accelerate();
mercedes.accelerate();

mercedes.break();
mercedes.break();
*/
/*
//class Expression
//const personCl = class{}
//class declaration
class personCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
        
    }
    // method will be added to prototype of class
    clacAge(){
            console.log(2037 - this.birthYear);
        }
}
const jessica = new personCl('Jessica', 1996);
console.log(jessica);
jessica.clacAge();
console.log(jessica.__proto__ === personCl.prototype);
personCl.prototype.great = function(){
console.log(`hey ${this.firstName}`);
};

jessica.great();
//1, class is not hoisted - we cannot use before declaration
//2, class are first-class citizens
//3, classes are executed in strict mode


const account = {
    owner : 'jonas',
    movement : [200, 530,120,300],
     get latest(){
       return this.movement.slice(-1).pop();
    },
    set latest(mov){
     this.movement.push(mov);
    }
}
console.log(account.latest);
account.latest = 50;
console.log(account.latest);
*/
/*
class personCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
        
    }
    // method will be added to prototype of class
    clacAge(){
            console.log(2037 - this.birthYear);
        }
}
const jessica = new personCl('Jessica', 1996);

const personProto = {
    calcAge (){
        console.log(2037-this.birthYear);
    },
};

const steven = Object.create(personProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

class Carcl {
    constructor( make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} Km/hr`)
    }
    break(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} Km/hr`);
    }
    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(speed){
        this.speed = speed*1.6;
        }
}

const ford = new Carcl('ford', 120);
console.log(ford.speed);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.speedUS =50;
console.log(ford);
*/
/*
const Person =function(firstName, birthYear){
this.firstName = firstName;
this.lastYear = birthYear;
}; 
Person.prototype.calcAge = function (){
    console.log(2037 - this.birthYear);
};
const Student = function(firstName, birthYear, course){
    this.firstName=firstName;
    this.birthYear = birthYear;
    this.course = course;
}
//linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function (){
    console.log(`My Name is ${this.firstName}`);
}
const mike = new Student ('Mike',2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.log(Student.prototype.constructor);

const Car = function(make ,speed){
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} Km/hr`);
};
Car.prototype.break = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/hr`);
}
const Ev = function(make,speed,charge){
    Car.call(this,make,speed);
    this.speed = speed;
    this.charge = charge;
};
console.log(Ev);
Ev.prototype =Object.create(Car.prototype);
Ev.prototype.chargeBattery = function(chargeTO){
    this.charge = chargeTO;
}
const tesla = new Ev('Tesla',120,23);
tesla.break();
tesla.chargeBattery(90);
console.log(tesla);

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
*/
//static method
/* static hey() {
    console.log('hey there');
} 
 }
class personCl {
    constructor(fulName, birthYear){
        this.fulName = fulName;
        this.birthYear = birthYear;
        
    }
    // method will be added to prototype of class
    clacAge(){
            console.log(2037 - this.birthYear);
        }
}

class StudentCl extends personCl{
    constructor(fulName,birthYear, course){
        //always needs to happen first
        super(fulName, birthYear);
        this.course = course;

    }

    introduce(){
        console.log(`My name ${this.fulName} and I study ${this.course}`)
    }
    //override
    clacAge(){
        console.log(`
            Im ${this.fulName} and im ${2037 - this.birthYear} years Old`);
    }
}
 
const marta = new StudentCl('Martha Jones',2012,'Computer Science');
marta.clacAge(2002);
marta.introduce();
*/
//inheritance Between "classes" Object.create

const personProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
      this.firstName = firstName;
      this.birthYear = birthYear;
    }
};
const steven = Object.create(personProto);

const StudentProto = Object.create(personProto);
const jay = Object.create(StudentProto)