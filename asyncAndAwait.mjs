
import fetch from 'node-fetch';
console.log("welcome");
async function exp(){

    console.log("Entered in function");

    const response = await fetch('https://api.github.com/users');

    console.log('before response');

    const users = await response.json();

    console.log('after response');

    return users;
}


console.log("before function calling");
const a = exp();
console.log("After function calling");
console.log(a);
//a.then(users => console.log(users));
a.then(()=>{
    console.log(a);
})