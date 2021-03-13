//while loop petlja

var i = 0;

while (i<10) {
    console.log(i);
    i++; //povecava vrednost za jedan

    //do while petlja
    //radi minimum jednom
    //minimum jednom ce uci u petlju

   var e = 10;
    do {
        console.log(e);
        i++;
    }while (i<10);
}


//for loop

var punishment = '';
for (var i = 0; i<5;i++){
    punishment += 'I will never do this again\n';

}
console.log(punishment);



//nested for loop - PETLJA U PETLJI
var res = '\n';

for (var i = 0; i < 5; i++){
    for (var j = 0; j<5; j++){
        res += '*\t';

    }
    res += '\n';
}

console.log (res);



var arr = [1, -3, 5, -23]
var res = '';

for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0) {
        res += arr[i]
    }
}

console.log (res);


