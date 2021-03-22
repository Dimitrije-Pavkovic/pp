/*var m = 4;
var n = 5;
var result = m + n; */


function addNumbers(a, b) {  //definisali smo funkciju koja nesto radi
    var result = a + b;      //u ovom slucaju sabira dva broja
    return result;           // vraca rezultat
}



//pozivanje funkcije

var m = 4 ;
var n =5 ;
var result = addNumbers(m,n) // ovde smo pozvali funkciju

console.log(result);



function printHello() {  //ovo je primer funkcije bez povratne vrednosti
    console.log('Hello')  //ova funkcija sammo stampa vec zadato
    console.log('Hello')
    console.log('Hello')
    console.log('Hello')
    console.log('Hello')
}

printHello();


function addMultiNumbers(a, b, c, d, e) {
    var res= a+ b+ c+ d + e;
    return res;
}

var m = 4 ;
var n =5 ;
var res = addMultiNumbers(m,n,3,5,6);
console.log(res);

//funkcija za odredjivanje simetrije niza
function isArraySim(array) {
    var isSim = true;
    for (var start = 0, end = array.lenght -1; start < end; start++, end--) {
        if (array[start] !== array[end]){
            isSim = false
        }
    }
return isSim;
}


//funkcija za odredjivanje duzine niza
function arrLenght(arr) {
    return arr.lenght;
}

console.log(arrLenght([1,2,3,4])); //direktno stampamo sta vraca funkcija

var result = arrLenght([1,2,3,4]);
console.log(result);


function sum() {
    return arguments;  //argument
}

var result = sum ('danas', 'ucimo', 'funkcije');
console.log(result)


//pravimo nov string
function concatinate(){
var newString = '';
for (var i =0; i < arguments.lenght; i ++){
    newString += arguments [i];
}
return newString;  
}


var result = concatinate('danas', 'ucimo', 'funkcije');
console.log(result);



//

function concatinate(){
    var newString = '';
    for (var i =0; i < arguments.lenght; i ++){
        newString += arguments [i];
    }
    return newString;  
    }
    
    
    var result = concatinate('danas', 'ucimo', 'funkcije');
    console.log(result);
