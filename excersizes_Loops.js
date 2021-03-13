/*Write a program that will iterate 
from 0 to 10 and display squares of numbers.
*/

var n = 10;
var msg="";
var res= "0";
 
for(var x= 1; x<=n;x++)
{
res = x * x;
msg = msg + " " + x + " * "+ x + " = " + res + "\n";
}
console.log(msg);

/*Write a for loop that will iterate from 0 to 15. 
For each iteration, it will check if the current number is odd or even,
 and display a message to the screen.
*/


for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}

//Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 && x % 5 === 0)   //ako je deljiv sa tri ili deljiv sa pet
    {
       sum += x; //taj br se dodaje u sumu
    }
}
console.log(sum);

//Write a program to compute the sum and product of an array of integers

var arrayInt = [1, 2, 3, 4, 5, 6],
    sum = 0,
    product = 1,
    i;

for (i = 0; i < arrayInt.length; i += 1) 
   {
    sum += arrayInt[i];
    product *= arrayInt[i];
    }
console.log('Sum : '+sum + ' Product :  ' +product); 

// Write a program which prints the elements 
// of the following array as a single string.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var sum = "";
for (i=0; i<x.length; i++)
{
sum += x[i];
}
console.log(sum);


/*
Write a program that prints the elements of the following array.
*/

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];

    for (var i in a) {
        //console.log("row " + i);
        for (var j in a[i]){
            console.log(" " + a[i][j]);

        }
    }

    console.log(a);
    

//Write a program that outputs the sum of squares of the first 20 numbers.    

{ 
    var sum = 0; 
    for (var i = 1; i <= 20; i++) 
        sum += (i * i); 

    console.log(sum); 
} 

/*
Write a program that computes average marks of the following students.
 Then use this average to determine the corresponding grade. 

*/
 
var students = [['David' , 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var Avgmarks = 0;

for (var i = 0; i < students.length; i++){
    Avgmarks += students[i][1];
    var avg = (Avgmarks / students.length)
}

console.log ('Average grade is ' + avg);

if  (avg < 60) {
    console.log  ('Grade is F');
}
else if (avg <= 70) {
    console.log  ('Grade is D');
}
else if (avg <= 80) {
    console.log  ('Grade is C');
}
else if (avg <= 90) {
    console.log  ('Grade is B');
}
else if (avg <= 100) {
    console.log  ('Grade is A');
}

console.log('Eight task')

/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
 For numbers divisible by 3, print "Fizz" instead of the number,
  and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
  When you have that working,
   modify your program to print "FizzBuzz", 
   for numbers that are divisible by both 3 and 5 
   (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

   var x = 0;
for (var x = 0; x < 100; x++)
{
    if (x % 3 === 0 && x % 5 === 0)   
    {
       console.log("FizzBuzz"); 
    }
    else if (x % 3 === 0 && x % 5!==0 ) {
        console.log("Fizz")
    } 
    else if (x % 5 === 0 && x % 3!==0 ) {
        console.log("Buzz")
    }
     else {
         console.log(x);
     }


}

//Write a program that checks if a given element e is in the array a. 
//Input:  e = 3, a = [5, -4.2, 3, 7]
//Output: yes

var a = [5, -4.2, 3, 7];
var e = 3;
var result = '';

for (var i=0; i < a.length; i++) {
    if (a[i]===e){
    result = 'yes';
    break;
} else {
    result ='no';
    }
}
console.log(result);

/*
Write a program that multiplies every positive element 
of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

var array1 = [-3, 11, 5, 3.4, -8];
for (var i=0; i < array1.length; i++){
    if (array1[i] > 0) {
        array1[i]= array1[i] * 2;
    } else {
        array1[i];
    }
}

console.log(array1);

/*
Write a program that finds the minimum of a given array 
and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

var bb = [4, 2, 2, -1, 6];

var min = bb[0];  // izabrali smo element niza za poredjenje
for (var i=0; i < bb.length; i++){
if(bb[i] < min){
    min = bb[i]      //minimalna vrednost
    var arrIndex = i;  //index elementa
}
}
console.log("min element is " +min +", index is " +arrIndex )


/*
Write a program that finds the first element larger
 than minimum and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2
*/

var arr4 = [4, 2, 2, -1, 6];

for (var i=0; i< arr4.length-1; i++){
    for (var j=i+1; j < arr4.length; j++){
        if (arr4[i]>arr4[j]){   // ako je veci treba da zamene mesta
            var pom = arr4[i]; //pomocna dobija vecu vrednost
            arr4[i] = arr4[j]; // vrednosti zamene mesta
            arr4[j] = pom;  //veca vrednost postaje pomocna
          }
    }
    
}
console.log(arr4);
console.log(arr4[1]);


//Write a program that calculates the sum of positive elements in the array.
//Input array: [3, 11, -5, -3, 2]
//Output: 16
var sum = 0; //obavezno dati pocetnu vrednost
var arr88 = [3, 11, -5, -3, 2];
for (var i=0; i<arr88.length; i++){
 if (arr88[i]>0){
     sum += arr88[i];

 }
}
console.log(sum);


/*Write a program that checks if a given array is symmetric.
 An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.*/

var arr55 = [2, 4, -2, 7, -2, 4, 2];
var result ="";
for (var i=0; i< arr55.length / 2; i++) {
    if (arr55[i] !== arr55 [arr55.length -i -1] ){
        result = "The array is not symetric.";
  
    }
    else {
        result = "The array is symetric."
    }
}
    console.log(result);
    //console.log('zavrsen zadatak');

// Write a program that intertwines two arrays. 
// You can assume the arrays are of the same length.



