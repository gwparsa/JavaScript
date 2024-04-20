// nam va nam khanvadegi ra az yek variable estekhraj va an ra dar jomle ii digar estefade konim. (ba estefade az template literals)

const name = "Parsa Sorsori";
const spaceIndex = name.indexOf(" ");
const fName = name.slice(0, spaceIndex);
const lName = name.slice(spaceIndex + 1);

const text = `Hello. My fisrt name is ${fName} and my last name is ${lName}.`;
console.log(text); // --> Hello. My fisrt name is Parsa and my last name is Sorsori.






//hala baad az yadgiri array ha in tamrin ra hal mikonim:

const name2 = "Parsa Sorsori";
const nameArray = name2.split(" ");

const text2 = `Hello. My fisrt name is ${nameArray[0]} and my last name is ${nameArray[1]}.`;
console.log(text2); // --> Hello. My fisrt name is Parsa and my last name is Sorsori.