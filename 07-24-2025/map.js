// const num = [1,2,3]
// const doubled = num.map(function(n){
//     return n*2;
// })
// console.log(doubled)
// console.log(num)

// a function that takes a function and value and applies the function two times to the value expected: 16(double 4=8,then double 8=6)
function applyTwice(fn,x){
  return fn(fn(x));
}

function double(n){
  return n*2;
}

console.log(applyTwice(double,4));

