const endpoints = {
  questions: "https://opentdb.com/api.php?amount=1",
  answers: "https://yesno.wtf/api",
  leaderboard: "https://randomuser.me/api"
};

const fetchPromises = Object.entries(endpoints).map(([key, url]) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`${key} fetch failed`);
      return res.json();
    })
    .then((data) => ({ key, status: "fulfilled", data }))
    .catch((error) => ({ key, status: "rejected", reason: error.message }));
});

Promise.allSettled(fetchPromises).then((results) => {
  results.forEach((result) => {
    const res = result.value;
    if (res.status === "fulfilled") {
      console.log(`${res.key} fetched successfully:`, res.data);
    } else {
      console.error(`${res.key} failed:`, res.reason);
    }
  });
});
