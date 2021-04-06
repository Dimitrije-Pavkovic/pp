/*
2. Write a program to join all elements of the array
 into a string skipping elements that are
undefined, null, NaN or Infinity.
[NaN, 0, 15, false, -22, '', undefined, 47, null]
*/


var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function makingAString (array) {
var newString = "";

for (var i = 0; i < array.length; i++) {
    if( !isFinite(array[i]) || array[i] === undefined || array[i] === null){
    }
    else{
        newString += array[i];
    }
}
return newString;
}

console.log(makingAString(array));




