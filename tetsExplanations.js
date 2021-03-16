var result = 2 > 10 ? 'two' : 5 > 3 ? 'five' : 'three';
console.log(result);
//a sada duza varijanta

if (2 > 10) {
    result = 'two';
} else {
    if (5 > 3){
        result = 'five';
    } else {
        result = 'three';
    }
}

console.log(result);


if (2 > 10) {
    result = 'two';
} else if (5 > 3) {
    result = 'five';
} else {
    result = 'three';
}


console.log(result);

//proveriti da li je niz simetrican

var arr = [22, 4, 5, 5, 4, 22]
var isSym = true; //krecemo iz predpostavke da jeste simetrican

for (var start = 0, end = arr.length - 1; start < end; start++, end--){
    if(arr[start] !== arr[end]) {  //uslov nije jednako
        isSym = false;
    }
}

console.log(isSym ? 'niz jeste simetrican' : 'niz nije simetrican');


//kako da automatski dodamo novu vrednost na poslednje mesto niza

var arr = [22, 2, 5, 55, 5, 4, 22, 33, 444];

arr[arr.length] = 44;  //dodali smo vrednost 44 na kraj niza
console.log(arr);


//ubacivanje clana (e) na odredjeno (p) mesto
var arr = [22, 2, 5, 55, 5];
var e = 78;
var p = 3; //nov br
var newArray = []; // nov niz koji je trenutno prazan

for (var i = 0; i < arr.length; i++){
    if (i === p) { //da li je index jednak sa i
newArray[p] = e;
    }
    newArray[newArray.length] = arr[i]; //bildujemo novi niz i dodajemo element na poslednje mesto
}

console.log(newArray);
