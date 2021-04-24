//postoje dva nacina definisanja funkcija
//prvi nacin
function add(a, b){
    return a + b;
}

//drugi nacin
var add = function(a,b){
    return a + b
}

//isti je nacin pozivanja

var result = add(2,5);
console.log(result);

//pravimo novu funkciju
//koja ce da prima callback funkciju
// i vracace ono stro ta funkcija vrati + 10

var add = function(a,b){
    return a + b
}

function test(callback){
    return callback(2,4) + 10;
}

var result = test(add);
console.log(result);



//primer

function one(){
    return 1;
}

function two(){
    return 2;
}

function invokeAdd(a,b){
    return a() + b();
}

var result = invokeAdd(one,two); 
//u zagradi smo stavljali imena funkcije
console.log(result);


//primer sa anonimnim

function one(){ //nismo ni pozvali u ovom primeru
    return 1;
}

function two(){
    return 2;
}

function invokeAdd(a,b){
    return a() + b();  //nasi parametri trebaju biti funkcije
}

var result = invokeAdd(function(){return 5},two); 
//u zagradi smo stavljali imena funkcije,
//ali smo za prvi parametar koristili anonimnu funkciju
console.log(result);