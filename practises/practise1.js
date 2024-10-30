const users = [
  {
    userId: 3123,
    firstName: "پارسا",
    lastName: "سورسوری",
    email: "gwparsa@gmail.com",
    isVerified: true,
    coins: 10302,
  },
  {
    userId: 1922,
    firstName: "Parsa",
    lastName: "Sorsori",
    email: "parsaaa888@gmail.com",
    isVerified: false,
    coins: 9000,
  },
  {
    userId: 1923,
    firstName: "Parsa",
    lastName: "Sorsori",
    email: "parsaaa888@gmail.com",
    isVerified: true,
    coins: 1348,
  },
  {
    userId: 1934,
    firstName: "Parsa",
    lastName: "Sorsori",
    email: "parsaaa888@gmail.com",
    isVerified: false,
    coins: 6000,
  },
  {
    userId: 2035,
    firstName: "Parsa",
    lastName: "Sorsori",
    email: "parsaaa888@gmail.com",
    isVerified: true,
    coins: 7050,
  },
  {
    userId: 2635,
    firstName: "Parsa",
    lastName: "Sorsori",
    email: "parsaaa888@gmail.com",
    isVerified: false,
    coins: 7067,
  },
];

const nowDate = new Date().getHours();
const firstId = users[0].firstName;
let welcomer = "";

if (nowDate < 12) {
  welcomer = `صبح بخیر ${firstId}ی عزیز`;
} else if (nowDate >= 12 && nowDate < 18) {
  welcomer = `ظهر‌ بخیر ${firstId}ی عزیز`;
} else {
  welcomer = `شب بخیر ${firstId}ی عزیز`;
}

console.log(welcomer);

const Counter = () => {
  let coinCount = 0;
  let verifyCount = 0;
  let userCount = users.length; // for counting users
  for(i = 0; i < users.length; i++) {
    if(users[i].isVerified === true) verifyCount++; // for counting verified users
    coinCount += users[i].coins; // for counting total coins
  };
  console.log("Total Users: " + userCount + "\n" + "Verified Users: " + verifyCount + "\n" + "Total Coins: " + coinCount);
};
Counter();

