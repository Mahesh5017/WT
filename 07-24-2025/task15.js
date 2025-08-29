// write a program to implement a debounce(fn,delay) function that delays the execution of fn until there is a pause in repeated calls
function debounce(fun, delay) {
    let time;
    return function () {
        time = setTimeout(() => {
            fun();
        }, delay);
    };
}

function Greet() {
    console.log("Hello");
}

const debounced= debounce(Greet, 2000);
debounced();
debounced();
