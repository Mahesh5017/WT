// function creategreeting(lang){
//     return fn(lang);
// }

// function fn(lang){
//     if(lang=="eng"){
//         return eng();
//     }else if(lang=="hin"){
//         return hin();
//     }
// }
// function eng(){
//     console.log( "hello kmit");
// }
// function hin(){
//     console.log("namaste kmit");
// }
// creategreeting("eng")

function createGreeting(lang){
    if(lang=='eng'){
        return eng;
    }
    else{
        return hind;
    }
}

function eng(name){
    return `Hello,`+name;
}
function hind(name){
    return `Namaste, `+name;
}

const greetInEnglish=createGreeting("eng");


console.log(greetInEnglish("kmit"));

const greetInHindi=createGreeting("hind");

console.log(greetInHindi("kmit"));