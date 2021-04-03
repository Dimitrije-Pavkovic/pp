


/* 
1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false
*/

function isString(a) {
    return typeof a === "string";
}

console.log(isString('3'));

/* 
2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false
*/
function isBlank(a) {
    if(a === "") {
        return true;
    }
    else {
        return false;
    }
}

console.log(isBlank("My random string"));
console.log(isBlank(""));
console.log(isBlank(12));
console.log(isBlank(false));

/* 
3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/
function concatenatesF(n, word) {  //n is number of times, word is word
    var conWord = "";               //defining string
    if (typeof word !== "string" || n < 1) {    //if word is not a string OR n is less then 1 then it shows error
        console.log("Error");
    }
    else {
        for (var i = 1; i <= n; i++) {
            conWord += word;    
        }
    }
    return conWord;
}
var word = "Ha";
var n = 6;

console.log(concatenatesF(n, word));

/*
4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
function charOccurrence(word, char) {  

    if (typeof word !== "string") {
        return false;
    }
    var res = 0;   //defining variable for counting
    for (var i = 0; i < word.length; i++)

        // checking character in string
        if (word[i] == char)
            res++;

    return 'Letter ' + char + ' occurres ' + res + ' times in  word ' + word;
}
console.log(charOccurrence("Dimitrije", "i"));

/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. 
*/
function charFirstOccurrence(word, char) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === char) {
            
            return i+1;
        }
    } 
 return -1;
}

console.log(charFirstOccurrence("hello", "l"));


//5.M


function firstOccurrence(string, a) {

    for (var i = 0; i < string.length; i++) {
        if (string[i] === a) {
            return i + 1;
        }
    }
    return -1;
}

var result = firstOccurrence("Character", "C");
console.log(result);


/* 
6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/
function charLastOccurrence(word, char) {

    if (typeof word !== "string") {
        return false;
    }
    var letterPosition = 0;  //variable for letter postion
    for (var i = word.length - 1; i >= 0; i--) {  //krenemo brojac od kraja
        if (word[i] === char) {
               letterPosition = i + 1;
            return letterPosition;

        }

    } return -1;

}

console.log(charLastOccurrence("Building", "m"));
console.log(charLastOccurrence("Building", "n"));

//6.m
function lastOccurrence(string, a) {
    for (var i = string.length - 1; i > 0; i--) {
        if (string[i] === a) {
            return i + 1;
        }
    }
    return -1;
}

var result = lastOccurrence("Character", "c");
console.log(result);

/* 
7. Write a function to convert string into an array. 
Space in a string should be represented as
"null" in new array.
""My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/

function stringToArray(string) {
    var newArr = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newArr[i] = null;
        } else {
            newArr[i] = string[i];
        }
    }
    return newArr;
}

var s= "My random string";
newArr = [stringToArray(s)];
console.log(newArr);



/* 
8. Write a function that accepts a number as a parameter and checks
 if the number is prime or not.
Note: A prime number (or a prime) is a natural number greater than 1
 that has no positive
divisors other than 1 and itself.
*/
function isPrimeNumber(number) {
    if (number <= 0) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(61));


//komplikovanije

function isPrimeNumber(n) {
    

        if (n===1)
        {
          return false;
        }
        else if(n === 2)
        {
          return true;
        }else
        {
          for(var x = 2; x < n; x++)
          {
            if(n % x === 0)
            {
              return false;
            }
          }
          return true;  
        }
      }

   console.log(isPrimeNumber(4));


   //jednostavno
   function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

/* 
9. Write a function that replaces spaces in a string with provided separator. 
If separator is notprovided, use "-" (dash)
 as the default separator.

"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string"  -> "My-random-string"
*/
function wordSeparator(string, separator) {
    var newSent = "";
    if (typeof separator === 'undefined') {
        separator = "-";
    }
    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newSent += separator;
        } else {
            newSent += string[i];
        }
    }
    return newSent;
}

console.log(wordSeparator("My random string", "_"));
console.log(wordSeparator("My random string", "+"));
console.log(wordSeparator("My random string"));
/* 
10. Write a function to get the first n characters and add "..." at the end of newly created string.
*/
function firstCarAdd(word, l) {
    var newWord = "";
    for (i = 0; i < l; i++) {
        newWord += word[i];
    } 
    newWord += "...";
    return newWord;
}
console.log(firstCarAdd("Dobar dan ", 2));

/* 
11. Write a function that converts an array of strings into an array of numbers.
Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
function convertsStringToNumbers(arr) {
    var newArr = [];
 
    for (var i = 0; i < arr.length; i++) {
    
var convert = parseFloat(arr[i]);

if (isFinite(convert)) {  //proverava da li je sve brojiev i da nisu undefined, NaN, uklanja nepotrebne
newArr[newArr.length] = convert;
}
}
    return newArr;
}
var array = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(convertsStringToNumbers(array));

/* 
12. Write a function to calculate how many years there are left until retirement based on the
year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
already retired, a proper message should be displayed.
*/
function retirement(years, sex) {
    var year = 2021;
    var res = year - years;
    var result = "";
    if (sex === "female") {
        if (res >= 60) {
            result = "You are retirement";
        }
        else if (res < 60) {
            result = "Some more " + (60 - res);
        }
        else {
            result = "Put a diferent years";
        }
    }
    else if (sex === "male") {
        if (res >= 65) {
            result = "You are retirement";
        }
        else if (res < 65) {
            result = "Some more " + (65 - res);
        }
        else {
            result = "Put a diferent years";
        }
    }
    else {
        return "Something is wrong ";
    }
    return result;
}
var b = 1960;
var s = "female";
console.log(retirement(b, s));

/* 
13. Write a function to humanize a number (formats a number to a human-readable string) with
the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/
function humanizeNumber(num) {
    if (typeof num == "undefined") {
        return;
    } else if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    }

    switch (num % 10) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
    }
    return num + "th";
}


console.log(humanizeNumber(301));
console.log(humanizeNumber(402));
