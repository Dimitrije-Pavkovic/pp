var mixedArray = [3, true, 4, 6, "neki string",  80, null] //svi tipovi su dozvoljeni
                                     //ali ovo ce se retko kad ovako koristiti
var brojevi = [3, 6, 80];

console.log(mixedArray);
console.log(mixedArray[3]);

var string = mixedArray[3];
console.log(string);
console.log(mixedArray);


var multiDimArr = [[1,3,5], 8, [2,5,6],[3,"string",null]];

var b = multiDimArr[3][1]; //gadjamo "string"

console.log(b);

console.log(multiDimArr.length); //duzina niza
console.log(multiDimArr[0].length); //duzina odredjenog niza

//poslednji clan niza ima duyinu uvek za jedan manji od cele duzine niza

var c = [3, 55, 78];

c[1] = "something"; // promenili smo vrednost na indexu 1
console.log(c);

c[10] = 100; // ovako dobijamo rupu u nizu
console.log(c); // ispisace nam se i u konzoli da imamo prazna mesta


c = "something else";  // string se ponasa poput niza
var bla = c[1] + c[5] + c[8];  // i mozemo doci do clanova stringa na slican nacin
                                // ali string nije niz !!!
console.log(bla);

console.log(typeof multiDimArr); //ovo nam pokazuje da se nizovi u js gledaju kao objekti







