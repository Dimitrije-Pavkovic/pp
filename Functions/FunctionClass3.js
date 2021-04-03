///napisite funkciju koja sumira tri broja

function sum (num1, num2, num3) {
    return num1 + num2 +num3;
}
var result = sum(3,5,4);
console.log(result);

var result1 = sum(-3,5,4);
console.log(result1);



function sum(){

//mozemo da ocekujemo sve elemente koje damo i da ih pretvaramo u niz
return arguments  //vrati argumenete iz funkcije
}

var result = sum(3,5,4);
console.log(result);



function sum() {
    var sum1 = 0;
    for (var i = 0; i < arguments.length; i ++){  //pomocu arguments mozemo da ukucamo koliko god hocemo argumenata u input
    sum1 += arguments[i];
    }  //ako ostavimo funkciju bez return mona ce vratiti undefined
    return sum1;
}

var result3 = sum(3,5,4);
console.log(result3);



//proveri da li je paran
function isEven(num) {
    if (num % 2 === 0){  // da li je paran - ovaj uslov daje true ili false
    } else {
        return false;
    }
}


//kraca verzija bez else
//cim funkcija dobije return ona dalje vise ne izvodi kod
function isEven(num) {
    if (num % 2 === 0){  
        return true;
    } 
        return false;
}

//jos bolja (KRACA) verzija
function isEven(num) {
    return num % 2 === 0;
}


//proveriti da li se dati element nalazi u datom nizu

function isInArray (arr, el){  //treba da proverimo da li se nalazimo u nizu i da vrcatimo d li se nalazi ili se ne nalazi
    for (var i = 0; i <arr.length; i++){
        if (arr[i] === el){
            return true;
        }
    }
return false;
}

var result = [1,1,2,3,1,1,4];
var element = 1;
console.log()

//na koliko puta se ponavlja neki eleemnet u nizu

function countElInArr (arr, el){  //treba da proverimo da li se nalazimo u nizu i da vrcatimo d li se nalazi ili se ne nalazi
    var count = 0;
    for (var i = 0; i <arr.length; i++){
        if (arr[i] === el){
            count++;
        }
        console.log('trenutno i je: ' +i+ ' Trenutni count je: '+ count);
    }
return count;
}

var arr1 = [1,1,2,3,1,1,4];
var element1 = 1;
var result = countElInArr(arr1,element1)
console.log(result);




