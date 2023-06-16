class Car {
    constructor(color,model,year){
        this.color = color,
        this.model = model,
        this.year = year
    }
    drive(){
        console.log("I am driving")
    }
    honk(){
        console.log("PIM PIM")
    }
}
    class Truck extends Car{
        
    }
var peterCar = new Car("white","benz","2022")
// var peterCar = new Truck("white","benz","2022")
// peterCar.drive()
peterCar.honk()
// var goodnessCar = new Car("Black","toyota","2025")
// console.log(goodnessCar)