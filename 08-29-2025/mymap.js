const myMap = new Map();
const myMap1 = new Map([
    ["key1","value1"],
    ["key2","value2"],
]);

const myMp = new Map();
myMp.set("name","Alice");
myMp.set("age",30);

console.log(myMp);
console.log(myMp.get("name"));
console.log(myMp.get("age"));
console.log(myMp.get("gender")); // undefined

const player = new Map([
    ["key","value"],
    ["small","medium"],
]);

console.log(player);

player.forEach((value,key) => {
    console.log(`${key}:${value}`);
});

console.log("for...of");
for (const [key,value] of player) {
    console.log(`${key}:${value}`);
}

player.set("big","large");
player.set("speed","fast");


player.delete("small");

console.log("After insert and delete:");
for (const [key,value] of player) {
    console.log(`${key}:${value}`);
}
