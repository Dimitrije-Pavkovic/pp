var name= 'Dario';


name= 'Darko';

var surname = ' Stamenkovic'

var b=7;

var a=b*2;

var fullName= name + surname;

console.log(fullName,a);


var NumberOfLikes = 4;
NumberOfLikes = NumberOfLikes + 1;

console.log(NumberOfLikes);

// block>statemets>expressions


var name ='Dario';
 //string
var a = 3.14;
 //number

var b= 31%2

var a = 6;
var tip = typeof a;
console.log (typeof tip);

var nekiBroj = 12e+5;  //pomera decimalu udesno za taj br
console.log (nekiBroj);

var nekiBroj1 = 12e-5; //pomera decimalu u levo za taj br
console.log (nekiBroj1);

/*var max = 1e+309
console/log(max) */ //ovako dobijamo resultat infinity

var result = 1 + '12';  //ovde dolazi do konverzije
console.log(result);  //sve postaje string
// rezultat je 112

console.log(3=='3');

console.log(1<2<3);
console.log(3<2<1); //daje true (operatior associativity)

var s = '1s'; s++;
console.log(s); // rezultat je NaN

var f = 10% "0";  //NaN
console.log(f);

var k = undefined ==null; //true
console.log(k);

var p = false === "";
console.log(p);    //false

var f = typeof "2E+2";
console.log(f);    //string

var l = 3e+3;
console.log(l);    // 3000

var c = 22;

if (c>5) {
    console.log('cao')
}

