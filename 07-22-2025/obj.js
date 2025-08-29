let user = {name:"john",
    age:40,
    address:{
        city:"hyd"
    }
}
let clone = Object.assign({},user)
console.log(clone)

let clone1 = {...user}
console.log(clone1)

console.log("name" in user);

clone1.address.city="mumbai"
console.log(user)
console.log(clone)
console.log(clone1)

let clone2 = JSON.parse(JSON.stringify(user))
clone2.address.city = "kerela"
console.log(clone2)
console.log(user)

let clone3 = structuredClone(user)
clone3.address.city = "banglore"
console.log(clone3)
console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))