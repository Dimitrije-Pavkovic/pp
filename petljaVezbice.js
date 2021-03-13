//petlja se koristi kada hocemo da istu stvar uradimo vise puta

var a = 4;  //uproscen primer

a++
a++
console.log(a);


var array = [5, 33, 555, 66];  //uproscen primer
array[0]++  //povecavamo ciljani clan za jedan
array[0]++  //opet povecavamo ciljani clan za jedan
console.log(array[0]);

array[1]++  
array[1]++
console.log(array[1]);

array[2]++  
array[2]++
console.log(array[2]);

array[3]++  
array[3]++
console.log(array[3]); //ako bismo ovako morali da pisemo kod
//bio bi prenaporan i preobiman
//zato koristimo PETLJE !!!

//sve ovo prethodno moze se napisati ovako


//for petlja za uproscavanje petlja
var array = [5, 33, 555, 66];

for (var i = 0; i < array.length; i++){
array[i]++ ; 
array[i]++
console.log(array[i]);
}


//trenutno stanje brojaca

for (var i = 0; i < 5; i++){
    
    console.log('trenutno stanje brojaca ' + i);
    }


//Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;  //varijabla koja ce da cuva nulu

for (var i = 0; i < 1000; i++){
    //zelimo da proverimo da li je broj deljiv istovremeno sa 3 i sa 5
    //ako jeste taj broj dodamo sumi
    if (i % 3 === 0 && i % 5 === 0)   //ako je deljiv sa tri ili deljiv sa pet
    {
       sum += i; //taj br se dodaje u sumu
    }
}
console.log(sum);

//ovo mozemo proveriti popmocu manjeg uzorka

var sum2 = 0;
for (var j = 0; j < 48; j++){
    
    if (j % 3 === 0 && j % 5 === 0)   
    {
        console.log(j)
       sum2 += j; 
    }
}

//probica

var a = [
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27]
    ];

    for (var i in a) {
        //console.log("row " + i);
        for (var j in a[i]){
            console.log(" " + a[i][j]);

        }
    }

    var b = [];
    for ( var i = 0; i < a.length; i++){
            for (var j in a[i]){
                b[b.lenght]=a[i][j];
            }
    }
    console.log ("b=["+ b +"]");
    




    console.log(a);