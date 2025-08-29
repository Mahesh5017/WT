let obj={
    for:1,
    let:2,
    return: 3
};

// alert(obj.for + obj.let + obj.return);
// alert("for" in obj);
// alert("age" in obj);

//     let a={}
//     let b=a;
//     alert(a==b)
//     alert(a===b)

let clone={}
// for(let key in obj){
//     clone[key]=obj[key];
// }

clone = obj;
console.log(clone);

let sal={
    john:100,
    ann:160,
    pete:130
}
let result=0;
for(let key in sal){
    result +=sal[key];
}
console.log(result)