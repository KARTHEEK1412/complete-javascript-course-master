'use strict';
//constructor function can be created with only CAp starting
const Person = function (firstname, birthyear) {
  this.firstname = firstname;
  this.birthyear = birthyear;
};
//constructor function can be called using new keyword
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}
//jonas is the instance of the person object

// protypes
//now person constructor function is assigned with calAge function using prototype inheritance or delegation
//prototype inhertitance
Person.prototype.calAge = function () {
  console.log(2022 - this.birthyear);
};
Person.prototype.species = 'homosapiens';
const jonas = new Person('karthik', 2001);
console.log(jonas);
// console.log(jonas instanceof Person);

jonas.calAge();
//used to know what methods does jonas object consists
//object.hasOwnProrerty defines the properties of that object
console.log(jonas.__proto__);

const arr = [2, 3, 6, 9, 4, 8, 8, 8];
// displays the methods that can be acessed by prototypeinheritance
// adding an new method to the Array by me
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());
console.log(arr.__proto__);

//coding challenge
const Car = function (car, speed) {
  this.car = car;
  this.speed = speed;
};

Car.prototype.accelerate = function (speed) {
  return (this.speed += 10);
};
Car.prototype.brake = function (speed) {
  return (this.speed -= 5);
};
const bmw = new Car('BMW', 120);
const mercede = new Car('benz', 95);
console.log(bmw.accelerate());
console.log(bmw.brake());
console.log(mercede.accelerate());
console.log(mercede.brake());

/// EsClasses
class Personcl {
  constructor(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  }
  //methods will be added to prototype property in classes
  calAge() {
    console.log(2037 - this.birthyear);
  }
}

const karthik = new Personcl('karthik', 2020);
console.log(karthik);
karthik.calAge();

//getters and setters
/*Sometimes it is desirable to allow access to a property
 that returns a dynamically computed value, or you may want to
 reflect the status of an internal variable without requiring the use of
explicit method calls. In JavaScript, this can be accomplished with the use of a getter.*/

/*In JavaScript, a setter can be used to execute a function whenever a 
specified property is attempted to be changed. Setters are most 
often used in conjunction with getters to create a type of
 pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.*/
const account = {
  owner: 'karthik',
  movements: [200, 150, 300, 400],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest1(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest1 = 20;
console.log(account.movements);

///static method
/*class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
  }
  
  let myCar = new Car("Ford");
  
  // You can call 'hello()' on the Car Class:
  document.getElementById("demo").innerHTML = Car.hello();
  
  // But NOT on a Car Object:
  // document.getElementById("demo").innerHTML = myCar.hello();
  // this will raise an error.*/

//object.create is an another method to implement prototypeinheritance
const proto = {
  calAge() {
    console.log(2037 - this.birthyear);
  },
  //manually initializing
  init(firstname, birthyear) {
    this.firstname = firstname;
    this.birthyear = birthyear;
  },
};
const verzo = Object.create(proto);
//verzo.birthyear = 2000;
verzo.init('karthik', 2000);
verzo.calAge();

//coding challenge2
/*class Car1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    return (this.speed += 10);
  }
  brake() {
    return (this.speed -= 5);
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    return (this.speed = speed * 1.6);
  }
}
const coding = new Car1('BMW', 120);
console.log(coding.accelerate());
console.log(coding.brake());
coding.speedUs = 50;
console.log(coding.speed);
// console.log(coding.speedUs);*/

// 218.Inheritance Between "Classes": Constructor Functions
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(
    `this is ${this.firstName} am from ${this.course} born in ${this.birthYear}`
  );
};
const jay = new Student('jay', 2000, 'ECE');
jay.introduce();
console.log(jay.__proto__);

//coding challeng 3

class Cars {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    return (this.speed += 10);
  }
  brake() {
    return (this.speed -= 5);
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    return (this.speed = speed * 1.6);
  }
}

const Ev = function (make, speed, charge) {
  //Car.call can be used for only the constructed function
  Car.call(this, make, speed);
  this.charge = charge;
};
Ev.prototype = Object.create(Car.prototype);
Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const coding = new Car('BMW', 120);
const tesla = new Ev('tesla', 120, 23);
tesla.chargeBattery(50);
console.log(tesla);
//
console.log(coding.accelerate());
console.log(coding.brake());
coding.speedUs = 50;
console.log(coding.speed);

//////////////////////////////////
//220. Inheritance Between "Classes": ES6 Classes
class Student1 extends Personcl {
  constructor(firstname, birthyear, course) {
    super(firstname, birthyear);
    this.course = course;
  }
  introduce() {
    console.log(
      `this is ${this.firstname} am from ${this.course} born in ${this.birthyear}`
    );
  }
}
const martha = new Student1('karthik', 2000, 'ECE');
martha.introduce();
martha.calAge();
//////////////////////////
//221. Inheritance Between "Classes": Object.create

/*const StudentProto = Object.create(proto);
StudentProto.init = function(firstName,birthYear,course){

}
const jay2 = object.create(StudentProto);*/
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay1 = Object.create(StudentProto);
jay1.init('Jay', 2010, 'Computer Science');
jay1.introduce();
jay1.calcAge();

//222.another class examples
class Account1 {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.locate = navigator.language;
    this.movements = [];
  }
  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.movements.push(-val);
    this.movements.pop(val);
    return this;
  }
}

const acc11 = new Account1('karthik', 'IN', 1111);
acc1.deposit(200);

///chaining
acc1.deposit(200).deposit(500).withdraw(500).deposit(1000);
console.log(acc1.movements);

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods
//protected are _
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();
///console.log(acc1.#movements);

// console.log(acc1.#pin);
console.log(acc1.#approveLoan(100));

// Chaining
/*acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/
