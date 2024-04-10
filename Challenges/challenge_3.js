// mikhaiim 3 ragham vasat yek shomare telephon ra sansor konim. ex: 0936***0083

const phoneNumber = "09363610083";
const replaceNumber = phoneNumber.slice(4, 7);
const finalNumber = phoneNumber.replace(replaceNumber, "***");

console.log(finalNumber); //--> 0936***0083