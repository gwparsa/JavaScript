const numbers = [5, 12, 8, 130, 44];

//1
const sortedDescending = numbers.slice().sort((a, b) => b - a);
console.log(sortedDescending);

//2
const underThirty = [];
for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < 30) {
    underThirty.push(numbers[i]);
  }
}
console.log(underThirty);

//3
let plusNumbers = 0;
for (i = 0; i < numbers.length; i++) {
  plusNumbers += numbers[i];
}
console.log("The sum of numbers: " + plusNumbers);

//4
const stringNumbers = [];
for (i = 0; i < numbers.length; i++) {
  stringNumbers.push(numbers[i].toString());
}
console.log(stringNumbers);

//5
const minusIndexes = [];
for (i = 0; i < numbers.length; i++) {
  minusIndexes.push(numbers[i] - numbers.indexOf(numbers[i]));
}
console.log(minusIndexes);
console.log("***********");
