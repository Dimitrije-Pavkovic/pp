//immediate function
//anonymus function
(
    function () {
        console.log('I am calling myself !');
    }
 )();

//other way

 (
    function (mood) {
        console.log('Felling ' + mood + '!');
    }
 )('crazy');



 //we can write like this
 (function () {
    // ...
 }());


 //or like this

 (function () {
    // ...
 })();

 // immediate functions are best for initializations 
 // (because we can call them only once)
 // and (self-invoking) anonymous functions
 // is when you want to have some work done without creating extra global variables. 
 


 //immediate function can return the value

 var result = (function () {
    // something complex with
    // temporary local variables...
    // ...
    // return something;
 })();


 // inner (private) functions
// a function inside a function

function outer (param) {
	
    function inner (theinput) {
        return theinput * 2; 
    }
     
    return 'The result is ' + inner(param);
 }


 //this can also be written

 var outer = function (param) {
    var inner = function (theinput) {
        return theinput * 2;
    };
    return 'The result is ' + inner(param);
 };
 outer(2);
 // "The result is 4"
 outer(8);
 // "The result is 16"
 inner(2);
 // ReferenceError: inner is not defined
  


 //function returns a function

 function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
 }
 
 var bigA = a(); //calling a function
bigA();  // recieveing return value
a()(); // directly calling return function (getting both values)

 

 
 