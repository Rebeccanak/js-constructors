//1



// You are working on a web application for a car rental company. They want to keep track
// of their car inventory and rental information. Your task is to create a JavaScript class or
// function constructor for representing cars in their inventory and another one for
// representing rental information.
// Requirements:
// 1) Create a Car class or function constructor that has the following properties:
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.
// The Car class or function constructor should also have a method called
// toggleAvailability that changes the isAvailable property to its opposite value (true to
// false, false to true)


class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvailable=isAvailable;
    }
    toggleAvailability(){
this.isAvailable=!this.isAvailable
console.log(this.isAvailable)
    }
}
let car= new Car(`Jeep`,`Wrangler`,2021,`True`)
console.log({car})
car.toggleAvailability()

class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName= renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;
    }
 calculateRentalDuration(){
    let differenceInTime=new Date(this.rentalEndDate)-new Date(this.rentalStartDate);
    return Math.round(Math.abs(differenceInTime/(1000*3600*24)))
    }
}
let rental= new Rental;(`Toyota`,`Discovery`,2019,`False`,`Automack`,new Date(`2022-07-12`),new Date(`2022-07-20`));
let durationOfRental=rental.calculateRentalDuration();
console.log(durationOfRental)


class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.currentQuestionIndex = 0;
    }
  
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    

    }
