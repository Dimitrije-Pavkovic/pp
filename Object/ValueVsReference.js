var someArray = [1,2,3,4];
var someOtherArray = someArray;  //ovim smo dali da i jedan i drugi niz koriste isti niz tj isto mesto u memoriji

someOtherArray[4]=5;

console.log(someArray);
console.log(someOtherArray); //povecace se i jedan i drugi niz jer se gledaju vrednosti po referenci !!!!

var a = [1,2,3];
var b = [1,2,3];
console.log(a === b); //dobicemo false 
//jer iako izgledaju skroz isto razlikuju se po referenci

var a = [1,2,3];
var b = a;
console.log(a === b); //dobicemo true
//koriste istu referencu



