let object={
    name:"john",
    age:78,
    address:{
        city:"hyd"
    }
}

for (const key in object) {
    console.log(key,object[key])
}

for (const element of Object.keys(object)) {
    console.log(element,object[element])
}
