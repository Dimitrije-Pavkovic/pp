"use strict";

(function() {

    console.log('hi');

    function Person(name, surname){
    if (!name || !surname){
        throw new Error('Fields name and surname are required')
    }

    this.name = name;
    this.surname = surname;
    }

    function Seat(number, category){
        if (!number || !category){

        
    }
if (!['e','b'].includes(category) ) {
    throw new Error('Invalid category input')
}
    this.number = number;
    this.category = this.category;
}

function Passenger (person, seat){
    if(!person || !(person instanceof Person)){
        throw new Error('Invalid person input')
    }
    if(!seat || !(seat instanceof Seat)){
        throw new Error('Invalid person input')
    }
    this.person = person;
    this.seat = seat;
}


//testing
var dario = new Person("dario", "Stamenkovic")
var seat = new Seat (67, 'e')
var passenger = new Passenger (dario, seat)
console.log(dario);
console.log(seat);
console.log(passenger);


})()

