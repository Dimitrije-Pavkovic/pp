var arr = [2, 4, 7, 11, -2, 1];

var createDuplicateElementOfArray = function (item, index, array) {
    return [item, item];
}

var newArr = arr.map(createDuplicateElementOfArray).reduce(function(acumulator, currentValue, currentIndex, array) {

    return acumulator.concat(currentValue);

});

console.log(newArr);

/*
1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
*/

//ja
var arr1 = [2, 4, 7, 11, -2, 1];
var arr2=arr1.reduce() 
console.log(arr2);

/*
2.Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] 
*/

var chars = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

//var newChars = new Set(chars.sort(function(a, b){return a - b}));
var newChars = chars.sort(function(a, b){return a - b});
var newChars = [...new Set(newChars)];

//console.log(chars.sort(function(a, b){return a - b}));
console.log(newChars);

//resenje 2.a

var chars = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var newChars = [...new Set(chars.sort(function(a, b){return a - b}))];

console.log(newChars);

//resenje 3.a



/*3a.
Write a function that checks if a given array
has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true
*/

