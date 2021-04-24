// function sum (a, b){
//    return a + b;
// }

var sum = function (a, b){  //anonimna funkcija
    return a + b;           //dodeljujemo je varijabli
}


var result = sum(3, 4);
console.log(result)



//kod koji nema neku poentiu ali je dobar primer

var a = 33;
var b = a + 12;

function test(b) {
    b++
    function example (num){
        return num + 100;
    }

    var result = example (b);


    return result;
}

var c = a + b;
var result = test(c)

console.log(result);


//anonimna funkcija
//samopozivajuca

(
    function () {
        console.log('test');
    }
) ()  // ovo govori "IZVRSI ODMAH"


//verz 2
(
    function (string) {
        console.log('test' + string);
    }
) ('123');  // ovo govori "IZVRSI ODMAH"

//ovo je druga sintaksa za samopozivajucu funkciju
(function () {
    console.log('test');
}());



//funkcija u funkciji
function outer (param) {
    function inner(theinput) {
        return theinput * 2;
    }
    return 'The result is ' + inner(param);
}

console.log(outer(22))


//funkcija koja vraca funkciju

function outer () {
    function inner() {
        console.log('teeeest');
    }
    return inner;
}

var func  = outer();
func();

outer()();


