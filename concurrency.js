//////callbacks//////

// function dosomething(callback){
//     callback();
// }
// function sayhi(){
//     console.log("HI");
// }
// dosomething(sayhi);

// function judge(grade){
//     switch(true){
//         case grade=="A":
//         console.log("amazing");
//         break;
//         case grade=="B":
//         console.log("amazing");
//         break;
//         case grade=="C":
//         console.log("amazing");
//         break;
//         case grade=="D":
//         console.log("amazing");
//         break;
//         default:
//         console.log("amazing");
//     }
// }
// function getgrade(score,callback){
//     let grade;
//     switch(true){
//         case score=>90:
//             grade="A";
//             break;
//         case score=>80:
//             grade="B";
//             break;
//         case score=>70:
//             grade="C";
//             break;
//         case score=>60:
//             grade="D";
//             break; 
//         default:
//             grade="F";
//     }
//     callback(grade);
// }
// getgrade(85,judge);

//////Promises//////

// let promise = new Promise(function(resolve,reject){
//     let x=20;
//     if (x>10){
//         resolve(x);
//     }else{
//         reject("Too Low");
//     }
// });
// promise.then(
//     function (value){
//         console.log("Success:", value);
//     },
//     function(error){
//         console.log("Error:", error);
//     }
// );

// let promise = new Promise(function(resolve,reject){
//     let x=10;
//     if (x>10){
//         resolve(x);
//     }else{
//         reject("Too Low");
//     }
// });
// promise.then(
//     function (value){
//         console.log("Success:", value);
//     },
//     function(error){
//         console.log("Error:", error);
//     }
// );

// const promise=new Promise((resolve,reject)=>{
//     resolve("Success");
// })
// .then(value=>{
//     console.log(value);
//     return "we";
// })
// .then(value=>{
//     console.log(value);
//     return "can";
// })
// .then(value=>{
//     console.log(value);
//     return "chain";
// })
// .then(value=>{
//     console.log(value);
//     return "promises";
// })
// .then(value=>{
//     console.log(value);
// })
// .then(value=>{
//     console.log(value);
// })
