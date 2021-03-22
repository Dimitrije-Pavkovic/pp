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

//prepritanje nizova

var arr1 =[4, 5, 6, 2];
var arr2 =[3, 8, 11, 9];

var arrResult = []; //nov niz u koji cemo graditi preplitanje

for (var i = 0; i < arr1.length; i++)
{
arrResult[arrResult.length] = arr1[i]; //na poslednje mesto dodajemo clan iz arr1
arrResult[arrResult.length] = arr2[i]; //na poslednje mesto dodajemo clan iz arr2
}

console.log(arrResult);


//druga varijanta
// Write a program that intertwines two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
var arr1 = [4, 5, 6, 2]
var arr2 = [3, 8, 11, 9, 3]
var maxlength = arr1.length > arr2.length ? arr1.length : arr2.length
var arrResult = []
for (var i = 0; i < maxlength; i++) {
	if (arr1[i]) {
		arrResult[arrResult.length] = arr1[i];
	}
	if (arr2[i]) {
		arrResult[arrResult.length] = arr2[i];
	}
}
console.log(arrResult);



//spoji dva niza u jedan
var arrA = [4, 5, 6, 2]
var arrB = [3, 8, 11, 9]

var aRes = [];

for (var i =0; i < arrA.length; i++) {    //prvo iz jednog niza prepisujemo niz
    aRes[aRes.length] = arrA[i];
}
for (var i =0; i < arrB.length; i++) {    //onda iz drugog niza prepisujemo niz
    aRes[aRes.length] = arrB[i];
}

console.log(aRes);


/*Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

var e=78;
var p=3;
var a=[2, -2, 33, 12, 5, 8];
if(p<a.length && p>=0){

	for(j=a.length; j>p; j--){
		a[j]=a[j-1];
	}//for closed

}else{
console.log("error");
}//if cosed
a[p]=e;
console.log(a);



var a=[4, 5, 6, 2];
var b=[3, 8, 11, 9];
var c=[];
for(i=0; i<a.length; i++){
    c[i]=a[i];
    c[i+a.length]=b[i];
}
console.log(c)

