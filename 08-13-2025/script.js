function stepOne(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(value);
            resolve();
        }, 3000);
    });
}

function stepTwo(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(value);
            resolve();
        }, 2000);
    });
}

function stepThird(value) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(value);
            resolve();
        }, 1000);
    });
}