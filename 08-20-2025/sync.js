let urls = [
    `https://api.github.com/users/iliakan`,
    `https://api.github.com/users/remy`,
    `https://no-such-url`
]

Promise.allSettled(urls.map(url=>fetch(url)))
.then(results=>{
    let cleanResults = results.map(r=>{
        if(r.status =="fulfilled"){
            return{
                status: r.status,
                value: {status: r.value.status, ok: r.value.ok}
            };
        }else{
            return{
                status:r.status,
                reasin: r.reason.message
            }
        }
    })
})

Promise.race([
    new Promise((resolve,reject)=> setTimeout(()=>resolve(1),1000)),
    new Promise((resolve,reject)=> setTimeout(()=>reject(new Error("Whoops!")),500)),
    new Promise((resolve,reject)=> setTimeout(()=>resolve(3),1000)),
]).then(alert);