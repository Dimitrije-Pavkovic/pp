/*Task 1. Write a conditional statement to find the sign of product of three numbers. Display the
result in the console with the specified sign.
*/
var a = 3;
var b = -7;
var c = 2;

if (a+b+c>=0){
console.log('The sign is +')

}else console.log('The sign is -')

/*Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the
console.*/


var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

if (a>=b && a>=c && a>=d && a>=e){
    console.log(a);
}
    else if (b >= a && b >= c && b>=d && b >=e){
    console.log(b);
}
         else if (c>=a && c>=b && c>=d && c>=e){
            console.log(c);
        }
            else if (d>=a && d>=c && d>=b && d>=e){
                console.log(d);
            }
                else if (e>=a && e >= c && e>=d && e>=b){
                    console.log(e);
                }


 /*Task 3. Write a conditional statement 
 to print three numbers as sorted number list.*/    
 
var a = 0;
var b = -1;
var c = 4;

if (a>b && a>c){
    if (b>c){
        console.log(a,b,c);
    } else {
        console.log(a,c,b);
    }
} else if (b>a && b>c){
    if (a>c) {
        console.log(b,a,c)
    } else {
        console.log(b,c,a)
    }

} else if (c>a && c>b) {
    if (a>b) {
        console.log(c,a,b);
    } else {
        console.log(c,b,a)
    }

}

/*Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is
divisible by 2. If it is, print the result, if not, show “X”*/

var a= 10;
var b= 7;
console.log(typeof a);

if (a%2===0){
console.log(a/2);
} else {
console.log('x');
}


if (b%2===0){
    console.log(b/2);
    } else {
    console.log('x');
    }
    
    
/*Task 5. Write a program that compares two numbers and displays the larger. Display the result in
the console.  */

var a = 2;
var b = 3;

if (a>b){
    console.log(a);
} else {
    console.log(b);
}

/*Task 6. Write a JavaScript program to convert temperatures
 to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 
[ where c = temperature in Celsius and f = temperature in Fahrenheit ]*/

var c = 60;
var fahrenheit = (9*c/5) + 32;
console.log("temperature in Celsius and f = temperature in Fahrenheit is: " + fahrenheit);


/*Task 7. Write a JavaScript program to get the difference
 between a given number and 13,
  if the number is greater than 13 
  return double difference between that number and 13.*/

  var a = 11;
  var b = 13;
 
  if (a>b){
    console.log((b-a)*2);
  } else {
console.log(b-a);
  }
  
/*Task 8. Write a JavaScript program to compute the sum 
of the two given integers. If the two
values are same, then returns triple their sum.*/

var a = 12;
var b = 5;

if (a===b){
    console.log((a+b)*3);
} else {
    console.log(a+b);
}


//primer 2.

var a = 8;
var b = 8;

if (a===b){
    console.log((a+b)*3);
} else {
    console.log(a+b);
}


/*Task 9. Write a JavaScript program to check two 
given numbers and print “true” if one of
the number is 50 or if their sum is 50.*/

//prvi primer

var a = 5;
var b = 54;

if (a===50 || b===50 || a+b===50){
    console.log(true)
}else {
    console.log('-')
}

//drugi primer

var a = 40;
var b = 10;

if (a===50 || b===50 || a+b===50){
    console.log(true)
}else {
    console.log('-')
}

/*Task 10. Write a JavaScript program to check 
a given integer is within 20 of 100 or 400,
and print range in which number belongs.*/

var a = 13;
if (a>20 && a100){
    console.log()
}



