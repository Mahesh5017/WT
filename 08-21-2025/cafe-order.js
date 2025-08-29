function orderCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.7) {
        resolve("Your coffee is ready!");
      } else {
        reject("Coffee machine is broken!");
      }
    }, 2000);
  });
}

orderCoffee()
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
    .finally(() => console.log("Thanks for waiting!\n"));

