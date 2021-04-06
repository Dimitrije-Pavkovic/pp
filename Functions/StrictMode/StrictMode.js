/*
*strict mode vs sloopy mode
*/

"use strict";

neverDeclared = 123; //Reference
var NaN = 123; // TypeError in the browser
var undefined = 123;
 

//Especialy is good to not get the Silent Failure

var global = 1;
function myFunc() {
   var local = 2;  
   global++;   //povecali smo globalnu varijablu za 1
   return global;
}

myFunc();
//console.log(local);
console.log(global);




var done = false;
while (done = false) {  //ovo je false i ovo se nikad nece desiti
    console.log('test')
}





var N =3;
for (var i = 1; i <= N; i++ ){
    var sum = 
}


console.log(N)



var f = 0, g = 1;

for (var i = 0; i <= 15; i++) {
    console.log(f);
    f = f + g;
    g = f - g;
}


var x = 5;
var y = 3;
var min = (x < y) ? x : y ;
//uslov ? radi  ako je uslov pozitivan : radi ako je uslov negativan;
console.log(min)



