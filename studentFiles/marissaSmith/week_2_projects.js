//Week 2 projects
var Person = {
    firstName : "Jimi",
    lastName: "Jamison",
    age : 35,

    changeAge : function(i){
        return this.age + i;
    },
    greet : function(){
        return "Hi, " + Person.firstName  // or this.firstName
    }
}
console.log(Person.firstName);
console.log(Person.lastName);
console.log(Person.age);
console.log(Person.changeAge(5));
console.log(Person.greet());


// http://orteil.dashnet.org/cookieclicker/  // game to hack

// create an object with values and 2-3 methods
var car = {
    make : "Nissan",
    model : "Titan",
    year : 2018,
    color : "Yellow",
    numOfDoors : 4,
    sunRoof : 0,
    lights: "On",
    speed: 25,

    horn : function(a){
        if(a==1){
            return "Beep";
        }
        else if(a==2){
            return "HONK";
        }
        return "silence";
    },
    lightsFunction : function(){
        if(car.lights == "On"){
            return "Lights Off";
        }
        else return "Lights On";
    },
    speedChange : function(i){
        return (this.speed + i) + " mph"
    },
}
console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.numOfDoors);
console.log(car.sunRoof);
console.log(car.lights);
console.log(car.speed);
console.log(car.horn(1));
console.log(car.lightsFunction());
console.log(car.speedChange(5));


var dog = {
    breed : "Grane Dane",
    legNum : 4,
    color : "Brindle",
    gender : "Male",
    currentWeight : 100,

    bark : function(){
        return "Woof";
    },
    fetch : function(a){
        if(a=="Ball"){
            return "Return Ball";
        }
        else return "Chew Stick";
    },
    eatFood : function(a){
        return this.currentWeight + (a*.5);
    },
}
console.log(dog.breed);
console.log(dog.legNum);
console.log(dog.color);
console.log(dog.gender);
console.log(dog.currentWeight);
console.log(dog.bark());
console.log(dog.fetch("Ball"));
console.log(dog.eatFood(10));


var radio = {
    callLetters: "KMXD",
    dialNumber: 105.4,
    musicType: "Country",
    demograph: "Teens",
    popular: "Poor",

    demoChange: function () {
        if(radio.demograph == "Teens"){
			radio.demograph == "Adult";
		}
		else radio.demograph == "Other";
    },
    popChange: function () {
        if (radio.demograph == "Adult") {
            radio.popular == "Good";
        }
        else if(radio.demograph == "Teens") {
            radio.popular == "Poor";
        }
		else radio.popular == "Fair";
    }
}
console.log(radio.callLetters);
console.log(radio.dialNumber);
console.log(radio.musicType);
console.log(radio.demograph);
console.log(radio.popular);
console.log(radio.demoChange());
console.log(radio.popChange());
console.log(radio.demograph);
console.log(radio.popular);


var calculator = {
	calcAdd : function(a,b){
		return a + "+" + b + "=" + (a+b)
	},
	calcSubtract : function(a,b){
		return a + "-" + b + "=" + (a-b)
	},
	calcMultiply : function(a,b){
		return a + "*" + b + "=" + (a*b)
	},
	calcDivide : function(a,b){
		return a + "/" + b + "=" + (a/b)
	}
};
console.log(calculator.calcAdd(4,7));
console.log(calculator.calcSubtract(7,5));
console.log(calculator.calcMultiply(2,9));
console.log(calculator.calcDivide(24,6));

