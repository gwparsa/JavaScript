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
];

const nowDate = new Date().getHours();
const firstId = users[0].firstName;
let welcomer = "";

if (nowDate < 12) {
  welcomer = `صبح بخیر ${firstId}ی عزیز`;
} else if (nowDate >= 12 && nowDate < 18) {
  welcomer = `عصر بخیر ${firstId}ی عزیز`;
} else {
  welcomer = `شب بخیر ${firstId}ی عزیز`;
}

console.log(welcomer);
