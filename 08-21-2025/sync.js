// Promise.any([
//     new Promise((resolve,reject)=>setTimeout(()=>reject("fail 1"),500)),
//     new Promise((resolve)=>setTimeout(()=>resolve("success 1"),1000)),
//     new Promise((resolve,reject)=>setTimeout(()=>reject("fail 2"),500)),
// ])
// .then(console.log)
// .catch(console.error)

// let cache=new Map();
// function load_cache(url){
//     if(cache.has(url)){
//         console.log("From cache:",url);
//         return Promise.resolve(cache.get(url));
//     }
//     console.log("fetching frmo network:",url);
    
//     return fetch(url)
//     .then(response=>response.text())
//     .then(text=>{
//         cache.set(url,text);
//         return text;
//     })
// }

// function delay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }
// let testURL="https://jsonplaceholder.typicode.com/posts/1";
// load_cache(testURL)
//     .then(data=>{
//         console.log("First call result :",data);
//         return delay(2000)
//             .then(()=>load_cache(testURL));
//     })
//     .then(data2=>{
//         console.log("Second call Result:",data2);
//     })
//     .catch(err=>console.log("Error :",err));


// try{
//     JSON.parse("Invalid json");
// }catch(e){
//     console.log("caught sync error",e.message);
// }
// try{
//     console.log("hello");
//     setTimeout(()=>{
//         throw new Error("This wont be caught here");
//     },1000);
// }catch(e){
//     console.log("caught sync error",e.message);
// }

fetch("https://example.com/data.json").then(response => response.json()).then(data=>{
    console.log("Data: ",data)
}).catch(error =>{
    console.error("Some thing went wrong",error);
})

Promise.resolve(42).then(value => {
    if(value === 42) throw new Error("value cannot be 42");
    return value
}).catch(error => {
    console.error("Caught error:",error.message);
})


Promise.resolve().then(()=>{

})

Promise.reject("First error")
    .catch(err=>{
        console.warn("Logging:",err);
        throw new Error("Another Error");
    })
    .catch(err=>console.error("Final handlers:",err.message));
