
/*
Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *

*/

function makeSquare(n) {
    var result = ''; //varijabla u koju cemo cuvati rezultat
    var space = ' ';
    var star = '*';
    var newLine = '\n'  //nov red

for (var i = 0; i < n; i++){
    for (var j = 0; j < n; j++){
        if (i === 0 || i === n-1 || j === 0 || j === n-1){
            result += star;
        }
        else{
            result += space;
        }
    }
    result +=newLine;
}

return result;

}

console.log(makeSquare(7));


//6. zadatak

function makeChart () {
    var result = '';  //varijabla koja cuva rezultat

    for (var i = 0; i < arguments.length; i++){  //vrti petlju dok god je i manje od argument.niza 
        for (var j = 0; j < arguments[i]; j++){   //arguments[i] od broja koji smo uneli
            result += '*';
        }
        result += '\n';
    }

    return result;
}

console.log(makeChart(6,7,2));