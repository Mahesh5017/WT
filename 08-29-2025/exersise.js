let str = "plz give me Rs1000";
let amount = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] >= '0' && str[i] <= '9') {
    amount += str[i];
  }
}

console.log(" amount:", amount);



let word = "America";
let index = 3; 
let newWord = word.substring(0, index) + "z" + word.substring(index + 1);
console.log("Modified :", newWord);
