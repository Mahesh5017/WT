let request = new Request("https://jsonplaceholder.typicode.com/posts/1",{
    method:"GET",
    headers: new Headers({
        "Content-type":"application/json"
    })
})

fetch(request)
.then(response=>response.json())
.then(data=>console.log(data))

let controller = new AbortController();

async function Fetchwithabort(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1",{
            signal: controller.signal
        });
        const reader = response.body.getReader();
        let decoder = new TextDecoder();
        let recieved = "";

        while(true){
            let {done,value} = await reader.read();
            if(done) break;

            recieved = decoder.decode(value,{stream:true});
            console.log("chunk recieved :",recieved.slice(0,100)+"...");
        }
    }catch(e){
        console.log("error:",e)
    }
}

Fetchwithabort();