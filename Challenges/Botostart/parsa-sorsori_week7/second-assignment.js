
function getWeekday(date) {
    switch(date.getDay()){
        case 0: return "Sunday"; break;
        case 1: return "Monday"; break;
        case 2: return "Tuesday"; break;
        case 3: return "Wednesday"; break;
        case 4: return "Thursday"; break;
        case 5: return "Friday"; break;
        case 6: return "Saturday"; break;
        default: return "Wrong Input!";
    };
};



console.log(getWeekday(new Date("6 may 2025")));
console.log(getWeekday(new Date('2012-10-10')));
console.log("***********");