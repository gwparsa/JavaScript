const price1 = 10;
const price2 = 11;
const price3 = 28;
const balance = 75;

const totalPrice = price1 + price2 + price3 * 2;
console.log("Total Price is: " + totalPrice);
const avgPrice = totalPrice / 4;
console.log("Average Price is: " + avgPrice);
const finalPrice = totalPrice * 0.95;
console.log("Final Price is: " + finalPrice);

const canBuy = balance >= finalPrice ? console.log("Nice! You've Enough Balance To Place This Order!") : console.log("What a Pitty! You Dont Have Enough Money!");
