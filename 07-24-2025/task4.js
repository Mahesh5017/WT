//write a program to define a function customMap(arr,fn) that works like map() and returns a new array
function customMap(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr));
    }
    return result;
}

const numbersArray = [1, 2, 3, 4];
const doubledArray = customMap(numbersArray, function(num) {
    return num * 2;
});
console.log(doubledArray);