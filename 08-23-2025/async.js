const getData = async()=>{
    let data = "Hello World";
    return data;
};
getData().then((data)=>console.log(data));

const getData1 = async()=>{
    let y = await "Hello World";
    console.log(y);
};
console.log(1);
getData1();
console.log(2);

const incrementDigits = async (num) =>{
    try{
        if(num<10){
            await incrementDigits(num);
        }else{
            return "done";
        }
    }catch(err){
        console.log(err);
    }
}

let promise = new Promise(function(resolve,reject){

})
async function asyncFunc() {
    try{
        let result
    }catch(e){

    }
}