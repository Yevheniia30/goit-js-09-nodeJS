"use strict";

var sayHello = function sayHello() {
  console.log("HelloJs");
};

var sayBye = function sayBye() {
  console.log("ByeJs");
};

module.exports = {
  sayHello: sayHello,
  sayBye: sayBye
};