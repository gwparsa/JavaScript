// caracter aval yek jomle ra be soorat uppercase dar biavarim.

const text = "hi i'm parsa.";
const firstChar = text.charAt(0).toUpperCase();
const finalText = text.replace(text.charAt(0), firstChar);

console.log(finalText); //--> Hi i'm parsa.