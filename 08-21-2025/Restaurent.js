function orderDish(dishName) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 2000) + 1000; 
    console.log(`Ordering ${dishName}...`);

    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        console.log(`${dishName} served in ${time}ms`);
        resolve(dishName);
      } else {
        reject(`Failed to serve ${dishName}`);
      }
    }, time);
  });
}

orderDish("Starter")
  .then(() => orderDish("Main Course"))
  .then(() => orderDish("Dessert"))
  .then(() => {
    console.log("All dishes served successfully!");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Meal process ended (success or fail).");
  });
