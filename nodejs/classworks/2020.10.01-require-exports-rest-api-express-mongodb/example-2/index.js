const users = require("./users");
// console.log(users)
// console.log(users.admins)
// console.log(users.managers);

const currentDate = require("./currentDate");
// console.log(currentDate)

const currentMonth = require("./getMonth")();
// console.log(currentMonth)

const [firstPeople, ...rest] = require("./people");
console.log(firstPeople)
console.log(rest)