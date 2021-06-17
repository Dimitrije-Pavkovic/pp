/*
Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department
*/


//Create constructor functions with properties representing the following:
//Person: name, surname

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  Person.prototype.fullName = function () {
    return this.name + ' ' + this.surname;
  };
  Person.prototype.printInfo = function () {
    console.log(this.fullName());
  };

  var jovan = new Person('PJOvan', 'Jovanovic');
  var ivan = new Person('Ivan', 'Jovicic');


//Employee: inherits Person and has job and salary


function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
  }
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  
  var jovaTester = new Employee('Jovan', 'Jovici', 'tester','50000 dinara');
  console.log(jovaTester);

  //Developer: inherits from Employee and has specialization

  function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
  }
  Developer.prototype = Object.create(Employee.prototype);
  Developer.prototype.constructor = Developer;

//getSpecialization which prints out the name of the specialization

  Developer.prototype.getSpecialization = function () {
    console.log(this.name + ' is specialized for ' + this.specialization + ' programming.');
  };
  
  
  
  var markoDev = new Developer('Marko', 'Markovic', 'developer','80000 dinara', 'JavaScript');
  console.log(markoDev);
  markoDev.getSpecialization();


  //Manager: inherits from Employee and has department

  function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
  }
  Manager.prototype = Object.create(Employee.prototype);
  Manager.prototype.constructor = Manager;
  
  
  var milosManager = new Manager('Milos', 'Milosevic', 'manager','120000 dinara', 'IT sektor');
  console.log(milosManager);


