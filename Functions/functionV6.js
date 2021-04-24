//Write a function to count vowels in 
//a provided string. 
//Vowels are a, e, i, o, 
//and u as well as A, E, I, O, and U. 


'use strict'
function vowels (a){
var count = 0;

for (var i=0; i<a.length; i++){
    if (a[i]==='a'||a[i]==='e'||a[i]==='i'||a[i]==='o'||a[i]==='u'
    ||a[i]==='A'||a[i]==='E'||a[i]==='I'||a[i]==='O'||a[i]===''){
        count++;
    } 
}
return count;
}
var result= vowels('Dimitrije pAVKOVIC');
console.log(result);
