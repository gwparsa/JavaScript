// arrayy zir ra destructure konid.

const data = [
    {
        identity: {
            name: "Parsa",
            lastName: "Sorsori",
            city: "Qazvin",
            age: 20,
        },
    },
    {
        skills: ["HTML", "CSS", "JS"]
    },
];

const [identity, skills] = data;
const {identity: {age, name, lastName, city}} = identity;
const {skills: [html, css, js]} = skills;
console.log(html, name, age); //--> HTML, Parsa, 20