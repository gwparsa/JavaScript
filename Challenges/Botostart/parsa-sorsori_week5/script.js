// First assignment
const emails = [
  "gwparsa@gmail.com",
  "miladazami.yahoo.com",
  "abbas.akbari99@gmail.com",
  "hossein.gg@hotmail.com",
  "erfan_yusefi@gmail.com",
  "salar364@gmail.com"
];
const userNames = [];

for (i = 0; i < emails.length; i++) {
    if(!emails[i].includes("@")){
        userNames.push("ERR: Not an email"); //baraye inke age email eshtebah vared shod error bede.
    } else{
        userNames.push(emails[i].split("@")[0]);
    }
};
console.log(userNames);






// Second assignment
const phoneNumbers = [
  "+989393676765",
  "+989393456123",
  "+989393455465",
  "89393456722",
  "+989393456765",
];
const newPhoneNumbers = [];

for (i = 0; i < phoneNumbers.length; i++) {
    if(!phoneNumbers[i].includes("+98")){
        newPhoneNumbers.push("ERR: Not a phone number"); //baraye inke age number eshtebah vared shod error bede.
    } else{
        newPhoneNumbers.push(phoneNumbers[i].replace("+98", "0"));
    }
};
console.log(newPhoneNumbers);