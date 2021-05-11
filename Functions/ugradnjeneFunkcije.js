//dodavanje novog elementa na poslednjem mestu 

var someArray1 = [12,33,44];
someArray1.push(22); //ovo nije cista funkcija

console.log(someArray1)

someArray1.push(22, 33, 44);

console.log(someArray1)

var newLength= someArray1.push(22, 33, 44); //ova funkcija vraca duyinu niza nakog ugradnje novih clanova
console.log(newLength);

//pop
//brise poslednji clan


someArray2 = [12,33,44]

var deletedelement = someArray2.pop();
deletedelement = someArray2.pop();

console.log(deletedelement);
console.log(someArray2);


//unshift dodaje element na pocetak niza

var Arr1 = [12,33,44];

var nesto = Arr1.unshift(50); //nesto je u stvari duzin aniza
console.log(Arr1);
console.log(nesto)

//shift brise prvi clan

var Arr2 = [12,33,44];

var nestoJos = Arr2.shift(); //nestoJos je u stvari duzin aniza
console.log(Arr2);
console.log(nesto);

//indexOf proveravamo da li se neki element nalazi u nizu
//vraca prvi index prvog trazenog elementa

var someArr = [12, 33, 44];

var index = someArr.indexOf(33);
var index = someArr.indexOf(133); //kada elementa nema u nizu vratice -1

/*
if (index !== -1){
    //do something
}

*/
if (someArr.indexOf(33) !== -1){
    console.log('postoji');
}else{
    console.log('ne postoji')
}

console.log(index);


//include vraca true ili false
var  someArr = [12, 33, 44, 33]

if (someArr.includes(33)){
    console.log('postoji');
}else{
    console.log('ne postoji')
}

console.log(index);

//slice - secenje i kopiranje dela niza (od od)

//slice se takodje koristi za dubinko kopiranje niza

var  someArr = [12, 33, 44, 33, 333, 55]
var chopped = someArr.slice(2, 4) //nakon drugog clana preseci 
                                  //i nakog cetvrtog opet preseci 
                                  //i vrati unutar ove varijable

console.log(someArr);

//to String pretvara niz u string

var  someArr = [12, 33, 44, 33, 333, 55];
var string = someArr.toString();
console.log(string);


//join metoda od niza napravi string ali mozemo da joj zadamo i separator da odvoji clanove niza u stingu
var  someArr = [12, 33, 44, 33, 333, 55];
var string = someArr.join("-");
console.log(string);

//split od stringa pravi niz

var someString = "nesto, drugo, bla, bla , bla"
var arr = someString.split(",");
console.log(arr);

//map sa svakim clanom niza nesto uradimo
//map je cista funkcija
//originalni niz nije taknut
var  someArr = [12, 33, 44, 33, 333, 55];

var mappedArray = someArr.map(function(number){
    return number + 10; // sve clanove niza smo povecali za 10
    
})

console.log(someArr);
console.log(mappedArray);

