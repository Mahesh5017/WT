let arr=[]
let n;
n=prompt("enter the size")
let max= 0;
for(let i=0;i<n;i++){
    arr[i]=prompt()
}

for(let i=0;i<n;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(arr)
console.log("max element is"+max);