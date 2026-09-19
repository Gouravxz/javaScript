const user = prompt("enter your name");
const age = prompt("age");
isMember = true;
let ridesCount = 2;
// prints
console.log("name =", user);
console.log("age =", age);
console.log("rides =", ridesCount);
// ride details
let distance = 10;
let ridesType = prompt("enter type auto,car,bike");
console.log("Distnace =", distance);
console.log("Type =", ridesType);
// rate decide calcilator
let bikeRate =8;
let autoRate =12;
let carRate =20;
if (ridesType === "bike")
{console.log("Rate =", bikeRate);}
else if (ridesType === "auto")
{console.log("Rate =", autoRate);}
else if (ridesType === "car")
{console.log("Rate =", carRate);}
else (console.log("invalid type rides"))
// now bikw calcu
totalBike = bikeRate * distance;
totalAuto = autoRate * distance;
totalCar = carRate * distance;
// fare
if (ridesType === "bike")
{
    console.log("fare =", totalBike)
}
else if (ridesType === "auto")
{
    consoel.log("fare =", totalAuto)
}
else  if (ridesType === "car")
{
    console.log("fare =", totalCar)
}
// rides calcilation 
fareBike = totalBike * ridesCount;
fareAuto = totalAuto * ridesCount;
fareCar = totalCar * ridesCount;
if (ridesType === "bike")
{
    console.log("fare =", fareBike)
}
else if (ridesType === "auto")
{
    consoel.log("fare =", fareAuto)
}
else  if (ridesType === "car")
{
    console.log("fare =", fareCar)
}
 let surhcharge = 50;
 if (distance > 20)
 {console.log("fare =", fareBike + surhcharge ,fareAuto + surhcharge, fareCar + surhcharge)}
