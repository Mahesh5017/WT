let arr=[12,5,8,130,44];
for (let index = 0; index < arr.length; index++) {
    if(arr[index]>10){
        console.log("first number greater than 10 :"+arr[index]);
        break;
    }
}
let arr1=[];
for (let index = 0; index < arr.length; index++) {
    if(arr[index]>10){
        arr1.push(arr[index]);
    }
}
console.log(arr1);

let even=true;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]%2!=0){
        even=false;
        break;
    }
}
if(even){
    console.log("All the elemenst are even");
}else{
    console.log("All the elements are not even")
}
