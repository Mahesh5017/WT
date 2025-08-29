function multiply(a){
    return function(b){
        return a*b
    }
}
const double = multiply(2)
const triple = multiply(3)

console.log(double(2))

