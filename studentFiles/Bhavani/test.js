var Person = {
    firstname:"JIMI",
    lastname:"JAISON",
    age: 35,
    changeAge:function(){
        return this.age+1;
    }
    greet:function(){
        return "Hi, "+ this.firstname;
    }
};
console.log(Person.firstname);
console.log(Person.lastname);
console.log(Person.age);
console.log(Person.changeAge());
console.log(Person.greet());
/*Car
Attributes:Make,Model,Year,Sunroof,Lights
Methods:Honk,changelights,sunroof
 */
var car={
    Make:"Honda",
    Model:"civic",
        Year:2012,
        Sunroof:1,
        SRStatus:0,
        Lights:0,

    Honk:function(){
        return "bannnnnnnnnnnn";
    }


   Changelights:function(){
            if (Lights=1) {
                Lights = 0;
                return "Turn off the lights";
                return this.Lights;
            } else {
                return "Turn ON the lights";
                Lights=1;
                return this.Lights;
            }
    }

    checksunroof:function(){

        if (Sunroof = 1){
            if (SRStatus = 1){
                return "Sunroof is open";
            } else return "Sunroof is closed";
        }

        else return "No Sunroof";

    }


};

console.log(car.Make);
console.log(car.Year);
console.log(car.Model);
console.log(car.Lights);
console.log(car.Honk());
console.log(car.Changelights());
console.log(car.checksunroof());


/*****Calculator*/
/*****Atributes:Type
 Methods:Add,Subtract,Multiply,Divide*/

var Calculator={

}