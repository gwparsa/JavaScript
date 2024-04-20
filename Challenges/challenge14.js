//challenge 1: moshtari haii ba sen balatar az 60 sal va kamtar az 10 sal ra peyda konid.
//challenge 2: bayad full name moshtari hara besazim va posht anha Mr ya Mis ya Mrs ezafe konim.

const customers = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      gender: "M",
      married: true,
      age: 32,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      gender: "M",
      married: true,
      age: 64,
      expense: 100,
      purchased: ["Stick", "Blade"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      gender: "F",
      married: true,
      age: 22,
      expense: 1500,
      purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      gender: "M",
      married: true,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      gender: "F",
      married: false,
      age: 7,
      expense: 300,
      purchased: ["Toys"],
    },
];


//challenge 1 --> using filter method
const over60Customers = customers.filter(customer => customer.age >= 60);
const under10Customers = customers.filter(customer => customer.age <= 10);

//challenge 2 --> using map method
const newCustomers = customers.map(customer => {
    let title = "";
    if(customer.gender === "M"){
        title = "Mr.";
    }else if(customer.gender === "F" && customer.married){
        title = "Mrs.";
    }else{
        title = "Miss";
    }
    customer.fullName = `${title} ${customer.f_name} ${customer.l_name}`;
    return customer;
});
console.log(newCustomers);