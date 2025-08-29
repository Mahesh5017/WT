let arr=[1,2,3,4,55,6]

console.log("for each")
arr.forEach(element => {
    console.log(element);
});

console.log("for of")
for (const element of arr) {
    console.log(element)
}
console.log(arr.reverse())

const doubled= arr.map(n=>n*2);
console.log(doubled);

const bignums = arr.filter(n=>n>5);
console.log(bignums)

