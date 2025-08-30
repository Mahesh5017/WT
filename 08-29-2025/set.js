const myset = new Set();
myset.add(42);
myset.add("hello");

console.log(myset)
myset.delete("hello")
console.log(myset)

const tt = new Set(["a","b","c",]);
for(const value of tt.keys()){
    console.log(value)
}
const abc  =new Set(["x","y","z"])
const entryiterator = abc.entries();
for(const [key,value] of entryiterator){
    console.log(key,value)
}