function packBags() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bags packed");
    }, 1000);
  });
}

function bookCab() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.6;
      if (success) {
        resolve("Cab booked");
      } else {
        reject("No cab available");
      }
    }, 2000);
  });
}

function reachDest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Reached destination");
    }, 1000);
  });
}

packBags()
  .then((result) => {
    console.log(result);
    return bookCab();
  })
  .then((result) => {
    console.log(result);
    return reachDest();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Trip failed:", error);
  })
  .finally(() => {
    console.log("Trip simulation ended.");
  });
