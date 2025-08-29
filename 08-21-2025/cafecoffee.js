function ordercoffee(number){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(number > 70){
                resolve("Your coffee is ready!");
            }else{
                reject("Coffee machine is broken!");
            }
        },2000)
    })
}

ordercoffee(45).then(res => console.log(res)).catch(err=> console.log(err)).finally(() => console.log("Thanks for waiting!"))
ordercoffee(85).then(res => console.log(res)).catch(err=> console.log(err)).finally(() => console.log("Thanks for waiting!"))