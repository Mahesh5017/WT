function fetchUser() {
  return Promise.resolve({ name: "BOB" });
}

function fetchOrders() {
  return Promise.resolve([{ id: 1, item: "Book" }]);
}

function fetchRecommendations() {
  return Promise.resolve(["Laptop", "Saree"]);
}

async function fetchAllData() {
  try {
    const [user, orders, recommendations] = await Promise.all([
      fetchUser(),
      fetchOrders(),
      fetchRecommendations()
    ]);

    console.log({ user, orders, recommendations });
  } catch (error) {
    console.log("Failed to fetch all data");
  }
}

fetchAllData();
