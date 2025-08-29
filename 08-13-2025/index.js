const register = () =>{
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            console.log("Please register");
            res('Success');
        },3000);
    })
}
const login = () =>{
    setTimeout(()=>{
        console.log("Please Login");
    },1000);
}
register().then((data) => console.log(data));
login();

