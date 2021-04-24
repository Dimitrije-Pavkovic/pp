// Example 1

var global = 0;

function myFunc() {
   var local = 2;
   global++;
   return global;
}


console.log(myFunc());
//we get global value uvecano za 1

// Example 2
var done = false;
while (done = false) {  //true value
   // code
}


// Example 3
for (var i = 1; i <= 5; i++) {
    var sum = 0;
    sum = sum + i;
 }
 
 console.log(sum);
 



