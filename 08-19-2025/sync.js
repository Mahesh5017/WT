console.log("Script running");

setTimeout(() => {
    console.log("Script finished");
}, 1000);

Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
]).then(results => {
    console.log("All promises resolved: ", results);
}).catch(error => {
    console.log("error in the promise:", error);
});

let names = ['ilikans', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`);
        }
        return responses;
    })
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => users.forEach(user => console.log(user.name)));
