Classes

class Classname {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
let obj=new Classname("arg1","arg2");
console.log(obj.prop1);
console.log(obj.prop2);

///////////////////////////////////////////

// class Dog {
//     constructor(dogName, weight, color, breed) {
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("Javascript", 2.4, "brown", "Abc")
// console.log(dog.dogName, "is a ", dog.breed, "and weight", dog.weight, "kg");

/////////////////////////////////////////
// class person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
////////////////////////////////////////////

// class person {
//     constructor(firstname, lastname = 'Doe') {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p=new person("","Doe");
// console.log("hi",p.lastname);

// ////////////////////////////////////////////////


// class person {
//     constructor(firstname, lastname = 'Doe') {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// greet (){
//     console.log("Hi there!");

// }


// class person {
//     constructor(firstname, lastname = 'Doe') {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

////////////////////////////////////////

/******INHERITANCE******** */

// class vechile {
//     constructor(color, currentspeed, maxspeed) {
//         this.color = color;
//         this.currentspeed = currentspeed;
//         this.maxspeed = maxspeed;
//     }
//     move() {
//         console.log("Moving at ", this.currentspeed);

//     }
//     accelerate(amount) {
//         this.currentspeed += amount;
//     }
// }
// class Motorcycle extends vechile(color, currentspeed, maxspeed, fuel) {
//     constructor(color, currentspeed, maxspeed, fuel) {
//         super(color, currentspeed, maxspeed);
//         this.fuel = fuel;
//     }

//     doWheelie() {
//         console.log("Driving on one wheel");

//     }
// }

// // With the extends keyword we specify that a certain class is the child of another class.
// // The super word in the constructor 


// let motor =new Motorcycle("Black ",0,250,"gasoline");
// console.log(motor.color); 
// motor.accelerate(50);
// motor.move();

/******PROTOTYPE******** */

Person.prototype.introduce = function() {
    console.log(Hello, my name is ${this.firstname});

    };
Person.prototype.favouritecolor = "green";
let p=new Person("John", "Doe");
console.log(p.favouritecolor); // Output: green
p.introduce(); // Output: Hello, my name is John