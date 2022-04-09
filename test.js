/* switch statement */
var colors = ['blue', 'red', 'green', 'yellow'];
var selectedColor = colors[1];
switch(selectedColor){
    case colors[0]: console.log("rang shoma: " + colors[0]); break;
    case colors[1]: console.log("rang shoma: " + colors[1]); break;
    case colors[2]: console.log("rang shoma: " + colors[2]); break;
    case colors[3]: console.log("rang shoma: " + colors[3]); break;
    default: console.log("Rang shoma dar in list nist !");
}
/**************/
/* && oprator */
var goodmood = true;
var gotsleep = true;

if(goodmood && gotsleep) {
  console.log("emrooz rooz khoobie ;)")
} else {
  console.log("emrooz halam khosh nist ;(")
}
/**************/
/* || oprator */
var goodmood = true;
var gotsleep = true;
var breakfast = false;

if(goodmood || gotsleep || breakfast) {
  console.log("emrooz rooz khoobie ;)")
} else {
  console.log("emrooz halam khosh nist ;(")
}
/**************/
console.time("salam o doroood o do sad bedrood");
