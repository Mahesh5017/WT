// function fetchData(callback){
//     setTimeout(()=>{
//         callback("Data fetched")
//     },1000);
// }

// function outer(){
//     let count=0;
//     return function inner(){
//         count++;
//         return count;
//     }
// }
// const i=outer();
// console.log(i())
// console.log(i())


// const person={
//     name:'mahesh',
//     greet:function(){
//         setTimeout(()=>{
//             console.log("hello im",this.name);
//         },1000);
//     }
// }
// console.log(person.greet())

// var name="john"
// // console.log(window.name);

// globalThis.message = "kwllo eorld"
// console.log(globalThis.message);

// const sum=new Function("a","b","return a+b");
// console.log(sum(2,3))

// let x=10;
// let f = new Function("return x;");
// console.log(f());

function greet(){
    console.log("hello")
}
greet.lang = "English";
console.log(greet.lang);

let count=0;
function square(n){
    count++;
    return n*n;
}
console.log(square(10));
console.log(square(10));
console.log(square(10));
console.log(count);