//yek adad kamel va random khorooji begirim ke bein yek min va max khas be ma adad dahad (ba function ha).

const generateRandom = (min, max) => {
    if (!min && !max) return 0; //agar adadi vared nakonad 0 return mikonim.
    if (!max) { //agar faghad yek voroodi dashte bashad, az 0 ta an adad ra min va max migirim.
        max = min;
        min = 0;
    }
    const randomNum = min + Math.floor(Math.random() * (max - min + 1));
    return randomNum;
}

console.log(generateRandom(10, 100)); //--> 34 //--> 56
console.log(generateRandom(30)); //--> 29 //--> 18