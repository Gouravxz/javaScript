// details
let age = prompt("enter ypur age");
let movieType = prompt("enter type 3d or 2d");
let ticketCount = prompt("how many ticket you want");
let hasStudentCard = true;
let cashGiven = prompt("give cash");
let glassRent = 30;
let threeDprice = 300
let twoDprice = 200;
// age regitrications
if (age >= 18)
{
    console.log("you can watch");
}
else { console.log("you can't watch"); }
// movie price
if (movieType === "3D"){
console.log("price =", 300);
}
else if (movieType === "2D")
 { console.log("price =", 200);}
else { console.log("movie type =", "invalid");
}
// tota price if someone choose 3d type
total = threeDprice * ticketCount;
console.log("total =",total);
// add rent 30 glass rent
total +=30;
console.log("rent =", glassRent);
// find disount 
discount = total * 0.90;
console.log("discount 10% =", discount);
// paymrnt
cashGiven >= total;
change = cashGiven - total;
console.log("Final price =", discount);
console.log("Change =", change);
