'use strict';

(function () {
    console.log('Hi!\n');



function Person (name, surname) {
    if (!name || !surname) {
        throw new Error('Name and surname fields required');
    }
    this.name = name,
    this.surname = surname;
    this.getData = function () {
        return `${this.name} ${this.surname}`;
        
    }
};


function Seat (number, category) {
    // if category not defined
    this.category = category || 'e';
    this.number = number || Math.floor(10 + 91 * Math.random());
    /*if (!['e','b'].includes(category)) {
        throw new Error('Invalid category input');
    }   */ 
    this.getData = function () {
        return this.number +', ' + this.category.toUpperCase(); 
    }
};


function Passenger (personObject, seatObject) {
    if (!personObject || !(personObject instanceof Person)) {
        throw new Error('Invalid person input');
    }
    if (!seatObject || !(seatObject instanceof Seat)) {
        throw new Error ('Invalid seat input');
    }
    this.person = personObject.getData();
    this.seat = seatObject.getData();
    this.getData = function () {
        if (this.seat.category === 'e') {
            seat = 'economy'
        }
        else if ( this.seat.category === 'b') {
            seat = 'bussines'
        }
        return `               ${this.seat}, ${this.person}`;
        
    };
}


function Flight (relation, date) {
    if (!relation || ! date) {
        throw new Error('Relation and date input required');
    } 
    this.relation = relation;
    this.date = new Date(date);
    this.listOfPassengers = [];
    this.addPassenger = function (passengerObject) {
        if (this.listOfPassengers.length === 100) {
            throw Error ('Flight is full')
        }    
        this.listOfPassengers.forEach(function (passengerElement) {
            if (passengerObject.seat.number === passengerElement.seat.number) {
                throw Error ('Seat already taken');
            }            
            else if (passengerElement.person.name === passengerObject.person.name && passengerElement.person.surname === passengerObject.person.surname ) {
                throw Error ('Passenger already on list');
            }
            return this.listOfPassengers.push(passengerObject);
        })        
    };
    this.getData = function () { 
        let flightString = '';
        this.listOfPassengers.forEach (function(passengerElement) {
            flightString += `
            ${passengerElement.getData()}`;
            
        });
        return ` ${this.date}
        ${this.relation}${flightString}`;
    
    };
}

function Airport () {    
    this.name = 'Nikola Tesla'; 
    this.listOfFlights = [];
    this.addFlight = function (flightObject) {
        return this.listOfFlights.push(flightObject);
    };
    this.getData = function () {
        let totalPassengers = 0;
        let flightData = '';
        this.listOfFlights.forEach(function(flightElement) {
            totalPassengers += flightElement.listOfPassengers.length;
            flightData += '\n' + flightElement.getData() + '\n';
        });
        return 'Airport: ' + this.name + ', total passengers: ' + totalPassengers + '\n' + flightData; 
    };
};



function createFlight (relation, date) {
    let flightObject = new Flight (relation, date);
    return flightObject;
};


function createPassenger (firstName, lastName, seatNumber, category) {
    let personObject = new Person (firstName, lastName);
    let seatObject = new Seat (seatNumber, category);
    let passengerObject = new Passenger (personObject, seatObject);
    return passengerObject;
};



let airportObject1 = new Airport();



let flightObject1 = createFlight ('Belgrade - New York', 'Oct 25 2017');
let flightObject2 = createFlight('Barcelona - Belgrade', 'Nov 11 2017');


let passengerObject1 = createPassenger ('John', 'Snow', 1, 'b');
let passengerObject2 = createPassenger ('Cersei', 'Lannister', 2, 'b');
let passengerObject3 = createPassenger ('Daenerys', 'Targaryen', 14);
let passengerObject4 = createPassenger ('Tyrion', 'Lannister', 1);


flightObject1.addPassenger(passengerObject1);
flightObject1.addPassenger(passengerObject2);

console.log(flightObject1.getData());

flightObject2.addPassenger(passengerObject3);
flightObject2.addPassenger(passengerObject4);


airportObject1.addFlight(flightObject1);
airportObject1.addFlight(flightObject2);

console.log(airportObject1.getData());

})();
