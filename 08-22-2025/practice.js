let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("✅ Operation successful!");
    } else {
        reject("❌ Something went wrong!");
    }
});


myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("🔔 Promise completed (success or fail).");
    });

    

    function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("📦 Data received after 2 seconds");
        }, 2000);
    });
}

getData().then(data => console.log(data));
