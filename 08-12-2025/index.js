// function stepOne(value,callback){
//     setTimeout(() =>{
//         console.log(value);
//         callback();
//     },3000)
// }

// function stepTwo(value,callback){
//     setTimeout(() =>{
//         console.log(value);
//         callback();
//     },2000)
// }

// function stepThird(value,callback){
//     setTimeout(() =>{
//         console.log(value);
//         callback();
//     },1000)
// }

// stepOne(1,()=>{
//     stepTwo(2,()=>{
//         stepThird(3,()=>{
//             console.log("All completed");
//         })
//     })
// })

// //fetch('').then(res => res.json()).then(data => console.log(data));

// const pizzaOrder = new Promise((resolve,reject) =>{
//     console.log('Ordering pizza...');
//     setTimeout(()=>{
//         const pizzaReady = true;
//         if(pizzaReady){
//             resolve('Pizza is ready');
//         }else{
//             reject('No Pizza today');
//         }
//     },2000)
// })

// pizzaOrder.then(msg=>{
//     console.log(msg)
//     console.log("time to eat");
// }).catch(err=>{
//     console,log(err)
//     console.log("lets cook at home")
// })

// console.log("waiting for pizz")

let a = prompt("Enter true or false").toLowerCase() === "true";

function Order(value,resolve,reject){
    setTimeout(()=>{
        const pizzaReady = value;
        if(pizzaReady){
            resolve('Pizza is ready');
        }else{
            reject('No Pizza today');
        }
    },2000)
}

const pizzaOrder = new Promise((resolve,reject) =>{
    console.log('Ordering pizza...');
    Order(a,resolve,reject);
})

pizzaOrder.then(msg =>{
    console.log(msg);
    console.log('Time to eat');
}).catch(err =>{
    console.log(err);
    console.log('lets cook at home');
})
console.log('Wating for pizza ...');