const message = "node is cool";
console.log(message);

const validator = require("validator");
const lodash = require("lodash.throttle");
const file = require("./file");
console.log("hello");

const validateEmail = (email) => {
  return validator.isEmail(email);
};

console.log(
  "Is mango@mail.com a valid email?: ",
  validateEmail("mango@mail.com")
);

console.log(
  "Is Mangozedog.com a valid email?: ",
  validateEmail("Mangozedog.com")
);
