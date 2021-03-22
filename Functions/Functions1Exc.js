//1.Write a program that calculates the maximum of two given numbers.

function max (a, b) {
    if (a > b){
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'numbers are equal';
    }
}

var result = max (10, 8);
console.log(result);



//2.Write a program that checks if a given number is odd.

function oddNumbers(a) {
    if(a % 2 == 0) {
        return 'The number ' + a +' is even';
    }
    else {
        return 'The number ' + a +' is odd';
    }
}

var result = oddNumbers(2);
console.log(result);


//3.Write a program that checks if a given number is a three digit long number.

function threeDig(n){
    var b = n + ''; //pretvaramo ga u string
    if  (b.length === 3){
        return 'number is three digit long';
    }
    else {
        return 'number is not three digit';
    }
}

var result = threeDig(234);
console.log(result);

//4.Write a program that calculates an arithmetic mean of four numbers

function arithMid (a,b,c,d,){
return (a+b+c+d)/4;
}

var result = arithMid (2,2,2,2);
console.log(result);


/*
5.
Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
*****
*    *
*    *
*    *
*****

*/

function draw (a) {
    var arr = '';
    for (var i = 1; i <=a; i++){
      arr  += '*' ;
    }
    for (var i = 1; i <=a; i++){
        arr  += '*' ;
      }
    return arr;
}

var result = draw (5);
console.log(result);

/*
6.Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *

*/


//7.Write a program that calculates a number of digits of a given number. 

// varijanta  sa sabiranjem brojeva
function sumDigits(n) {
    var sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
}
var result = sumDigits(849);
console.log(result);

//variojanta brojanja

function nrOfDigits (a){
    var b = a +'';
     var result = b.length;
     return result
}

var broj = nrOfDigits (5677);
console.log (broj);






// 8.Write a program that calculates a number 
// of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3


function NumberOfAppearance (arr, e) {
    var apper = 0;
    for (i=0; i<arr.length; i++){
    if (arr[i]===e){
apper ++;
    }
} return apper;
}

var result = NumberOfAppearance ([2, 4, 7, 8, 7, 7, 1], 7);
console.log(result);


// 9. Write a program that calculates the sum of odd elements of a given array. 

function calculatesOddNumbers (arr) {
    var sum = 0;
    for (i=0; i<arr.length; i++){
    if (arr[i] % 2 !== 0){
sum += arr [i];
    }
} return sum;
}

var result = calculatesOddNumbers ([2, 4, 7, 8, 7, 7, 1]);
console.log(result);

/*
 10.Write a program that calculates the number of appearances
of a letter a in a given string. 
Modify the program so it calculates the number of both letters a and A.
*/

function brojPonavljanjaElementa(a,b){
    var apperString = 0;
    var c = a;
    for (i = 0; i < c.length; i++){
    if (c[i]===b){
apperString ++;
    }
} return apperString;
}

var result = brojPonavljanjaElementa ('Sta radis bre', 'a');
console.log(result);


function brojPonavljanjaElementa(string){
    var apperString = 0;

    for (i = 0; i < string.length; i++){
        if (string[i]==='a' || string[i]==='A' ){  //broji i velika i mala slova
        apperString ++;
    }
} return apperString;
}

var result = brojPonavljanjaElementa ('Sta radis bre');
console.log(result);
