// write a program to create a function pipeline(...functions)that takes multiple functuins and applies them in order to a given input.using the higher order functions 
function pipeline(...fns){
  return function(x){
    for(let i=0;i<fns.length;i++){
      x=fns[i](x);
      console.log(fns[i],x);
    }
  }
}

function double(n){
    return n*2;
}
function square(n){
    return n*n;
}
function increment(n){
    return n+1;
}

const result=pipeline(double,square,increment);
console.log(result(2));
