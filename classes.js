// Classes

// class Classname {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj=new Classname("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

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

// Person.prototype.introduce = function() {
//     console.log(Hello, my name is ${this.firstname});

//     };
// Person.prototype.favouritecolor = "green";
// let p=new Person("John", "Doe");
// console.log(p.favouritecolor); // Output: green
// p.introduce(); // Output: Hello, my name is John

// const fruits= new Map([
//     ['apple', 1],
//     ['banana', 2],
//     ['orange', 3]
// ]);
// console.log(fruits);


// const fruits= new Map();
// fruits.set('apple', 1);
// fruits.set('banana', 2);
// fruits.set('orange', 3);
// console.log(fruits);

// fruits.get('banana'); 
// console.log(typeof fruits.get('banana'));

// fruits.delete('banana');
// console.log(fruits);
// fruits.clear();
// console.log(fruits);

// fruits.set('apple', 100);
// fruits.set('banana', 200); 
// fruits.set('orange', 300);
// console.log(fruits);

// let text="";
// fruits.forEach(function(value, key){
//     text += key + "=" + value + "\n";
// })
// console.log(text);

// const apples ={name:'Apples'};
// const bananas ={name:'Bananas'};
// const oranges ={name:'Oranges'};

// const fruits=new Map()

// fruits.set(apples,500);
// fruits.set(bananas,500);
// fruits.set(oranges,500);

// fruits.get("apples");

// for(const x of fruits.entries()){
//     text += x + "\n";
// }
// console.log(text);

// for(const x of fruits.keys()){
//     text += x + "\n";
// }
// console.log(text);
// let sum=0;
// for(const x of fruits){
//     sum += x[1];
// }
// console.log(sum);
// for(const x of fruits.values()){
//     text += x + "\n";
// }
// console.log(text);

// const apple={name:"apple"}
// const banana={name:"banana"}
// const orange={name:"orange"}

// const fruits= new Map();

// fruits.set(apple, 1);
// fruits.set(banana, 2);
// fruits.set(orange, 3);
// console.log(fruits);
// fruits.get(apple);
// console.log(fruits.get("apple"));

// const fruits = [
//     { name: 'apple', quantity: 1 },
//     { name: 'banana', quantity: 2 },
//     { name: 'orange', quantity: 3 } 
// ];

// function myCallback({quantity}) {
//     return quantity > 2? "ok": "low";
// }
// const result Map.groupby(fruits, myCallback);
// console.log(result);

// const person={
//     firstName:"Morris",
//     lastName:"Kathuloo",
//     age: 25,
// }

// let {lastName,firstName}= person
// console.log(firstName);
// console.log(lastName);

// let {lastName,firstName}= person
// console.log(firstName);
// console.log(lastName);

// let name ="Morris";
// let [a1,a2]=name
// console.log(a1);
// let {[2]:a3}=name;
// console.log(a3);

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// const [a,b,...rest]=numbers;
// console.log(rest);

//swapping
// let firstName="Morris";
// let lastName="Kathuloo";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);
// console.log(lastName);

// let x=5;
// console.log(x**2);

// ARRAY INCLUDES
// const fruits=["banana","apples","oranges","mangoes"]
// console.log(fruits.includes("apples",2))

// TRAILING COMMAS
// const arr=["one", "two", "three",];
// console.log(arr.length);
// const sparseArray=[1,,,4,5,,];
// const arr=[,]