//Variable declaration and initialization

var Js=2;
var js=2;
//var 2broj=88; ovo nije moguce
console.log (Js);
console.log (js);

var mood = 'Osecam se pospano';
console.log (mood);


//Arithmetic operators

/*Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
Why do we get these results?*/

var a=3;
var b=4
var c=b*a;
var n=a*b-c;
var result= 4/2-1.14*3;
console.log (c);
console.log (n);
console.log (result);

//How many grams weight 1.2kg of bananas?

var g=1;
var kg=g*1000;
var a=1.2*kg;
console.log(a);

//How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
//about Tom who is being late half an hour? It is hard to be on time these days…

var s = 1;
var m = 60*s;
var a = 5*m;
console.log(a);
var t = 30*m;
console.log(t);

//How many MB of additional memory we have if we buy a 4GB USB stick? How many news
//articles each in size 98KB can fit in it?
var giga= 4
var memorijaKB = giga * 1000000;
var dokument = 98;
var brDokumenata = memorijaKB / dokument;  
var ostatak = brDokumenata % dokument;  
// var broj= (memorijaKB - ostatak) / dokument  
console.log(brDokumenata - ostatak );

//9.Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?


var a=2;
console.log (a*= 2);

var b=2;
console.log (b+= 3);

var c=10;
console.log (c/= 5);

var k=10;
console.log (k-= 7);


/*10. 10. Create the following variables:
- a variable containing your name,
- a variable containing your age,
- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types. */

var name = 'Dimitrije';
console.log ( 'My name is '+ name);

var age = 39;
console.log ('I am '+ age + ' years old.');


console.log (typeof name);
console.log (typeof age);

var kiti = 'cat';
result= !kiti;
console.log('I have a ' + kiti);
console.log(result);

console.log (typeof result);



/*11. Check which type are these values:
- “number”
- true
- null
- “false”
- 56           
*/


var n= "number";
var l= true;
var m= null;
var i= 'false';
var d= 56;

console.log (typeof n);
console.log (typeof l);
console.log (typeof mt);
console.log (typeof i);
console.log (typeof d);


/*Logical operators
12. Check how good you are at guessing the Boolean equivalent of different values using the
console. 
Do you remember how to check for a Boolean equivalent of a value?*/


var a = 33;
var b = '';
var c = null;
var d = undefined;
var f = 0;

console.log(!!a);
console.log(!!b);
console.log(!!c);
console.log(!!d);
console.log(!!f);


/*13. Use the console to check the results 
you think should go in the following table:
*/


console.log(true&&true);
console.log(true||true);

/*14. If the variable age stores the information about user’s age, how we can check whether it
contains a correct value? Write expressions for checking:
● Is age negative value
● Is age greater than 120*/

var age = 30;
var result = age === 30;
console.log(result);

/*15. Let’s say there are speed limitations on a motorway
 from 60 to 120 kilometers per hour.
  If we store the current speed value in the variable speed.
   Write an expression which will check if
we are driving drive safely or not? 
(true if we are driving safe and false if not)*/

var a=80
var safely = a<120&&a>60;
var not = a>120&&a<60;
console.log(not);
console.log(safely);









