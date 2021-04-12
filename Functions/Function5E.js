/* 
1.	Write a program that checks if a given element e is in the array a.
Input:  e = 3, a = [5, -4.2, 3, 7]
/*
1.Find the min and max element in the following array and switch their places. 
Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

*/

function min_max (arr){
    var min = arr[0];
    var max = arr[0];
    var indMin ;
    var indMax ;

    for (var i = 1; i < arr.length; i++ ){  //vec smo iskoristili pretpostavku da je na 0 mestu neki min ili maks pa cemo krenuti od 1
        if(arr[i] < min){
            min = arr[i]
            indMin = i;
        }
        if(arr[i] > max){
            max = arr[i]
            indMax = i;
        }
    }
    arr[indMax] = min;
    arr[indMin] = max;
    return arr;
}

console.log(min_max([ 3, 500, 12, 149, 53, 414, 1, 19 ]))


/*
Use the following array to make a new one by dividing its values by two and adding 5.
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

*/

function newArrDivAdd (arr) {
   
    for (var i = 0; i < arr.length; i++ ){
        if (arr[i] / 2 + 5 === 0){
             arr[i] = 20;
        }else{
            arr[i] = arr[i] / 2 + 5;
        }
    }
    return arr
}

console.log(newArrDivAdd([ 3, 500, -10, 149, 53, 414, 1, 19 ]))

/*
Initialize two arrays.
The first one should contain student names,
the second one the number of points for each student. 
Display students' names with their corresponding grade. 
Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

*/

function Exam (arr1, arr2){
        var result = "";
        for (var i = 0; i < arr1.length; i++){
            if(arr2[i] < 51){
                result += arr1[i] + ' acquired ' + arr2[i] + ' points and failed to complete the exam. /n'
            }


        }


}

//primer

function grades(arrName,arrpoints){
    var arrName;
    var arrpoints;
    var result='';
    for(i=0; i<arrName.length; i++){
        if(arrpoints[i]<51){
            result += arrName[i]+ " acquired " + arrpoints[i] + " points and failed to complete the exam.\n"
        }else if (arrpoints[i]<=60){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 6.\n"
        }else if (arrpoints[i]<=70){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 7.\n"
        }else if (arrpoints[i]<=80){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 8.\n"
        }else if (arrpoints[i]<=90){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 9.\n"
        }else if (arrpoints[i]<=100){
            result+= arrName[i]+ " acquired " + arrpoints[i] + " points and earned 10.\n"
        }
    }
    return result;

}
console.log(grades([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));



/*
(skip :))Sort a previously defined array.
 Place its sorted values into a new array whose values
  are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

*/

function newArr (arr4) {
    var newOne;
    for (var i = 0; i < arr4.length; i++){
        if(arr4[i]){

        }
    }

}


//jovanin primer
function sortArr(arrS) {
    var tempBox;                                                          //  2 5 1 4 7
    for (var i = 0; i < arrS.length; i++) {                               //  2 5 1 4 7   sortiramo niz rastuce od min-max
        for (var j = i + 1; j < arrS.length; j++) {                       //  1  rezultat posle prvog celog i
            if (arrS[i] > arrS[j]) {
                tempBox = arrS[i];
                arrS[i] = arrS[j];
                arrS[j] = tempBox;
            }
        }
    arrS[i] = arrS[i]*2
    }
    return arrS;
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


//jovanin primer obrnuto - od veceg ka manjem
function sortArr(arrS) {
    var tempBox;                                                          //  2 5 1 4 7
    for (var i = 0; i < arrS.length; i++) {                               //  2 5 1 4 7   sortiramo niz rastuce od min-max
        for (var j = i + 1; j < arrS.length; j++) {                       //  1  rezultat posle prvog celog i
            if (arrS[i] < arrS[j]) {
                tempBox = arrS[i];
                arrS[i] = arrS[j];
                arrS[j] = tempBox;
            }
        }

    }
    return arrS;
}
console.log(sortArr([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


/*

Write a program that uses a loop to add all the even numbers
from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum.
The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000

*/

function addSubst (number){
    var sumEven = 0;
    var sumOdd = 0 ;
    for(var i = 1; i <= number; i++){
        if(i % 2===0){
            sumEven += i;
        }else if (i <= number / 2) {
            sumOdd += i;
        }
    }
    return (sumEven - sumOdd) * 12.5;
}

console.log(addSubst(1000));

/*
Define a 10 element array.
 Take the first two letters from every string 
 (that has at least 2 letters) in the array and create a new string from them. 
 Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa
*/

function FirstLetters (niz) {
    var newString = "";
    for(var i = 0; i < niz.length ; i++){
            if(niz[i].length>=2 && typeof niz[i] === "string"){
                newString += niz[i][0]+niz[i][1]
            }
    }
    return newString
}

console.log(FirstLetters([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]))


/*
Write a program that takes a string
 and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB

*/

function Reverse (string){
    var revString = '';
    for (var i = string.length-1 ; i >= 0; i--) {  //brojac postavljen unazad
        revString += string[i];
    }
    return revString;
}

console.log(Reverse("Belgrade Institute of Technology"));


/*Write a program that displays all the combinations of two numbers between 1 and 7.
 Don't display two of the same numbers at the same time. 
 Display the number of possible combinations, as well. 
 (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
 */

 function combination (){
    var pomString = '';
    for (var i = 1; i <=7; i++){
        for (var j = 1; i <=7; i++){
            if(i !==j){
                pomString += '('+ i + ',' + j + ')'
            }
        } 
    }
    return pomString
 }

console.log(combination())



//resavamo zarez

function combination (){
    var pomString = '';
    for (var i = 1; i <=7; i++){
        for (var j = 1; i <=7; i++){
            if(i !==j){
                pomString += '('+ i + ',' + j + ')'
            }
        }
        
    }
    return pomString
 }

console.log(combination())


/**Write a program that checks if the entered number is a prime number (i.e. divisible only
by 1 and by itself).
Input: 17 | 15
Output: true | false */

function primeNum(num){
    for (i=2; i<num/2; i++){
        if(num%i===0){
            return false;
        }  
    }
    return true;
}
result=primeNum(15);
console.log(result);


/*
11.Check if a given string is a palindrome
(spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true
*/

function checkPalindrom(palindrom){
    
}

    






