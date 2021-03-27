var result = parseInt('333'); //pretvaramo string u number

console.log(typeof result);



var result1 = parseInt('nesto333'); //pretvaramo string u number, izvrsavanje se krece sa leva na desno
console.log( result1);



var result2 = parseInt('333nesto'); //pretvaramo string u number, izvrsavanje se krece sa leva na desno
console.log( result2);


//parseFloat

var result4 = parseFloat('nesto333'); //prima samo jedan parametar

console.log(result4);


var result = parseFloat('3e-2'); 
console.log(result);


var result = parseFloat('3.44');
if (typeof result === 'number' && !isNaN(result)) {
	console.log('suceeded')
} else {
	console.log('failed')
}



function isEven(number){
    return number % 2 ===0  //ova funkcija vraca true ili false
}

if (!isEven(33)){
    console.log('number is odd') //vraca false
}

console.log(NaN === NaN)   //edge case koji vraca false



result = 1e+400  //ne stane ovaj br i on je infinity

console.log(result)

console.log(isFinite(result))