//ovo je primer jednog objekta
var user = {  
    name: 'Jovana',
    surname: 'Obradovic',
    age: 22,
    occupation: 'Inzenjer geodezije'
}

//primer objekta u objektu
var book = {  
    author: {bookname:'Jovana', surname: 'Jovanic'},
    name: 'Orlovi Rano lete',
    izdanje: 22,
    occupation: 'Inzenjer geodezije'
}

//objekat  (nije lose stavljati zapetu i nakon poslednjeg, ali zavisi od firme)
var hero = {
    name: 'Leonardo',
    kind: 'Turtle',
    occupation: 'Ninja',
    saveLife: function(){  //primer akcije
        console.log('saving lives');
    }
};

//niz

var niz = [
    'hvgkbkjkljgbkj',
    'fdgdfgdfgdgdf',
    'hvgkfdgdfgbkj',
    'hvgkbxcbxgbkj',
    'hvgkbvbbbbbgbkj',
    'hvgkbkjxbxcxcgbkj',
    'hvgkbkjkljgbkj',
]

//novi niz mozemo napraviti na dva nacina
var newArr = [];
var arr = new Array();



var dog = {
    name: 'Rex',
    talk: function () {
       console.log('Wolf Wolf');
    },
}

var dogName = dog.name;
console.log(dogName);
dog.talk();  //pozivanje funkcije(akcije) iz objekta


var newObject = {}
console.log(newObject.someProperty) //dobicemo undefined jer smo hteli da pristupimo propertiju koji ne postoji
newObject.someProperty = 33; //ovde smo ga napravili
console.log(newObject.someProperty)
console.log(newObject); // stampamo ceo objekat i dobijamo { someProperty: 33 }
delete newObject.someProperty; //brisanje propertija
console.log(newObject.someProperty); //opet je prazan i undefined