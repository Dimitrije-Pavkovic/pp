

function test (){
var a = 2;
var b = 33;
var result = a + b;
console.log(result);
}


/*
var a = 2;
var b = 33;
var result = a + b;
console.log(result);
*/

test(); //pozvali smo funkciju i izvrsicemo ceo kod iz funkcije


//funkcija isto tako moze nesto i da vrati
function test1 (){
    var a = 2;
    var b = 33;
    var result = a + b;
    console.log(result);
    return b;
    }

    var funcionResult = test1();  // dodali smo vrednost funkcije (spakovali je) 
                                    //u varijablu funcionResult

    console.log(funcionResult)




    
var testic = function (a,b){
        return a + b;
        
        }   

 var result = testic(2,4) + 33;
 console.log(result);