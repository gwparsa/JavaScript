//sen yek shakhas ra be soorat rooz hesab konim.
const determineAge = (birthDate)=>{
    const birthDateMS = new Date(birthDate).getTime();
    const now = new Date().getTime();
    const ageMS = now - birthDateMS;
    const oneDay = 24*60*60*1000; //86400000ms in one day
    return Math.trunc(ageMS / oneDay);
}

console.log(determineAge("8/22/2004") + " Days"); // 7200 Days