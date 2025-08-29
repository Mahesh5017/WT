const m1 = new Map();
const m2 = new Map([
    ["key1","value1"],
    ["key2","value2"],
])
console.log(m2)

m1.set("name","alice");
m1.set("age",30);
console.log(m1);
console.log(m1.get('name'))

console.log(m1.has("age"))

for(let key of m1){
    console.log(key)
}

let p = Object.fromEntries([
    ['b',1],
    ['o',2],
    ['m',4]
])

console.log(p)
console.log(p.o)

const myset = new Set();
const m4 = new Set([1,2,3,2,1]);
console.log(m4)
myset.add(1);
myset.add(2);
myset.add("hello");
myset.add(1)
console.log(myset)
myset.delete("hello");
console.log(myset)

for(const v of m4){
    console.log(v)
}

const abc = new Set(['x','y','z'])
const entry = abc.entries();
for(const [k,v] of entry){
    console.log(k,v)
}

const s = "helloworld"
console.log(s.slice(0,-3))
console.log(s.substring(0,3))
console.log(s.substr(0,3))