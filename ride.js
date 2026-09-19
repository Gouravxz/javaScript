const user = prompt("enter your name");
const age = prompt("age");
isMember = true;
ridesCount = 5;
// prints
console.log("name =", user);
console.log("age =", age);
console.log("rides =", ridesCount);
// ride details
let distance = prompt("enter km");
let rideType = prompt("enter type auto,car,bike");
console.log("Distnace =", distance);
console.log("Type =", rideType);
// rate decide calcilator
let bikeRate =8;
let autoRate =12;
let carRate =20;
if (rideType === "bike")
{console.log("Rate =", bikeRate);}
else if (rideType === "auto")
{console.log("Rate =", autoRate);}
else if (rideType === "car")
{console.log("Rate =", carRate);}
else (console.log("invalid type ride"))
