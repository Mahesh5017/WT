const users = [
    {id:1,name:"john"},
    {id:2,name:"pete"},
    {id:3,name:"visshal"}
];
let user = users.find(item=>item.id==1)
console.log(user.name)