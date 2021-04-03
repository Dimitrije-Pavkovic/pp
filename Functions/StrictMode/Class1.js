var nesto = 'neki string';  


function square(num){
    return num * num;
}


var nestoDrugo = 6 + 6 + square(square(2));  //tri expression-a

console.log(nestoDrugo);

var isTrue = 2>3 || 33 === 333;

loop1:  //ovo je primer label-a
for (let i = 0; i < 5; i++){
    for (let j = 0;j < 3;j++){
        if (i === 1 && j === 1){
            continue loop1;
        }
        console.log('i je: '+ i +' j je: ' + j)
    }
}


