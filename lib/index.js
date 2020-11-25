"use strict";

var message = "node is cool";
console.log(message);

var validator = require("validator");

var lodash = require("lodash.throttle");

var file = require("./file");

console.log("hello");

var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log("Is mango@mail.com a valid email?: ", validateEmail("mango@mail.com"));
console.log("Is Mangozedog.com a valid email?: ", validateEmail("Mangozedog.com"));