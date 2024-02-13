let user = "Dawson"; //global scope - global variable
const PERCENTAGE = 0.05;

function showUser()
{
    let user = "Reynolds"; //local scope - local variable
    console.log("In showUser - local scope");
    console.log(user);
}

console.log("Global scope");
console.log(user); //print the global variable user
showUser();