//задача 1

class Transport {
    constructor(title, model, color){
        this.title = title;
        this.model = model;
        this.color = color;
    }
}

class Car extends Transport {
    constructor(title, model, color, maxSpeed, speed){
        super(title, model, color);
        this.maxSpeed = maxSpeed;
        this.speed = speed;
    }
    _stopspead = 150;

    stopspead (){
        console.log( `Braking speed : ${this._stopspead}`);
    }
    break(){
        if(this._stopspead <= 0){
            console.log(` car ${this.title} ${this.model} stoped`);
        }else{
            this._stopspead -= this.speed;
            this.stopspead()
        }
    }
}
    const bmw = new Car('BMW', 'M5', 'Black', 150, 25)
    bmw.break()
    bmw.break()
    bmw.break()
    bmw.break()
    bmw.break()
    bmw.break()
    bmw.break()

    ///задача 2

    class User {
        constructor(name, surname, year) {
            this.name = name;
            this.sorname = surname;
            this.year = year;
        }
        
    }

    class Studen extends User{
        constructor(name, surname, year){
            super(name, surname, year);
        
        }
        getFullName(){
            console.log(` student full name: ${this.name}  ${this.sorname}`);
        } 
        currentyear = 2023;


        getCourse(){
            console.log( "the student is studying in the ",this.currentyear-this.year , "rd year");
        }

 
    }


const user1 = new Studen( 'Oibek' , 'Ahmetzanov',  2020)
user1.getFullName()
user1.getCourse()
