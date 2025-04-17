// function sayHello() {
//     let you = prompt("What's your name?");
//     console.log("Hello", you + "!");
// }
// sayHello(); // Calling the function to execute

////////////////////////////////////////

// let varContainingFunction = function(){
//     let varInFunction = 'nodeIm in a function';
//     console.log("hi there", varInFunction);
// };
// varContainingFunction();

////////////////////////////////////////

// function tester(para1, para2){
//     return para1 + " " + para2;
// }
// const arg1 ="argument 1";
// const arg2 ="argument 2";
// console.log(tester(arg1,arg2));

////////////////////////////////////////

// function addTwoNumbers(x,y){
//     console.log(x + y);
// }
// var n1=parseInt(prompt("enter a"));
// var n2=parseInt(prompt("enter b"));
// addTwoNumbers(n1,n2);

////////////////////////////////////////

// function addTwoNumbers(x,y){
//     console.log(x + y);
// }
// addTwoNumbers(1,2,3,4)

////////////////////////////////////////

// function addTwoNumbers(x=2,y=8){
//    console.log(x + y);
// }
// addTwoNumbers();

////////////////////////////////////////

// (x)=>{
//  console.log(x);
// }
// let doingArrowStuff = x => console.log(x);
// doingArrowStuff("avinash");

////////////////////////////////////////

// let sayhi = () => console.log("hi");
// sayhi()

////////////////////////////////////////

// const arr= ["aman", "aryan", "buddy"];
// arr.forEach(e => console.log(e));

////////////////////////////////////////

// spread operator

// let spread = ["so", "much", "fun"];
// let message=["js", "is", ...spread, "and","powerfull"];
// console.log(message)

////////////////////////////////////////

// function sum(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// sum(...arr);

////////////////////////////////////////

// function sum(x,y,c,v){
//     console.log(x+y+c+v);
// }
// let arr=[5,9];
// let arr2=[5,9];
// sum(...arr,...arr2);

////////////////////////////////////////

// rest parameters

// function sum(x,y){
//     console.log(x,y);
// }
// sum("hi","there","how are you");/

////////////////////////////////////////

// function sum(x,...y){
//     console.log(x,y);
// }
// sum("hi","there","how are you");

////////////////////////////////////////

// function someFunction(parm1, parm2) {
//     console.log(parm1, parm2);
// }
// someFunction("hi", "there!", "How are you");

///////////////////////////////////////

//  Returninng function values

// let result = addTwoNumbers(4, 5);
// console.log(result);

//////////////////////////////////

// let resulArr = [];
// for (let i = 0; i < 10: i++) {
//     let result = addTwoNumbers(i, 2 * i)
// }

/////////////////////////////////////

// let result = addTwoNumbers(12, 15);
// console.log(result)

// function test(x) {
//     console.log("Available here :", x);
// }
// test("hi");

////////////////////////////////////

// function test(x) {
//     console.log("Available here :", x);
// }
// test("hi");
// console.log("Not available here:", x);

//////////////////////////////////////

// function test() {
//     let y = "local variable ";
//     console.log("Available here :", y);
// }
// test("hi");
// console.log("Not available here:", y);

////////////////////////////////////////

// function test() {
//     let y = "I'll return";
//     console.log("Available here :", y);
//     return y;
// }

/////////////////////////////////////

// function doingStuff() {
//     if (true) {
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

/////////////////////////////////////

// function doingStuff() {
//     if (true) {
//         console.log(x);
//         var x = "local";

//     }
// }
// doingStuff();

//////////////////////////////

// Global variable

// let globalVar = "accesible everywhere ";
// console.log("outside function ", globalVar);

// function creatingnewscope(x) {
//     console.log("access to global vars inside function ", globalVar);

// }
// creatingnewscope("some parameter ");
// console.log("still available :", globalVar);

////////////////////////////////////////

// let x="global";
// function forlocal(){
//     let x= "local";
//     console.log("local:",x);
// }
// forlocal();
// console.log("global:",x);

////////////////////////////////////////

// function confusereader(){
//     x="guess my scope...";
//     console.log("inside",x);
// }
// confusereader();
// console.log("outside",x);

////////////////////////////////////////

// (function(){
// console.log("IIFE");
// })();

// (()=>{
//     console.log("Run Right Away");
// })();

////////////////////////////////////////

// function recursive(nr){
//     console.log(nr);
//     if(nr>0){
//     recursive(--nr);
// }}
// recursive(3);

// function recursive(nr){
//     if(nr>0){
//         recursive(--nr);
//     }
//     console.log(nr);}
// recursive(3);

// function logrecursive(nr){
// console.log("started", nr);
//     if(nr>0){
//         logrecursive(nr-1);
//     }
//     else{
//         console.log("done");
//     }
//     console.log("ended",nr);
//     }
// logrecursive(3);

////////////////////////////////////////

// NESTED FUNCTION

// function outerfxn(nr){
//     console.log("outer fxn");
//     innerfxn(nr);
//     function innerfxn(x){
//         console.log(x+7);
//         console.log("i can access outer", nr);
//     }
// }
// outerfxn(8);

////////////////////////////////////////

// ANONYMOUS FUNCTION
// FUNCTION CALLBACKS

// let functionVariable=function(){
//     console.log("Not so secret");
// };

// function flexible(execute){
//     execute();
//     console.log("inside flexible fxn");
// }
// flexible(functionVariable);

// let yougot = function(){
//     console.log("keep coding");
// };
// setTimeout(yougot,1000);
// setInterval(yougot,1000);

// let val=10;
// function tester(val){
//     val+=10;
//     if (val<100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val);

// let test=function(){
//     console.log("hi");
// }();
