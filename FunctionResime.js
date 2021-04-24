

function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

var result= myFunction(2,3);
console.log(result)



var result = true;

// Example 0

function subtract(first, second) {
   return first - second;
}

result = subtract(12, -10);
result = subtract(22, 2);

console.log(result);


// Example 1

'use strict';

myVar = "random";  //not defined

function addOne(num) {
   return num + 1;
}

var result = addOne(4);
console.log(result);


// Example 2

var global = 123;

var resetGlobal = function () {
   global = -1;
};

console.log(global);  //result is 123, we didnt call up a function


// Example 3

var global = 123;

var resetGlobal = function () {
   global = -1;
};

resetGlobal; //missing ()
console.log(global);


// Example 4

var global = 123;

var resetGlobal = function () {
   global = arguments[0] || -1;
};

resetGlobal(10);
console.log(global);

resetGlobal(0); //this is false value
console.log(global);


// Example 5

'use strict';

var result = square(10); //result would be undefined
console.log(result);

function square(num) {
   num *= num;  //return is missing
}


// Example 6

'use strict';

var result = square(10);
console.log(result);

function square(num) {
  return num *= num;
}

// Example 7

function toString(num) {
  result = num + '';
  return result;
}

console.log(result);


// Example 8

function toString(num) {  //we must 
  'use strict';
     result = num + '';
     return result;
  }
  
  toString();
  console.log(result);

  // Example 9

var output = toString(0.15);
console.log(output);

var toString = function (num) {
   var result = num + '';
   return result;
}


// Example 10

var toString = function (num) {
  var result = num + '';
  return result;
}

var output = toString(0.15);
console.log(output);


// Example 11

var toString = function (num) {
  num = num || '';
  var result = num + '';
  return result;
}

var output = toString;
console.log(output);


// Example 12

//'use strict';

var global = parseInt("1e2");

incrementGlobal = function () {
   global++;
};

incrementGlobal();

console.log(global);
console.log(typeof global);


// Example 13

function sum(num1, num2) {
  num1 = num1 || 0;  //nisu definisane i bice nula
  num2 = num2 || 0;   //nisu definisane i bice nula

  if (!num1 && !num2) { //nije definisano i nije definisano
      return -1;
  }

  return num1 + num2;
}

var sumNumbers = sum;
var result = sumNumbers();

console.log(result);


// Example 14

var x = 21;
var girl = function () {
   console.log(x);  //stampamo x koje jos nije deklarisano
   var x = 20;
};
girl();


// Example 15

function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
      return 2;
  }
}

test();












