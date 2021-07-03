class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.job = '';
    }

    setJob(newJob) {
        if (typeof newJob !== 'string') {
            throw new Error('Job title has to be string type')
        }
        this.job = newJob;
    }
    getJob () {
        return this.job;
    }
}

let person1 = new Person ('Zika', 23);

console.log(person1);


person1.setJob('Magacioner');

console.log(person1.getJob());



//second example

const sandwich = {
    bread: "italian",
    meat: "tuna",
    cheese: "swiss",
}

//let bread = sandwich.bread;

let { bread , meat  ,cheese } = sandwich;

console.log(cheese);



//third example

const person = {
    name: "Bosko",
    age: 36,
    adress: {
        street: 'Skadarska',
        number: 16,
        city: 'Novi Sad'
    },
}
//varijabli city dajemo vrednost podobjekta adress objekta city 
let city = person.adress.city

console.log(city)


//primer 4

let hobies = ["reading", "bungee jumping", "hiking"]

let [hobby1] = hobies; //gadjamo prvu vrednost

let [ , , hobby3] = hobies;

console.log(hobby1);

console.log(hobby3);


//primer 5

const person5 = {
    name: "Marko",
    age: 36,
    adress: {
        street: 'Skadarska',
        number: 16,
        city: 'Nis'
    },
}

function getPersonData (obj) {
    return `${obj.name} 's adress is: ${obj.adress.street}, ${obj.adress.number}.`
}

console.log(getPersonData(person5));

//example 6

const person6 = {
    name: "Milos",
    age: 23,
    adress: {
        street: 'Dusanova',
        number: 20,
        city: 'Kraljevo'
    },
}

function getPersonData1 ({name, age}, {street, number}) {
    return `
    ${name} is ${age} years old.
    ${name} 's address is: ${street}, ${number}
    `
}

console.log(getPersonData1(person6, person6.adress));