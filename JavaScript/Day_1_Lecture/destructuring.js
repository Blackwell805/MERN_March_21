var myObj = {
    firstname: "Cody",
    userName: "coolteacherguy",
    age: 30,
    email: "sthaller@codingdojo.com",
    password: "dogzrc00l",
    confirmPw: "dogzrc00l",
    ccn: "1234123412341234",
    superlongfieldnamethatineededtousebecausereason: 1
}

// var name = "Cody";
// var email = "sthaller@codingdojo.com";

var { firstname, email } = myObj;

// this is the same as
// var firstname = myObj.firstname;
// var email = myObj.email;

// console.log(firstname);


var toReturn = { firstname, email }
// console.log(toReturn);

// SPREAD OPERATOR
var { password, confirmPw, ccn, ...restOfUser } = myObj;

// console.log(restOfUser);



var userName = "lakjsdflkjasd";
var { userName: uname } = myObj;
console.log(userName);
console.log(uname);
// console.log(userName);


var { superlongfieldnamethatineededtousebecausereason: longfield } = myObj;

// console.log(longfield);

// var nums = [1,2,3,4,5];

// var [,,third,,] = nums;
// console.log(third);

var y = 10;
var z = 15;

[y, z] = [z, y]